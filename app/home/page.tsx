import React from 'react'
import Navbar from '../components/Navbar'
import delay from 'delay'
const page = async() => {
await delay(2000)
  return (
    <Navbar/>
  )
}

export default page