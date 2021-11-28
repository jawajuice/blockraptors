import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Html } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D } from "three/src/core/Object3D"; //Object3D types
import { AnimationClip } from "three/src/animation/AnimationClip"; //Animation types
import { OrbitControls } from '@react-three/drei';
import Typing from 'react-typing-animation';

interface group {
    current: {
        rotation: {
            x: number;
            y: number;
        };
    };
}

interface actions {
    current: {
        idle: {
            play: () => void;
        };
    };
}

const Model = () => {
    /* Refs */
    const group: group = useRef();
    const actions: actions = useRef();

    /* State */
    const [model, setModel] = useState<Object3D | null>(null);
    const [animation, setAnimation] = useState<AnimationClip[] | null>(null);

    /* Mixer */
    const [mixer] = useState(() => new THREE.AnimationMixer(null));

    /* Load model */
    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load("ANIMATION_SIMPLE.gltf", async (gltf) => {
            const nodes = await gltf.parser.getDependencies("node");
            const animations = await gltf.parser.getDependencies("animation");
            setModel(nodes[0]);
            setAnimation(animations);

        });
    }, []);

        /* Set animation */
  useEffect(() => {
    if (animation && typeof group.current != "undefined") {
      actions.current = {
        idle: mixer.clipAction(animation[0], group.current as Object3D),
      };
      actions.current.idle.play();
      return () => animation.forEach((clip) => mixer.uncacheClip(clip));
    }
  }, [animation]);

  /* Animation update */
  useFrame((_, delta) => mixer.update(delta));


    return (
        <>
            {model ? (
                <group ref={group} position={[0, -1, 0]} dispose={null}>
                    <primitive ref={group} name="Object_0" object={model}/>
                </group>
            ) : (
                <Html>Loading...</Html>

            )}
        </>
    );
};

export default Model;