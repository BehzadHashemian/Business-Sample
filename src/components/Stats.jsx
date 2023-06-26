import React from 'react'
import styles from '../style'
import { stats } from '../constants/index'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((sta) => {
        return(
          <div className= 'flex flex-1 justify-center m-3 items-center'>
          <h1 className='text-white font-poppins font-extrabold mr-6 text-[30px] xs:text-[40px] xs:leading-[53px] leading-[43px]'>  {sta.value}</h1>
          <p className='text-gradient font-poppins text-[15px] xs:text-[20px] xs:leading-[26px] leading-[21px] ml-3 uppercase' >{sta.title}</p>
          </div>
        )})}
    </section>
  )
}

export default Stats