"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export function NodeNetwork() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      className="absolute inset-0 -z-10 net-mask"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 40 },
          color: { value: "#5a9a3d" },
          links: {
            enable: true,
            color: "#5a9a3d",
            opacity: 0.2,
            distance: 150,
          },
          move: { enable: true, speed: 0.5 },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
