import React from 'react'

const Navbar = () => {
  return (
    <nav className=' flex justify-between items-center h-20 px-[6vw] sticky top-0 bg-white z-10'>
        <div className=' flex items-center gap-8'>
            <a href="" className=' flex items-center gap-2'>
                <img className=' w-8' src="./assets/logo.png" alt="" />
                <span className=' text-2xl font-semibold'>EstateFind</span>
            </a>
            <ul className=' w-[40vw] max-w-[400px] flex justify-between absolute left-[50%] translate-x-[-50%]'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Agents</li>
            </ul>
        </div>
        <div>
            <ul className=' flex gap-8 items-center'>
                <li>SignIn</li>
                <li className=' bg-blue-200 p-2 rounded-xl'>SignUp</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar