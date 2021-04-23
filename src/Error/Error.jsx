import React from 'react'
import err from './404.jpg'
import './index.css'
const Error = () => {
    return (
        <div>
            <h1>error</h1>
            <img src={err} alt="" />
        </div>
    )
}

export default Error
