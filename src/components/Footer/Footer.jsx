import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UserIcon,
    LinkIcon
} from "@heroicons/react/outline"

export default function Footer() {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 North Avenue Orlando, FL 32801</span>
                        </span>
                        <span className={css.pngLine}>
                            <PhoneIcon className={css.icon} />
                            <a href='tel:353-306-4415'>353-306-4415</a>
                        </span>
                        <span className={css.pngLine}>
                            <InboxIcon className={css.icon} />
                            <a href='mailto:support@amazon.com'>support@amazon.com</a>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UserIcon className={css.icon} />
                            <a href="/about"></a>
                            <span>About Us</span>
                        </span>
                    </div>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & Terms</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright 2022 by Amazon, Inc</span>
                <span>All Rights reserved</span>
            </div>
        </div>
    )
}
