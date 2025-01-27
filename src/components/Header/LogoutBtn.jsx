import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () =>{
        authService.logout().then(()=>{
            dispatch(logout())
            navigate('/login')
        })
    }


  return (
    <button className='md:font-[Noto Sans] sm:font-bold inline-block dark:text-white dark:hover:text-black px-4 sm:px-6 py-1 sm:py-2 duration-200 hover:bg-red-400  rounded-full'
    onClick={logoutHandler}
    >LogOut</button>
  )
}

export default LogoutBtn