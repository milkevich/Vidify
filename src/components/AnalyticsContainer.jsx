import GraphComponent from "./GraphComponent";
import styles from "./AnalyticsContainer.module.css";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/Addons.js";
import { useEffect, useRef } from "react";
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnalyticsContainer = () => {

  function Model() {
    const obj = useLoader(OBJLoader, 'https://raw.githubusercontent.com/milkevich/Vidify/main/src/Skeleton.obj');
    const leftHandRef = useRef();
    const rightHandRef = useRef();
  
    useEffect(() => {
      traverseAndFindHands(obj);
    }, [obj]);
  
    const traverseAndFindHands = (node) => {
      node.children.forEach(child => {

        if (child.name === "LeftHand") {
          leftHandRef.current = child;
          leftHandRef.current.position.set(-2, 0, 0); 
        }
        else if (child.name === "RightHand") {
          rightHandRef.current = child;
          rightHandRef.current.position.set(2, 0, 0); 
        }
        if (child.children.length > 0) {
          traverseAndFindHands(child);
        }
      });
    };
  
    return <primitive object={obj} />;
  }
  
  

  return (
    <section className={styles.analyticsContainer}>
      <div className={styles.analyticsStructure}>
        <div className={styles.analyticsNavigation}>
          <Canvas style={{ width: "100%", height: "250px", backgroundColor: "var(--dark-dark-3)", borderRadius: "var(--br-xs)" }}>
          <ambientLight intensity={0.1} />
        <directionalLight color="white" intensity={0.5} position={[5, 10, 5]} />
        <directionalLight color="white" intensity={0.5} position={[-5, -10, -5]} />
          <mesh scale={1.2} position={[0, 0, 0]}>
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
