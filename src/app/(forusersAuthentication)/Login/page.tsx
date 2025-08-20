"use client"
import React from 'react'

const page = () => {

    const getData = async()=>{

        const data = await fetch("/api/check")
        const recievedData = await data.json()
        console.log(recievedData)

    }

  return (
    <div>

        <button onClick={getData}>click Me</button>
      
    </div>
  )
}

export default page
