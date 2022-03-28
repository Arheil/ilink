import React from "react";
import s from './Header.module.css';
import myPhoto from '../../assets/image/my-photo.jpg'
import ChangeSVGIcon from "../Main/About/PersonCard/ChangeSVGIcon/ChangeSVGIcon";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerFoto}>
                <img src={myPhoto} alt="foto"/>
                <span>Станислав Верман</span>
            </div>
            <div className={s.headerLogo}>
                <ChangeSVGIcon id='logo' />
            </div>
            <button className='btn'>Панель управления</button>
        </header>
        )

}

export default Header;