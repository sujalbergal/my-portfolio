import { useEffect, useRef, useState } from "react";
import "./effects.css";

/* ---------- helpers ---------- */
const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ---------- 1. Headline line-by-line rise (page-load moment) ----------
   <Line delay={0}>Hi, I'm <span className="accent">Sujal Bergal.</span></Line>
   <Line delay={120}>I turn ideas into</Line>
   <Line delay={240}>working software.</Line>
*/
export function Line({ delay = 0, children }) {
  return (
    <span className="fx-line">
      <span className="fx-line-in" style={{ "--d": `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

/* ---------- 2. Scroll reveal ----------
   Use on sections / blocks below the hero, not on every element.
   <Reveal as="section" delay={80}>...</Reveal>
*/
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced() || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`fx-reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- 3. 3D tilt card (mouse, pen, and touch-drag) ----------
   Wrap your existing photo card. Your own rotate(-3deg) etc. stays on the child.
   <TiltCard><div className="photo-card">...</div></TiltCard>
*/
export function TiltCard({ children, max = 7, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    let raf = 0;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--ry", `${x * max * 2}deg`);
        el.style.setProperty("--rx", `${-y * max * 2}deg`);
        el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
        el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
        el.classList.add("is-active");
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.classList.remove("is-active");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointercancel", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointercancel", onLeave);
    };
  }, [max]);

  return (
    <div className={`fx-float ${className}`}>
      <div ref={ref} className="fx-tilt">
        {children}
        <span className="fx-glare" aria-hidden="true" />
      </div>
    </div>
  );
}

/* ---------- 4. Magnetic button ----------
   <Magnetic><a className="btn">GitHub</a></Magnetic>
*/
export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced() || !hasFinePointer()) return;
    const child = el.firstElementChild;
    if (!child) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      child.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const onLeave = () => {
      child.style.transform = "";
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className="fx-magnetic">
      {children}
    </span>
  );
}

/* ---------- 5. Scroll progress bar (put once, e.g. in App) ---------- */
export function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div ref={ref} className="fx-progress" aria-hidden="true" />;
}

/* ---------- 6. Cursor spotlight (put once, e.g. in App) ---------- */
export function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReduced() || !hasFinePointer()) return;
    const el = ref.current;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--mx", `${e.clientX}px`);
        el.style.setProperty("--my", `${e.clientY}px`);
        el.style.opacity = "1";
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <div ref={ref} className="fx-spotlight" aria-hidden="true" />;
}

/* ---------- 7. Cursor ring (put once; desktop only) ----------
   Keeps the normal cursor, adds a lagging ring that grows over links/buttons. */
export function CursorRing() {
  const ref = useRef(null);
  const [enabled] = useState(() => hasFinePointer() && !prefersReduced());

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    let tx = -100, ty = -100, x = -100, y = -100, raf = 0;

    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onOver = (e) => {
      el.classList.toggle("is-hover", !!e.target.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="fx-cursor" aria-hidden="true" />;
}

/* ---------- 8. Nav "scrolled" state ----------
   const scrolled = useScrolled();
   <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
*/
export function useScrolled(offset = 16) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return scrolled;
}
