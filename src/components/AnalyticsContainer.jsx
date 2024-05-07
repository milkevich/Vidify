import GraphComponent from "./GraphComponent";
import styles from "./AnalyticsContainer.module.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { useEffect, useRef } from "react";
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";

const AnalyticsContainer = () => {

  function Model() {
    const { scene } = useGLTF('https://raw.githubusercontent.com/milkevich/Vidify/main/src/Skeleton.glb');
  
    useEffect(() => {
      if (scene) {
        const lowerLeftHand = scene.getObjectByName("handL");
        const lowerRightHand = scene.getObjectByName("handR");
  
        if (lowerLeftHand && lowerRightHand) {
          lowerLeftHand.position.set(0, 1, 0); 
  
          lowerRightHand.position.set(0, 1, 0); 
        }
      }
    }, [scene]);
  
    if (!scene) return null;
  
    return (
        <primitive object={scene} />
    );
  }
  
  return (
    <section className={styles.analyticsContainer}>
      <div className={styles.analyticsStructure}>
        <div className={styles.analyticsNavigation}>
          <Canvas style={{ width: "100%", height: "250px", backgroundColor: "var(--dark-dark-3)", borderRadius: "var(--br-xs)" }}>
            <directionalLight color="white" intensity={1} position={[5, 10, 5]} />
            <directionalLight color="white" intensity={1} position={[-5, -10, -5]} />
            <mesh scale={0.9} position={[0, -2.8, 0]}>
              <Model/>
            </mesh>
            <OrbitControls
              enableRotate
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2} 
            />
          </Canvas>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigationRightContent}>
            <div className={styles.autoLayoutVertical}></div>
            <h3 className={styles.analytics}>Analytics</h3>
            <div className={styles.autoLayoutHorizontal1}>
              <GraphComponent />
              <GraphComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsContainer;
