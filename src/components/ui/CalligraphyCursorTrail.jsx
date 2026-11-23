import React, { useEffect, useRef } from 'react';

/**
 * CalligraphyCursorTrail
 * Pure calligraphy letters trailing smoothly behind the mouse cursor along its motion path.
 * - Just letters: No card, no border, no boxes.
 * - Monochrome palette: Crisp white, deep black, and soft ivory mix.
 * - Disabled on touch devices for zero mobile overhead.
 */
const CALLIGRAPHY_GLYPHS = [
  'ر', 'و', 'ع', 'ة', 'ف', 'ن', 'س', 'ح',
  'ل', 'م', 'ق', 'ي', 'ط', 'ص', 'ك', 'ج',
  'د', 'هـ', 'لا', 'R', 'F', 'ع', 'ر', 'و'
];

// White and golden luxury palette
const GOLDEN_PALETTE = [
  '#9E672B', // Deep Bronze Gold
  '#C79F5E', // Classic Antique Gold
  '#B88E4B', // Warm Liquid Gold
  '#1C1917', // Deep Sumi Ink
  '#D4AF67', // Metallic Gold
  '#7D5C26', // Rich Deep Gold
];

export default function CalligraphyCursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Disable on touch-only devices
    if (typeof window === 'undefined') return;
    const isTouchOnly = window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(hover: hover)').matches;
    if (isTouchOnly) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    let lastPos = { x: -100, y: -100 };
    let glyphIndex = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const onMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      const dx = currentX - lastPos.x;
      const dy = currentY - lastPos.y;
      const dist = Math.hypot(dx, dy);

      // Spawn small letters along cursor movement path (every ~14px)
      if (dist >= 14 || lastPos.x < 0) {
        const glyph = CALLIGRAPHY_GLYPHS[glyphIndex % CALLIGRAPHY_GLYPHS.length];
        const color = GOLDEN_PALETTE[glyphIndex % GOLDEN_PALETTE.length];
        glyphIndex++;

        // Calculate angle of motion along the movement curve
        const angle = Math.atan2(dy, dx) * 0.35;

        particles.push({
          x: currentX,
          y: currentY,
          char: glyph,
          fontSize: 11 + (Math.random() * 4), // Small, dainty calligraphy letters (11px - 15px)
          angle: angle,
          life: 1.0,
          decay: 0.02, // ~1s lifespan
          color: color,
          vx: (Math.random() - 0.5) * 0.25,
          vy: -0.15 - Math.random() * 0.2, // delicate floating ink drift
        });

        lastPos = { x: currentX, y: currentY };
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = Math.min(1, p.life * 1.4);
        // Subtle shrink as particle ages
        const scale = p.life < 0.35 ? (p.life / 0.35) * 0.7 + 0.3 : 1;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.scale(scale, scale);

        // Subtle soft gold glow
        ctx.shadowColor = `rgba(199, 159, 94, ${0.4 * alpha})`;
        ctx.shadowBlur = 3;

        // Draw ONLY the calligraphy letter - NO card, NO border, NO box
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.font = `bold ${Math.round(p.fontSize)}px "Aref Ruqaa", "Amiri", "Pinyon Script", serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.char, 0, 0);

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}
    />
  );
}
