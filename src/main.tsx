import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {timelineDataUnit, timelineOption} from "./interface";

const dummy_data1: timelineDataUnit =
    {
        category: 'mango',
        from: new Date('2022-03-24'),
        to: new Date('2022-03-25'),
        label: "mango",
        color: "blue",
    }

const dummy_data2: timelineDataUnit =
    {
        category: 'mango',
        from: new Date('2022-04-25'),
        to: new Date('2022-04-26'),
        label: "mango",
        color: "blue",
    }

const dummy_option: timelineOption = {
    backgroundColor: "blue",
    titleColor: "blue",
    title: "mangotitle",
    description: "mangodescription",
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App data={[dummy_data1, dummy_data2]} options={dummy_option}/>
  </React.StrictMode>,
)
