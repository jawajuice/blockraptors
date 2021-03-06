import React from "react";

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[40, 10, 5]} intensity={0.2} />
            <directionalLight
                castShadow
                position={[10, 420, 100]}
                intensity={1.3}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={2024}
                shadow-camera-far={100}
                shadow-camera-left={-30}
                shadow-camera-right={10}
                shadow-camera-top={40}
                shadow-camera-bottom={100}
            />
            <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
        </>
    );
};

export default Lights;