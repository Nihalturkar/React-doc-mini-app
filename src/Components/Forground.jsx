import React, { useRef } from 'react'
import Card from './Card'

import { motion } from "framer-motion"

const Forground = () => {

  const ref=useRef(null);

const data = [
  {
desc:"india is very good country and here peoples are awesome",
file:"9mb.",
close:false,
tag:{isOpen: true ,tagTitle:"Download Now", tagColor:"green"},

},
{
  desc:"india is very good country and here peoples are awesome",
  file:"9mb.",
  close:false,
  tag:{isOpen: true ,tagTitle:"Download Now", tagColor:"blue"},
  
  },
  {
    desc:"india is very good country and here peoples are awesome",
    file:"9mb.",
    close:false,
    tag:{isOpen: true ,tagTitle:"Download Now", tagColor:"green"},
    
    },

];
  return (
     <div ref={ref} className=' fixed z-[3] w-full h-full  top-0 left-0 flex gap-6 flex-wrap p-5'>
    {data.map((item, index)=>(
     <Card data={item}  refe={ref}/>
    ))},
    </div>
  );
}

export default Forground;