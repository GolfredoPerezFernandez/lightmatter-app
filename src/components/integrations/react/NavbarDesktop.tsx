/** @jsxImportSource react */

import { motion } from "framer-motion";
import { qwikify$ } from '@builder.io/qwik-react';
import { type ReactNode } from 'react';
import clsx from "clsx";
  function Frame({ children,isExpanded,screenWidth }: { children?: ReactNode[],isExpanded:boolean ,screenWidth:any}) {
    console.log(screenWidth)
    return  <motion.div variants={{
      open:{width:screenWidth*0.15},
      close:{width:screenWidth*0.04},
    }} style={{width:screenWidth<1024?0:screenWidth*0.15}} animate={!isExpanded?"open":"close"} className={clsx("","hidden  md:hidden  relative flex-shrink-0 lg:inset-y-0 lg:z-50  sm:hidden lg:flex lg:flex-col  h-screen")}>
   
    {children}

    </motion.div>     
  }
    
  export const NavbarDesktop = qwikify$(Frame);
