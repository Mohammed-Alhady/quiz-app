import { useEffect,useState,useRef } from "react"

const Timer = ({ duration,onTimeUp }) => {
    const [counter,setCounter] = useState(0);
    const [progressLoaded,setProgressLoaded] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((prevCur) => prevCur + 0.1);
        },100)
        return () => clearInterval(intervalRef.current);
    },[]);

    useEffect(() => {
        setProgressLoaded((counter / duration) * 100);
        if (counter >= duration) {
            clearInterval(intervalRef.current);
            setTimeout(() => {
                onTimeUp();
            },100);
        }
    },[counter]);

    return (
        <div className="timer__container">
            <div
                className="timer__progress"
                style={{
                    width: `${progressLoaded}%`,
                    backgroundColor: `${progressLoaded < 40
                        ? 'lightgreen'
                        : progressLoaded < 70
                            ? 'orange'
                            : 'red'
                        }`
                }}
            ></div>
        </div>
    )
}

export default Timer