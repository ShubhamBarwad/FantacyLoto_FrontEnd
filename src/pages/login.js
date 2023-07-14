import React, { useRef, useState } from 'react'
import logo from '../resources/logo.png'
import QTlogo from '../resources/QTLogo.jpg'
import { useFormik } from 'formik'
import login_validate from '../lib/validate'
import VisOnImg from '../resources/remove_red_eye.png'
import VisOffImg from '../resources/visibility_off.png'
import axios from 'axios'
import { useNavigate } from 'react-router'
// import { useNavigate } from 'react-router'
// import eye from 'D:\QUALITRUST Assessment/login-flow/src/remove_red_eye.png'

function Login() {
    const [isHidden, setVisible] = useState(true)
    const [isValid, setValid] = useState(true)
    const username = useRef(null)
    const password = useRef(null)
    const navigate = useNavigate()
    const LOGIN_ENDPOINT = "http://localhost:8080/api/v1/user/login"
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate: login_validate,
        // onSubmit
    })
    
    const handleEyeClick = () => {
        let password = document.getElementById('password')
        if(isHidden){
            setVisible(false)
            password.type = 'text'
        }else {
            setVisible(true)
            password.type = 'password'
        }
    }

    const handleSignIn = (e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', username.current.value)
        formData.append('password', password.current.value)
        
        // For testing Webflow
        if(username.current.value === "test@test.com" && password.current.value === "test12345"){
            navigate("/home")
        }else{
            axios.post(LOGIN_ENDPOINT, formData,{
                headers:{Accept:'application/json'}
            }).then((response) => {
                console.log(response)
                if(response.data !== ""){
                    // console.log('redirect to home')
                    navigate("/home")
                }else{
                    setValid(false)
                }
            })
        }
    }

  return (
    <div className='login-page'>
        <img className='logo' src={logo} alt="logo" />
        <form action="" className="login-form align-items-stretch">
            <p className="heading">Sign in to get started</p>
            <div className='placeholder' data-placeholder='User Name' >
                {/* <label className='hidden-label' htmlFor="username">User name</label> */}
                <input
                ref={username}
                className={formik.errors.email ? 'error':''}
                type="text" 
                name='username' 
                placeholder='User Name'
                required
                onChange={formik.handleChange}
                {...formik.getFieldProps('email')}/>
                {!isValid ? <p className='input-error-text'>Email doesn't exist</p> : <></>}
                {formik.errors.email && isValid ? <p className='input-error-text'>{formik.errors.email}</p>:<></>}
            </div>
            
            <div className='placeholder' data-placeholder='Password' >
                {/* <label className='hidden-label' htmlFor="password">Password</label> */}
                <input 
                ref={password}
                type="password" 
                name='password' 
                onChange={formik.handleChange}
                className={formik.errors.password ? 'error':''}
                placeholder='Password' 
                id='password'
                required
                {...formik.getFieldProps('password')}/>
                {formik.errors.password ? <p className='input-error-text'>{formik.errors.password}</p>:<></>}
                {isHidden ? <img src={VisOnImg} className='eye' alt="" onClick={handleEyeClick} /> :
                <img src={VisOffImg} className = 'eye' alt="" onClick={handleEyeClick} />}
            </div>
            

            <div className='flex-row justify-content-between'>
                <label className='flex-row' htmlFor="">
                    <input type="checkbox" name="KeepLogin" id="keepLogin" />
                    Keep me logged in
                </label>
                <a href="/">Forgot Password</a>
            </div>
            <button className="custom-btn" disabled={formik.errors.email || formik.errors.password} onClick={handleSignIn}>Sign In</button>
        </form>
        <div className='qt-div flex-row align-items-center'>
            <img className='qt-logo' src={QTlogo} alt="QTlogo" />
            <div>
                <p>Developed by</p>
                <p>QualyTrust IT Services, India</p>
            </div>
        </div>
        
    </div>
  )
}

export default Login