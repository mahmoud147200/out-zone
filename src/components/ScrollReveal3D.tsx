import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Top Scroll Progress Bar + Parallax 3D Floating Ambient Shapes
 */
export const ScrollProgress3D: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  // Parallax 3D floating shapes linked to scroll
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '120%']);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 240]);

  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      {/* Glowing Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-400 via-brandOrange-500 to-amber-400 origin-right z-[60] shadow-[0_0_15px_rgba(249,115,22,0.8)]"
        style={{ scaleX }}
      />

      {/* Subtle 3D Parallax Floating Rings in Background */}
      {!prefersReducedMotion && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: '1200px' }}>
          <motion.div
            style={{ y: y1, rotateZ: rotate1 }}
            className="hidden lg:block absolute top-[22%] left-[4%] w-28 h-28 rounded-3xl border border-brandOrange-500/10 bg-gradient-to-br from-brandOrange-500/[0.03] to-transparent shadow-[0_0_30px_rgba(249,115,22,0.06)]"
          />
          <motion.div
            style={{ y: y2, rotateZ: rotate2 }}
            className="hidden lg:block absolute top-[65%] right-[3%] w-36 h-36 rounded-full border border-electric-400/10 bg-gradient-to-tr from-electric-500/[0.03] to-transparent shadow-[0_0_35px_rgba(14,165,233,0.06)]"
          />
        </div>
      )}
    </>
  );
};

interface Reveal3DProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'flip';
  className?: string;
}

/**
 * 3D Scroll Reveal Wrapper for Section Headers & Blocks
 */
export const Reveal3D: React.FC<Reveal3DProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -40, rotateY: 10, scale: 0.96 };
      case 'right':
        return { opacity: 0, x: 40, rotateY: -10, scale: 0.96 };
      case 'flip':
        return { opacity: 0, y: 35, rotateX: 16, scale: 0.95 };
      case 'down':
        return { opacity: 0, y: -30, rotateX: -10, scale: 0.96 };
      case 'up':
      default:
        return { opacity: 0, y: 35, rotateX: 12, scale: 0.96 };
    }
  };

  return (
    <div style={{ perspective: '1200px' }} className={className}>
      <motion.div
        initial={getInitial()}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
        transition={{
          type: 'spring',
          stiffness: 95,
          damping: 20,
          mass: 0.85,
          delay,
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface TiltCard3DProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
  wrapperClassName?: string;
  intensity?: number;
  onClick?: () => void;
}

/**
 * 3D Scroll-Reveal + Interactive 3D Mouse-Tilt Card
 */
export const TiltCard3D: React.FC<TiltCard3DProps> = ({
  children,
  index = 0,
  className = '',
  wrapperClassName = '',
  intensity = 6,
  onClick,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY, isHovered: true });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50, isHovered: false });
  };

  if (prefersReducedMotion || intensity === 0) {
    return (
      <div onClick={onClick} className={`relative h-full ${wrapperClassName} ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ perspective: '1200px' }} className={`h-full ${wrapperClassName}`}>
      <motion.div
        ref={cardRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{
          opacity: 0,
          y: 40,
          rotateX: 14,
          rotateY: index % 2 === 0 ? -5 : 5,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: tilt.isHovered ? 1.015 : 1,
        }}
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -30px 0px' }}
        transition={{
          opacity: { duration: 0.45, delay: (index % 3) * 0.08 },
          y: { type: 'spring', stiffness: 100, damping: 20, delay: (index % 3) * 0.08 },
          rotateX: tilt.isHovered
            ? { type: 'spring', stiffness: 260, damping: 22 }
            : { type: 'spring', stiffness: 90, damping: 20, delay: (index % 3) * 0.08 },
          rotateY: tilt.isHovered
            ? { type: 'spring', stiffness: 260, damping: 22 }
            : { type: 'spring', stiffness: 90, damping: 20, delay: (index % 3) * 0.08 },
          scale: { type: 'spring', stiffness: 220, damping: 22 },
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className={`relative h-full ${className}`}
      >
        {/* Dynamic 3D Specular Glare Overlay */}
        {tilt.isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-30 rounded-3xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.10) 0%, rgba(249,115,22,0.04) 35%, transparent 70%)`,
            }}
          />
        )}
        {children}
      </motion.div>
    </div>
  );
};
