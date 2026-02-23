// src/components/Dashboard.js
import React from 'react';

function Dashboard() {
    return ( <
        main className = "dashboard" >
        <
        h2 > Добро пожаловать в FitTrack! < /h2>

        <
        div className = "stats" >
        <
        h3 > Твоя статистика за неделю < /h3> <
        p > Тренировок: < strong > 4 < /strong></p >
        <
        p > Объём поднятого веса: < strong > ~12 450 кг < /strong></p >
        <
        p > Цель на месяц: < strong > 10 тренировок < /strong> (прогресс 40%)</p >
        <
        /div>

        <
        button className = "start-btn" >
        Начать новую тренировку→ <
        /button> <
        /main>
    );
}

export default Dashboard;