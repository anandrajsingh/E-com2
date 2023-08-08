import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

export default function Hero() {
  const transition = {duration: 3, type:"spring"}
  return (
    <div className={css.container}>
      <div className={css.h_sides}>
        <span className={css.text1}>Skin Protection cream</span>
        <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>Speedily say has suitable disposal and boy. Exercise joy man children rejoiced.</span>
        </div>
      </div>
      <div className={css.wrapper}>
        <motion.div initial={{bottom: "2rem"}} transition={transition} whileInView={{bottom: "0rem"}}  className={css.blueCircle}></motion.div>
        <motion.img initial={{bottom: "-2rem"}} transition={transition} whileInView={{bottom: "0rem"}} src={HeroImg} width={600} alt="" />
        <motion.div initial={{right:"4%"}} transition={transition} whileInView={{right:"2%"}} className={css.cart2}>
            <RiShoppingBagFill/>
            <div className={css.signup}>
                <span>Best Signup Offers</span>
                <div>
                    <BsArrowRight/>
                </div>
            </div>
        </motion.div>
      </div>
      <div className={css.h_sides}>
        <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
            <span>100K</span>
            <span>Happy Customers</span>
        </div>
      </div>
    </div>
  )
}
