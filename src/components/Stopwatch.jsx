import { useState, useRef, useEffect } from 'react'

const Stopwatch = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);
    

    function handleResume() {
        if (intervalRef.current) return;
    }

    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setNow(Date.now());
        }, 10);
        
    }

    function handleStop(){
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;

    if(startTime !== null && now !== null){
        secondsPassed = (now - startTime)/1000;
    }

  return (
    <>

        <div className="box">

           <h1> {secondsPassed.toFixed(3)}</h1>
            
            <div className="btn">

                <button onClick={handleStart} className='restart'> Restart </button>
  
                <button onClick={handleStop} className='stop'> Stop </button>
            
            </div>

        </div>

    </>

  )
}

export default Stopwatch