import React from 'react'
import { useNavigate } from 'react-router-dom'

const Same = () => {
    const navigate = useNavigate();
  return (
    <div>
       {() => navigate("/Home")}
    </div>
  )
}

export default Same