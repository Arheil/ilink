import React from 'react';
import s from './PersonCard.module.css';
import ChangeSVGIcon from "./ChangeSVGIcon/ChangeSVGIcon";

const PersonCard = ({name, birthday, city, gender, age, about, pet}) => {
    return (
        <div className={s.personCard}>
            <div className={s.title}>
                <h1>{name}</h1>
                <span>{birthday}</span>
            </div>
            <div className={s.info}>
                <span><b>Город:</b> {city}</span>
                <span><b>Пол:</b> {gender === 'женщина' ?  (<>женщина <ChangeSVGIcon id='female' /></>) : (<>мужчина <ChangeSVGIcon id='male' /></>)}</span>
                <span><b>Возраст:</b> {age}</span>
            </div>
            <p><b>О себе:</b> {about}</p>
            <div className={s.pet}>
                <ChangeSVGIcon id='pet' />
                <span><b>Домашнее животное:</b> {pet}</span></div>
        </div>
    );
};

export default PersonCard;