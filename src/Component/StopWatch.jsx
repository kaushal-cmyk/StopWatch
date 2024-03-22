import React, { useEffect, useState } from 'react'
import useTimer from 'easytimer-react-hook'
import { Button } from 'react-bootstrap'

const StopWatch = () => {
  let [show, setShow] = useState(false)

  let handleShow = (e)=> {
    if(show === true) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  const [timer, isTargetAchieved] = useTimer({
      precision: 'secondTenths'
    })
  //  useEffect(()=> {
  //   timer.stop({})
  //  },[])

    // reset timer 
    let reset = ()=> {
      timer.reset({})
      setShow(false)
    }
  return (
    <div class="box-border h-32 w-32 p-4 border-4 border-solid border-2 border-indigo-600 ..." style = {{textAlign: "center"}}>
      <div  style = {{fontSize: '60px'}}>
        {timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths'])}
      </div>

      {show? timer.start({}): timer.pause({})}
      <Button onClick = {handleShow}>
        {show === true? "STOP ":"START"}
      </Button>{' '}
      <Button variant = "light" style = {{color: 'blue'}} onClick = {reset}>RESET</Button>{' '}
    </div>

  )
}

export default StopWatch