import React from 'react'
import styles from '../style'
import Button from './Button'
import { features } from '../constants'
const Business = () => {
  return (
    <section className='flex md:flex-row flex-col'>
      <div className='md:w-[55%] ml-9'>
        <h1 className={` ${styles.heading2} text-white font-poppins font-bold sm:text-[55px] text-[30px] mb-10`}>
          You do the business,<br/> we’ll handle the money.
        </h1>
        <p className={` ${styles.paragraph} text-white  text-[15px] sm:w-[80%] `}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <div className='mt-10'>
          <Button />
        </div>
      </div>

      <div className='flex flex-col md:w-[45%] mr-5 mx-6 my-4'>
        {features.map((feat , index)=>(
          <div className='flex flex-row my-4 feature-card rounded-[20px] items-center p-2' key={index}>
            <div className='rounded-full bg-dimBlue w-14 h-14 flex items-center justify-center'>
              <img src={feat.icon} alt="icon" className='m-4 w-8 h-8'/>
            </div>
            <div className='flex flex-col mx-4 w-[70%]'>
              <h1 className='text-white text-[20px] font-poppins'>{feat.title}</h1>
              <p className={`${styles.paragraph} text-[13px]`}>{feat.content}</p>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  )
}

export default Business