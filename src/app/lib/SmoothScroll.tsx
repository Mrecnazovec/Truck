import ReactLenis from 'lenis/react';
import React, { ReactNode } from 'react';

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScroll;
