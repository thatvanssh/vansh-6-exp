import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

export default function AnimatedBox({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
    };

    switch (animation) {
      case 'fadeIn':
        return {
          ...baseStyles,
        };
      case 'fadeInUp':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        };
      case 'fadeInDown':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
        };
      case 'fadeInLeft':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
        };
      case 'fadeInRight':
        return {
          ...baseStyles,
          transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
        };
      case 'scaleIn':
        return {
          ...baseStyles,
          transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        };
      default:
        return baseStyles;
    }
  };

  return (
    <Box ref={elementRef} sx={getAnimationStyles()} {...props}>
      {children}
    </Box>
  );
}
