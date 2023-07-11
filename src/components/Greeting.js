import React from 'react'
import CheckImg from '../resources/check_circle.png'
import CloseImg from '../resources/close.png'

function Greeting() {
    const close = () => {
        const greeting = document.getElementById('greeting')
        greeting.style.display='none'
    }

    (function autoClose(){
        const greeting = document.getElementById('greeting')
        setTimeout(() => {
            close(greeting)
        }, 5000);
    })()

  return (
    <div className='page flex-row align-items-center justify-content-center' id='greeting'>
        <div className='greetings-div flex-row align-items-center justify-content-between'>
            <img src={CheckImg} alt="" />
            <p className="greeting">Welcome John Smith</p>
            <img src={CloseImg} alt="" onClick={close}/>
        </div>
    </div>
  )
}

export default Greeting