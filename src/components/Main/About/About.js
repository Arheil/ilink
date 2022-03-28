import React from 'react';
import s from './About.module.css';
import PersonCard from "./PersonCard/PersonCard";
import foto from '../../../assets/image/my-photo.jpg';

const About = () => {
    return (
        <div className={s.about}>
            <img className={s.aboutFoto} src={foto} alt="foto"/>
            <PersonCard
                name='Станислав Верман'
                birthday='18.07.1983'
                city='Томск'
                gender='мужчина'
                age={38}
                about= 'Всем привет! Меня зовут Станислав и я frontend-алкоголик)), т.е.
                        пью информацию из всех источников, где можно узнать что-то новое
                        и полезное про разработку. Кстати, недавно успешно завершил курс
                        по frontend-разработке от университета Иннополис.'
                pet='Есть'
            />
        </div>
    );
};

export default About;