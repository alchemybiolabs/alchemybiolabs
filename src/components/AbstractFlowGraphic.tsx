import { useEffect, useRef } from "react";

interface AbstractFlowGraphicProps {
  variant: "hero" | "disruption" | "flow" | "minimal";
}

export const AbstractFlowGraphic = ({ variant }: AbstractFlowGraphicProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    resize();
    window.addEventListener("resize", resize);

    let animationId: number;
    let time = 0;

    const draw = () => {
      const width = canvas.width / (window.devicePixelRatio || 1);
      const height = canvas.height / (window.devicePixelRatio || 1);
      
      ctx.clearRect(0, 0, width, height);

      if (variant === "hero") {
        drawHeroGraphic(ctx, width, height, time);
      } else if (variant === "disruption") {
        drawDisruptionGraphic(ctx, width, height, time);
      } else if (variant === "flow") {
        drawFlowGraphic(ctx, width, height, time);
      } else if (variant === "minimal") {
        drawMinimalGraphic(ctx, width, height, time);
      }

      time += 0.002;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
    />
  );
};

function drawHeroGraphic(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  // Organic flowing shapes
  const centerX = width * 0.7;
  const centerY = height * 0.5;

  // Large ambient gradient circle
  const gradient = ctx.createRadialGradient(
    centerX, centerY, 0,
    centerX, centerY, Math.min(width, height) * 0.6
  );
  gradient.addColorStop(0, "hsla(175, 25%, 70%, 0.15)");
  gradient.addColorStop(0.5, "hsla(175, 20%, 75%, 0.08)");
  gradient.addColorStop(1, "hsla(175, 15%, 80%, 0)");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, Math.min(width, height) * 0.6, 0, Math.PI * 2);
  ctx.fill();

  // Flowing organic curves
  for (let i = 0; i < 5; i++) {
    const offset = i * 0.15;
    const alpha = 0.03 + (i * 0.01);
    
    ctx.strokeStyle = `hsla(175, 20%, 50%, ${alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();

    for (let x = 0; x <= width; x += 5) {
      const baseY = height * 0.5;
      const wave1 = Math.sin((x * 0.003) + time + offset) * 100;
      const wave2 = Math.sin((x * 0.005) + time * 0.7 + offset) * 60;
      const wave3 = Math.sin((x * 0.002) + time * 1.2 + offset) * 40;
      const y = baseY + wave1 + wave2 + wave3 + (i * 30);

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }

  // Floating particles
  for (let i = 0; i < 20; i++) {
    const particleX = (Math.sin(time * 0.3 + i * 1.5) * 0.3 + 0.5) * width;
    const particleY = (Math.cos(time * 0.2 + i * 1.2) * 0.3 + 0.5) * height;
    const size = 2 + Math.sin(time + i) * 1;
    const alpha = 0.1 + Math.sin(time * 0.5 + i) * 0.05;

    ctx.fillStyle = `hsla(175, 25%, 55%, ${alpha})`;
    ctx.beginPath();
    ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawDisruptionGraphic(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  // Fragmented, broken patterns suggesting disruption
  const segments = 12;
  
  for (let i = 0; i < segments; i++) {
    const angle = (i / segments) * Math.PI * 2 + time * 0.1;
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const baseRadius = Math.min(width, height) * 0.25;
    
    // Irregular, broken arcs
    const startAngle = angle + Math.sin(time + i) * 0.3;
    const endAngle = angle + 0.4 + Math.sin(time * 0.7 + i * 2) * 0.2;
    const radius = baseRadius + Math.sin(time * 0.5 + i * 0.8) * 30;
    
    const alpha = 0.08 + Math.sin(time + i) * 0.03;
    ctx.strokeStyle = `hsla(0, 0%, 40%, ${alpha})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
  }

  // Scattered fragments
  for (let i = 0; i < 30; i++) {
    const x = (Math.sin(i * 2.5 + time * 0.3) * 0.4 + 0.5) * width;
    const y = (Math.cos(i * 1.8 + time * 0.2) * 0.4 + 0.5) * height;
    const size = 1 + Math.random() * 2;
    const alpha = 0.05 + Math.sin(time + i) * 0.02;

    ctx.fillStyle = `hsla(175, 15%, 50%, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawFlowGraphic(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  // Layered flowing structures suggesting control and selectivity
  const layers = 4;
  
  for (let layer = 0; layer < layers; layer++) {
    const yOffset = (layer / layers) * height * 0.6 + height * 0.2;
    const alpha = 0.04 + layer * 0.02;
    
    ctx.strokeStyle = `hsla(175, 25%, 50%, ${alpha})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();

    for (let x = 0; x <= width; x += 3) {
      const wave1 = Math.sin((x * 0.004) + time + layer * 0.5) * 40;
      const wave2 = Math.cos((x * 0.006) + time * 0.8 + layer) * 25;
      const y = yOffset + wave1 + wave2;

      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }

  // Vertical connectors
  for (let i = 0; i < 8; i++) {
    const x = (i + 1) * (width / 9);
    const startY = height * 0.25 + Math.sin(time + i) * 20;
    const endY = height * 0.75 + Math.cos(time + i) * 20;
    
    const gradient = ctx.createLinearGradient(x, startY, x, endY);
    gradient.addColorStop(0, "hsla(175, 25%, 50%, 0)");
    gradient.addColorStop(0.3, "hsla(175, 25%, 50%, 0.06)");
    gradient.addColorStop(0.7, "hsla(175, 25%, 50%, 0.06)");
    gradient.addColorStop(1, "hsla(175, 25%, 50%, 0)");
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, startY);
    ctx.lineTo(x, endY);
    ctx.stroke();
  }
}

function drawMinimalGraphic(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
  // Very subtle, minimal marks
  const marks = 6;
  
  for (let i = 0; i < marks; i++) {
    const x = (i + 1) * (width / (marks + 1));
    const y = height * 0.5 + Math.sin(time * 0.5 + i * 1.2) * 30;
    const length = 40 + Math.sin(time + i) * 10;
    
    const alpha = 0.08 + Math.sin(time * 0.3 + i) * 0.02;
    ctx.strokeStyle = `hsla(175, 20%, 55%, ${alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y - length / 2);
    ctx.lineTo(x, y + length / 2);
    ctx.stroke();
  }
}
