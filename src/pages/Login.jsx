import React from 'react'
import { assets } from '../assets/asset'

const Login = () => {
  return (
    <div>
      <div>
        <div>
            <img src={assets.icon} alt="" />
            <p>Facebook helps you connect and share with people in your life</p>
        </div>
        <div>
            <form>
                <input type="text" placeholder='Email address or phone number'/>
                <input type="text" placeholder='Password'/>
                <button></button>
                <p>Forgotten password?</p>
            </form>
            <div>
                <button>Create new Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
