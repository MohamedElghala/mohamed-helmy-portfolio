"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface HeroThreeCanvasProps {
  className?: string;
}

export default function HeroThreeCanvas({ className = "" }: HeroThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. WebGL Support Detection
    try {
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // 2. Scene, Camera & Renderer Setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: typeof window !== "undefined" ? window.devicePixelRatio < 2 : true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)); // DPR Clamping for 60 FPS
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // 3. Central 3D Sculpture: Obsidian Chrome & Champagne Torus Knot
    const knotGroup = new THREE.Group();
    scene.add(knotGroup);

    // Inner Obsidian Core
    const knotGeometry = new THREE.TorusKnotGeometry(1.6, 0.42, 140, 30, 2, 3);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x090b0c,
      roughness: 0.15,
      metalness: 0.95,
    });
    const coreMesh = new THREE.Mesh(knotGeometry, coreMaterial);
    knotGroup.add(coreMesh);

    // Outer Champagne Wireframe Accent
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xc8a96a,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireframeMesh = new THREE.Mesh(knotGeometry, wireframeMaterial);
    wireframeMesh.scale.set(1.002, 1.002, 1.002);
    knotGroup.add(wireframeMesh);

    // 4. Surrounding Neural Stardust Particle Constellation
    const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 600 : 1400;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorChampagne = new THREE.Color(0xc8a96a);
    const colorCyan = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution around the knot
      const radius = 2.4 + Math.random() * 4.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = colorChampagne.clone().lerp(colorCyan, Math.random() * 0.4);
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particlesMesh);

    // 5. Cinematic Lighting Rig
    const ambientLight = new THREE.AmbientLight(0x101316, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xc8a96a, 4.5, 20);
    keyLight.position.set(5, 4, 6);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x06b6d4, 3.0, 18);
    rimLight.position.set(-5, -4, -4);
    scene.add(rimLight);

    // 6. Interactive State: Hover Parallax & Inertial Orbit Drag
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    let isDragging = false;
    let prevPointerX = 0;
    let prevPointerY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevPointerX = e.clientX;
      prevPointerY = e.clientY;
      dragVelocityX = 0;
      dragVelocityY = 0;
    };

    const handlePointerMove = (e: PointerEvent) => {
      // Update normalized mouse coordinates for parallax
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = -(e.clientY / window.innerHeight) * 2 - 1;

      if (isDragging) {
        const deltaX = e.clientX - prevPointerX;
        const deltaY = e.clientY - prevPointerY;
        prevPointerX = e.clientX;
        prevPointerY = e.clientY;

        dragVelocityX = deltaX * 0.005;
        dragVelocityY = deltaY * 0.005;

        knotGroup.rotation.y += dragVelocityX;
        knotGroup.rotation.x += dragVelocityY;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // 7. Responsive Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.position.z = w < 768 ? 9.5 : 7.5; // Back up on mobile
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // 8. Visibility Optimization: Pause loop when scrolled offscreen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // 9. 60 FPS Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return; // Halt GPU cycles off-screen

      const elapsedTime = clock.getElapsedTime();

      // Exponential lerp damping for buttery mouse parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Base idle rotation + drag inertia decay
      if (!isDragging) {
        dragVelocityX *= 0.94;
        dragVelocityY *= 0.94;
        knotGroup.rotation.y += 0.0035 + dragVelocityX;
        knotGroup.rotation.x += 0.002 + dragVelocityY;
      }

      // Parallax offset on knot position & camera
      knotGroup.position.x = mouseX * 0.35;
      knotGroup.position.y = mouseY * 0.25;

      // Gentle wave breathing on particles
      particlesMesh.rotation.y = elapsedTime * 0.03;
      particlesMesh.rotation.x = Math.sin(elapsedTime * 0.15) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 10. Strict Cleanup & Disposal
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("resize", handleResize);

      knotGeometry.dispose();
      coreMaterial.dispose();
      wireframeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto touch-pan-y ${className}`}
      aria-hidden="true"
    >
      {hasWebGL ? (
        <canvas ref={canvasRef} className="w-full h-full block" />
      ) : (
        <div className="absolute inset-0 bg-radial-gradient from-champagne/10 via-transparent to-noir-950" />
      )}
    </div>
  );
}
