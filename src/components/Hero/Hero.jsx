import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

export default function Hero() {
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
        <div className={css.blueCircle}></div>
        <img src={HeroImg} width={600} alt="" />
        <div className={css.cart2}>
            <RiShoppingBagFill/>
            <div className={css.signup}>
                <span>Best Signup Offers</span>
                <div>
                    <BsArrowRight/>
                </div>
            </div>
        </div>
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
