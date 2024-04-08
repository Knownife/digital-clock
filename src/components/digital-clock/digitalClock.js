import {useEffect, useState} from "react";
import './index.css'

const DigitalClock = () => {

    const [time,setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(new Date())
        },1000)
        return () => clearInterval(interval)
    }, []);

    function formatTime() {
        const hour = time.getHours()
        const seconds = time.getSeconds()
        const minutes = time.getMinutes()

        return `${padZero(hour)}:${padZero(minutes)}:${padZero(seconds)}`
    }
    function padZero(num){
        return (num < 10 ? '0':'')+num
    }
    return <div className='digital-clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    </div>
}

export default DigitalClock;