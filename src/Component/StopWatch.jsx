import React, { useEffect, useState } from 'react'
import useTimer from 'easytimer-react-hook'
import { Button, Card } from 'react-bootstrap'

const StopWatch = () => {
  let [show, setShow] = useState(true)
    const [timer, isTargetAchieved] = useTimer({
      precision: 'secondTenths'
    })

    let handleShow = (visible) => {
      return(e)=> {
        setShow(visible)
      }
    }


   useEffect(()=> {
   },[])
    
    // start timer 
    let start = ()=> {
      timer.start({
      })
    }
    
    // stop timer
    let stop = ()=> {
      timer.pause({})
    }

    // reset timer 
    let reset = ()=> {
      timer.reset({})
      timer.stop({})
    }
  return (
    <div>
      <div>
        {timer.getTimeValues().toString(['hours', 'minutes', 'seconds', 'secondTenths'])}
      </div>
      {/* buttons */}
      <br></br>
      {show ? <Button onClick = {start}>start</Button> : <Button onClick = {start}>start</Button> }
      {/* <Button onClick = {start}>start</Button> {' '} */}
      <button onClick = {stop}>stop</button>
      <Button variant = "light" style = {{color: 'blue'}} onClick = {reset}>reset</Button>
    </div>

  )
}

export default StopWatch