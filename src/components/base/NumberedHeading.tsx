import React from 'react';
import { NumberedTitle } from './NumberedTitle';
import { motion } from 'framer-motion';
export function NumberedHeading({
  num,
  text,
  classes,
}: {
  num: string;
  text: string;
  classes?: string;
}) {
  return (
    <motion.h1
      className={`fs-500 ${classes}`}
      variants={toBottom}
      initial='invisible'
      animate='visible'
    >
      <NumberedTitle
        num={num}
        text={text}
        numClasses='text-primary-300 pr-1 '
      />
    </motion.h1>
  );
}
const toBottom = {
  invisible: {
    opacity: 0,
    y: -75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 3,
    },
  },
};
