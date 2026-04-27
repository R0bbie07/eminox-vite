import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BlurTextProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'p';
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default function BlurText({ children, as = 'h2', delay = 0, style, className }: BlurTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-8% 0px' });

  const Tag = as;

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
      animate={inView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Tag style={style} className={className}>{children}</Tag>
    </motion.div>
  );
}
