import React from 'react';
import Calendar from '../Calendar/Calendar.js';
import TodoList from '../ToDoList/ToDoList.js';
import Weather from '../weather/Weather.js';
import './Home.css';

function Home() {

  return (
    <section className='home__container'>
      <div className='climeWeather__container'>
        <Weather />
        <Calendar />
      </div>
      <TodoList />
    </section>
  )
}

export default Home;