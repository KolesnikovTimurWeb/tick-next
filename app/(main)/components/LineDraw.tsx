"use client"
import React from 'react'
import { motion, HTMLMotionProps } from "framer-motion";
import { Component } from "react";
import line from '@/assets/line.svg';

interface CustomMotionSvg extends HTMLMotionProps<"div"> {
  initial: "initial" | "final";
  // any other thing
}

class CustomMotionSvg extends Component<CustomMotionSvg> {
  render() {
    return <motion.svg {...this.props}>{this.props.children}</motion.svg>;
  }
}
const draw = {
   hidden: { pathLength: 0, opacity: 0 },
   visible: (i) => {
     const delay = 1 + i * 0.5;
     return {
       pathLength: 2,
       opacity: 1,
       transition: {
         pathLength: { delay, type: "spring", duration: 3.5, bounce: 0 },
         opacity: { delay, duration: 0.01 }
       }
     };
   }
 };

const LineDraw = () => {
  return (
    <div>
      <CustomMotionSvg    
      width="100%"
      height="700px"
      initial="hidden"

      whileInView={"visible"}
      viewport={{
         amount:'all',
         once:true
       }}
      >
    <motion.line
            x1="00"
            y1="30"
            x2="100%"
            y2="240"
            stroke="#000"
            variants={draw}
       
         
            custom={1}
      />
          <motion.line
            x1="100%"
            y1="240"
            x2="0"
            y2="450"
            stroke="#000"
            variants={draw}
            custom={2}
      />
      <motion.line
            x1="0"
            y1="450"
            x2="100%"
            y2="670"
            stroke="#000"
            variants={draw}
            custom={3}
      />
      </CustomMotionSvg>
    </div>
  )
}

export default LineDraw
