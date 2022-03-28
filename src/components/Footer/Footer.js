import React from 'react';
import s from './Footer.module.css';
import ChangeSVGIcon from "../Main/About/PersonCard/ChangeSVGIcon/ChangeSVGIcon";

const Footer = () => {
    return (
        <div className={s.footer}>
            <span>© iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</span>
            <div className={s.contacts}>
                <div className={s.vk}><ChangeSVGIcon id='vk' /></div>
                <div className={s.reddit}><ChangeSVGIcon id='reddit' /></div>
                <div className={s.telegram}><ChangeSVGIcon id='telegram' /></div>
            </div>
        </div>
    );
};

export default Footer;