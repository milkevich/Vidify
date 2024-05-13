import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Skeleton = ({ frames }) => {
  const sceneRef = useRef();
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  let scene, bones;

  useEffect(() => {
    const initScene = () => {
      scene = new THREE.Scene();
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneRef.current.appendChild(renderer.domElement);

      camera.position.z = 5;

      bones = createBones();

      bones.forEach(bone => scene.add(bone));
    };

    const createBones = () => {
        const boneNames = [
          "thighR",
          "shinR",
          "footR",
          "thighL",
          "shinL",
          "footL",
          "chest",
          "neck",
          "head",
          "head",
          "shoulderL",
          "upper_armL",
          "forearmL",
          "shoulderR",
          "upper_armR",
          "forearmR"
        ];
      
        const bones = [];
      
        // Define bone shapes as vectors
        const shapes = {
          thighR: new THREE.Vector3(0, 2, 0),
          shinR: new THREE.Vector3(0, 3, 0),
          footR: new THREE.Vector3(0, 0.5, 0),
          thighL: new THREE.Vector3(0, 2, 0),
          shinL: new THREE.Vector3(0, 3, 0),
          footL: new THREE.Vector3(0, 0.5, 0),
          chest: new THREE.Vector3(0, 0, 0),
          neck: new THREE.Vector3(0, 1, 0),
          head: new THREE.Vector3(0, 0.5, 0),
          shoulderL: new THREE.Vector3(1.5, 0.5, 0),
          upper_armL: new THREE.Vector3(1.5, 0, 0),
          forearmL: new THREE.Vector3(2, 0, 0),
          shoulderR: new THREE.Vector3(1.5, 0.5, 0),
          upper_armR: new THREE.Vector3(1.5, 0, 0),
          forearmR: new THREE.Vector3(2, 0, 0)
        };
      
        for (let i = 0; i < boneNames.length; i++) {
          const position = frames[0][i];
          const bone = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(),
              new THREE.Vector3(position[0], position[1], position[2])
            ]),
            new THREE.LineBasicMaterial({ color: 0x00ff00 })
          );
          bones.push(bone);
        }
      
        return bones;
      };
      

      const animate = frameIndex => {
        // requestAnimationFrame(() => animate((frameIndex + 1) % frames.length));
      
        const currentFrame = frames[frameIndex];
        bones.forEach((bone, index) => {
          const position = currentFrame[index];
          bone.geometry.setFromPoints([
            new THREE.Vector3(),
            new THREE.Vector3(position[0], position[1], position[2])
          ]);
          bone.geometry.attributes.position.needsUpdate = true;
        });
      
        renderer.render(scene, camera);
      };
      

    initScene();
    animate(0);

    return () => {
      scene = null;
      bones = null;
    };
  }, [frames]);

  return <div ref={sceneRef} />;
};

export default Skeleton;
