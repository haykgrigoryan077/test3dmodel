import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Model } from "./Model/Circle";
import "./App.css";

function App() {
  const canvasRef = useRef(null);
  let lastScrollTop = 0;
  const azimuthalRef = useRef(0);
  const [temp, setTemp] = useState([1, 2]);
  var checkScrollSpeed = (function (settings) {
    settings = settings || {};

    var lastPos,
      newPos,
      timer,
      delta,
      delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function () {
      newPos = window.scrollY;
      if (lastPos != null) {
        delta = newPos - lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
  })();

  useEffect(() => {
    function wheelDistance(e) {
      return e.wheelDelta / 120;
    }

    function scrollHandler(e) {
      let howMuchScrolled = window.scrollY;
      setTemp((prev) => [...prev, howMuchScrolled]);
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (temp[temp.length - 1] - temp[temp.length - 2] > 0) {
        canvasRef.current.object.scale.z += Math.abs(
          (temp[temp.length - 1] - temp[temp.length - 2]) / 1000
        );
        azimuthalRef.current += Math.abs(
          (temp[temp.length - 1] - temp[temp.length - 2]) / 1000
        );
      } else {
        canvasRef.current.object.scale.z -= Math.abs(
          (temp[temp.length - 1] - temp[temp.length - 2]) / 1000
        );
        azimuthalRef.current -= Math.abs(
          (temp[temp.length - 1] - temp[temp.length - 2]) / 1000
        );
        if (canvasRef.current.object.scale.z !== 1 && st === 0) {
          canvasRef.current.object.scale.z = 1;
        }
      }

      if (st === 0) {
        azimuthalRef.current = 0;
      }
      lastScrollTop = st <= 0 ? 0 : st;

      canvasRef.current.setAzimuthalAngle(azimuthalRef.current);
    }

    window.addEventListener("scroll", scrollHandler, wheelDistance);
    return () => {
      window.removeEventListener("scroll", scrollHandler, wheelDistance);
    };
  }, [temp]);

  return (
    <div className="App">
      <div className="ringCanvas">
        <Canvas
          camera={{ position: [0, 1, 4], zoom: 5 }}
          style={{ position: "fixed" }}
          id="ring3D"
        >
          <OrbitControls enableZoom={false} ref={canvasRef} minZoom={5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <Model />
        </Canvas>
        {/* <PageInfoText
          text={"Software Development and IT Consulting Agency"}
        /> */}
      </div>
      <div id="#divik">hello</div>
    </div>
  );
}

export default App;
