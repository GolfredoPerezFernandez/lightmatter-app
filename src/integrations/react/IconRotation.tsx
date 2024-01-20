/** @jsxImportSource react */

import { motion } from "framer-motion";
import { qwikify$ } from '@builder.io/qwik-react';
import { type ReactNode } from 'react';
  function Frame({ children,isExpanded }: { children?: ReactNode[],isExpanded:boolean }) {

    return  <motion.div variants={{
      open:{rotate: 0},
      close:{rotate: 180},
    }}  animate={!isExpanded?"open":"close"} >
   
    {children}

    </motion.div>     
  }
    
  export const IconRotation = qwikify$(Frame);
