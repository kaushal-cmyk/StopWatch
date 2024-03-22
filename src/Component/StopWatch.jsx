import React from 'react'
import useTimer from 'easytimer-react-hook'

const StopWatch = () => {
    const [timer, isTargetAchieved] = useTimer({})

    timer.start({

    })
  return (
    <div>{timer.getTimeValues().toString()}</div>
  )
}

export default StopWatch