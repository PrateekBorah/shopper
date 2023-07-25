import React, {useRef, useEffect} from 'react'
import { motion,useInView, useAnimation } from 'framer-motion'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, {once:true});
  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView){
      mainControls.start("visible")
    }
  }, [isInView])
  

  return (
    <div ref={ref}
    className='flex flex-wrap gap-8 justify-around px-12'
    >
      {/*for 1 month */}
      <motion.div
        variants={{
          hidden:{opacity:0, x:300},
          visible:{opacity:1, x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration:1,
          delay:0.5
        }}
      >
        <div 
        className='flex flex-col max-w-xs border border-primary-100 rounded-xl p-4 items-center gap-10 bg-tertiary-300'>
          <div>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>₹1000 </h2>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>for 1 month </h2>
            <p className='text-tertiary-300'>for space</p>
          </div>
          <p className='leading-2 text-center text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ab fuga mollitia eligendi ex perspiciatis voluptatibus! Nostrum totam vitae repellendus?</p>
          <button className='bg-primary-100 text-white w-full p-3 rounded-xl'>
            Select
          </button>
        </div>
      </motion.div>
        {/*for 3 month */}
      <motion.div
        variants={{
          hidden:{opacity:0, x:300},
          visible:{opacity:1, x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration:1,
          delay:1
        }}
      >
        <div 
        className='flex flex-col max-w-xs border border-primary-100 rounded-xl p-4 items-center gap-10 bg-tertiary-300'>
          <div>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>₹2700 </h2>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>for 3 month </h2>
            <h2 className='text-[13px] text-gray-600 text-center'>900/month</h2>
          </div>
          <p className='leading-2 text-center text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ab fuga mollitia eligendi ex perspiciatis voluptatibus! Nostrum totam vitae repellendus?</p>
          <button className='bg-primary-100 text-white w-full p-3 rounded-xl'>
            Select
          </button>
        </div>
      </motion.div>
      {/*for 6 month */}
      <motion.div
        variants={{
          hidden:{opacity:0, x:300},
          visible:{opacity:1, x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration:1,
          delay:1.5
        }}
      >
        <div 
        className='flex flex-col max-w-xs border border-primary-100 rounded-xl p-4 items-center gap-10 bg-tertiary-300'>
          <div>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>₹5100 </h2>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>for 6 month </h2>
            <h2 className='text-[13px] text-gray-600 text-center'>850/month</h2>
          </div>
          <p className='leading-2 text-center text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ab fuga mollitia eligendi ex perspiciatis voluptatibus! Nostrum totam vitae repellendus?</p>
          <button className='bg-primary-100 text-white w-full p-3 rounded-xl'>
            Select
          </button>
        </div>
      </motion.div>
      {/*for 12 month */}
      <motion.div
        variants={{
          hidden:{opacity:0, x:300},
          visible:{opacity:1, x:0}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration:1,
          delay:2
        }}
      >
        <div 
        className='flex flex-col max-w-xs border border-primary-100 rounded-xl p-4 items-center gap-10 bg-tertiary-300'>
          <div>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>₹9600 </h2>
            <h2 className='font-bold tracking-wide text-[30px] text-center'>for 12 month </h2>
            <h2 className='text-[13px] text-gray-600 text-center'>800/month</h2>
          </div>
          <p className='leading-2 text-center text-[16px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ab fuga mollitia eligendi ex perspiciatis voluptatibus! Nostrum totam vitae repellendus?</p>
          <button className='bg-primary-100 text-white w-full p-3 rounded-xl'>
            Select
          </button>
        </div>
      </motion.div>
    </div>
  )
}
