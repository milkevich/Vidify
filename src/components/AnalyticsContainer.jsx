import GraphComponent from "./GraphComponent";
import styles from "./AnalyticsContainer.module.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader, OBJLoader } from "three/examples/jsm/Addons.js";
import { useEffect, useRef } from "react";
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnalyticsContainer = () => {

  function Model() {
    const obj = useLoader(GLTFLoader, 'https://raw.githubusercontent.com/milkevich/Vidify/main/src/Skeleton.glb');
  
    useEffect(() => {
      console.log("Model loaded:", obj);
      traverseAndSetHandPositions(obj);
    }, [obj]);
  
    const traverseAndSetHandPositions = (node) => {
      console.log("Traversing node:", node.name || "Unnamed node");
  
      node.traverse((child) => {
        console.log("Child name:", child.name || "Unnamed child");
  
        if (child.name === "KTF.L") {
          console.log("Found left hand node:", child);
          console.log("Setting position for left hand...");
        }
  
        if (child.name === "KTF.R") {
          console.log("Found right hand node:", child);
          console.log("Setting position for right hand...");
        }
      });
    };
  
    return (
      <group rotation={[92.675, 0, 0]}>
        <primitive object={obj} />
      </group>
    );
  }
  
  
  
  return (
    <section className={styles.analyticsContainer}>
      <div className={styles.analyticsStructure}>
        <div className={styles.analyticsNavigation}>
          <Canvas style={{ width: "100%", height: "250px", backgroundColor: "var(--dark-dark-3)", borderRadius: "var(--br-xs)" }}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" intensity={0.5} position={[5, 10, 5]} />
            <directionalLight color="white" intensity={0.5} position={[-5, -10, -5]} />
            <mesh scale={1.2} position={[0, -2.8, 0]}>
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
