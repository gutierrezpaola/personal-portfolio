import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particless = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);

    const canvasParticles = document.getElementById("tsparticles").firstChild;
    console.log(canvasParticles);

    canvasParticles.classList.add("style-particles");

    canvasParticles.style = {};
  }, []);

  return (
    <>
      <div className="bg-dark py-5 py-md-5">
        <div className="container">
          <div className="particulas">
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fpsLimit: 50,
                interactivity: {
                  events: {
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#fff",
                  },
                  links: {
                    color: "#tranparent",
                    distance: 90,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 100,
                    },
                    value: 10,
                  },
                  opacity: {
                    value: 0.3,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: 2,
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Particless;
