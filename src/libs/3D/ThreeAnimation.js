import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls, ContactShadows, Sphere } from '@react-three/drei';
import { a, useSpring } from '@react-spring/three';
import { useGesture } from 'react-use-gesture';
import { motion } from 'framer-motion';
import { mdiReact, mdiGithub, mdiSpotify, mdiApple, mdiGit } from '@mdi/js';

import Icon3D from './Icon3D';
import { fadeIn } from '../motion/fadeIn';

// You can use any icon from @mdi/js:
const icons = [
  { path: mdiSpotify, color: '#1ed760', invert: true },
  { path: mdiApple, color: '#ddd' },
  { path: mdiReact, color: '#61dafb' },
  { path: mdiGithub, color: '#000' },
  { path: mdiGit, color: '#f05030' }
];

export const ThreeAnimation = () => {
  // For centering list of icons
  const idxMiddle = (icons.length - 1) / 2;

  return (
    <Canvas colorManagement={false} camera={{ position: [0, 0.1, 3] }}>
      <ambientLight intensity={[0.5]} />
      <pointLight position={[1, 1, 1]} />
      <AnimatedIcon key={1} path={mdiSpotify} color="#1A202C" invert={true} />
      {/* {icons.map((props, i) => ( */}
      {/* <AnimatedIcon key={i} {...props} position-x={(i - idxMiddle) * 2} /> */}
      {/* ))} */}
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, 1.5, 2]}
        opacity={0.8}
        width={10}
        height={10}
        blur={2}
        far={1}
      />
    </Canvas>
  );
};

export const AnimatedIcon = ({ path, color, invert = false, ...props }) => {
  const [spins, setSpins] = useState(0);
  const spring = useSpring({ rotation: [0, spins * Math.PI, 0] });
  const canSpin = useRef(false);
  const bind = useGesture({
    onMove: ({ vxvy: [vx] }) => {
      if (canSpin.current && vx !== 0) {
        setSpins(spins + Math.sign(vx));
        canSpin.current = false;
      }
    },
    onPointerOver: () => (canSpin.current = true)
  });
  return (
    <a.group {...spring} {...bind()} {...props}>
      <Turntable>
        <Float>
          <Icon3D path={path} color={color} isCCW={!invert} />
          {/* Transparent sphere to generate a shadow */}
          {/* <Sphere args={[1, 4, 32]} scale-z={0.2}> */}
            <meshStandardMaterial opacity={0} transparent />
          {/* </Sphere> */}
          {/* Bounding sphere for events */}
          <Sphere visible={false} />
        </Float>
      </Turntable>
    </a.group>
  );
};

// Slowly spin around
export const Turntable = (props) => {
  const ref = useRef();
  useFrame((_, delta) => (ref.current.rotation.y += delta));
  return <group ref={ref} {...props} />;
};

// Float up and down
export const Float = ({ speed = 1, amplitude = 0, ...props }) => {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.position.y = amplitude * Math.sin(clock.elapsedTime * speed))
  );
  return <group ref={ref} {...props} />;
};
