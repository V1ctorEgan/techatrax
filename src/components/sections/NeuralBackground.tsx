"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
  pulseSpeed: number;
}

interface GlowOrb {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  opacity: number;
}

const NODE_COUNT_DESKTOP = 80;
const NODE_COUNT_MOBILE = 35;
const CONNECTION_DISTANCE = 150;
const MOUSE_ATTRACTION_RADIUS = 200;
const MOUSE_ATTRACTION_STRENGTH = 0.012;
const MAX_FPS = 60;
const FRAME_INTERVAL = 1000 / MAX_FPS;

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const glowOrbsRef = useRef<GlowOrb[]>([]);
  const lastFrameRef = useRef(0);
  const isVisibleRef = useRef(true);
  const isMobileRef = useRef(false);

  const initNodes = useCallback((width: number, height: number) => {
    isMobileRef.current = width < 768;
    const count = isMobileRef.current ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;

    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.8,
      opacity: Math.random() * 0.5 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.005,
    }));

    glowOrbsRef.current = [
      {
        x: width * 0.25,
        y: height * 0.35,
        targetX: width * 0.25,
        targetY: height * 0.35,
        radius: Math.min(width, height) * 0.55,
        opacity: 0.07,
      },
      {
        x: width * 0.75,
        y: height * 0.65,
        targetX: width * 0.75,
        targetY: height * 0.65,
        radius: Math.min(width, height) * 0.45,
        opacity: 0.05,
      },
    ];
  }, []);

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisibleRef.current) {
      animFrameRef.current = requestAnimationFrame(draw);
      return;
    }

    // FPS cap
    if (timestamp - lastFrameRef.current < FRAME_INTERVAL) {
      animFrameRef.current = requestAnimationFrame(draw);
      return;
    }
    lastFrameRef.current = timestamp;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const nodes = nodesRef.current;
    const mouse = mouseRef.current;
    const glowOrbs = glowOrbsRef.current;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // --- Glow orbs (radial gradients that drift) ---
    glowOrbs.forEach((orb) => {
      orb.x += (orb.targetX - orb.x) * 0.003;
      orb.y += (orb.targetY - orb.y) * 0.003;

      // Slowly drift targets
      orb.targetX += (Math.random() - 0.5) * 0.4;
      orb.targetY += (Math.random() - 0.5) * 0.4;
      orb.targetX = Math.max(
        orb.radius * 0.1,
        Math.min(width - orb.radius * 0.1, orb.targetX),
      );
      orb.targetY = Math.max(
        orb.radius * 0.1,
        Math.min(height - orb.radius * 0.1, orb.targetY),
      );

      const grad = ctx.createRadialGradient(
        orb.x,
        orb.y,
        0,
        orb.x,
        orb.y,
        orb.radius,
      );
      grad.addColorStop(0, `rgba(0, 220, 180, ${orb.opacity})`);
      grad.addColorStop(0.4, `rgba(0, 120, 200, ${orb.opacity * 0.5})`);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);
    });

    // --- Update + draw nodes ---
    nodes.forEach((node) => {
      // Mouse attraction
      const dx = mouse.x - node.x;
      const dy = mouse.y - node.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_ATTRACTION_RADIUS && dist > 0) {
        const force =
          (1 - dist / MOUSE_ATTRACTION_RADIUS) * MOUSE_ATTRACTION_STRENGTH;
        node.vx += (dx / dist) * force;
        node.vy += (dy / dist) * force;
      }

      // Velocity damping
      node.vx *= 0.98;
      node.vy *= 0.98;

      // Speed cap
      const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      if (speed > 1.2) {
        node.vx = (node.vx / speed) * 1.2;
        node.vy = (node.vy / speed) * 1.2;
      }

      node.x += node.vx;
      node.y += node.vy;

      // Wrap edges
      if (node.x < -10) node.x = width + 10;
      if (node.x > width + 10) node.x = -10;
      if (node.y < -10) node.y = height + 10;
      if (node.y > height + 10) node.y = -10;

      // Pulse opacity
      node.pulsePhase += node.pulseSpeed;
      const pulsedOpacity = node.opacity + Math.sin(node.pulsePhase) * 0.12;

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 210, 170, ${pulsedOpacity})`;
      ctx.fill();

      // Subtle glow on node
      const nodeGlow = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        node.radius * 4,
      );
      nodeGlow.addColorStop(0, `rgba(0, 210, 170, ${pulsedOpacity * 0.3})`);
      nodeGlow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nodeGlow;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
      ctx.fill();
    });

    // --- Draw connections ---
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DISTANCE) {
          const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.18;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0, 180, 150, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes(canvas.width, canvas.height);
    };

    resize();
    animFrameRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    // Pause when tab is hidden
    const handleVisibility = () => {
      isVisibleRef.current = !document.hidden;
    };

    // Pause on mobile scroll for performance
    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (isMobileRef.current) {
        isVisibleRef.current = false;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          isVisibleRef.current = true;
        }, 150);
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [draw, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
