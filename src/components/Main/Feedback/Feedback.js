import React from 'react';
import s from './Feedback.module.css';
import Slider from "../../Slider/Slider";
import feedbackDB from "./feedbackDB";


const Feedback = () => {
    return (
        <div className={s.feedback}>
            <div className={s.header}>
                <h1>Отзывы</h1>
                <button className='btn'>+ Добавить отзыв</button>
            </div>
            <Slider feed={feedbackDB} />
        </div>
    );
};

export default Feedback;