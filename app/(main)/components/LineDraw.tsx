"use client"
import React from 'react'
import { motion, HTMLMotionProps } from "framer-motion";
import { Component } from "react";
import line from '@/assets/line.svg';

const draw = {
   hidden: { pathLength: 0, opacity: 0 },
   visible: (i:number) => {
     const delay =  i * 0.5;
     return {
       pathLength: 1,
       opacity: 2,
       transition: {
         pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
         opacity: { delay, duration: 0.01 }
       }
     };
   }
 };

const LineDraw = () => {
  return (
    <div>
      <motion.svg   
      width="100%"
      height="800px"
      initial="hidden"
      whileInView={"visible"}
      viewport={{
         amount:'all',
         once:true
       }}
      >
    <motion.line
            x1="00"
            y1="20"
            x2="100%"
            y2="280"
            stroke="#000"
            variants={draw}
       
         
            custom={0}
      />
          <motion.line
            x1="100%"
            y1="280"
            x2="0"
            y2="520"
            stroke="#000"
            variants={draw}
            custom={1}
      />
      <motion.line
            x1="0"
            y1="520"
            x2="100%"
            y2="100%"
            stroke="#000"
            variants={draw}
            custom={2}
      />
      </motion.svg>
    </div>
  )
}

export default LineDraw

