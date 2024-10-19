'use client'
import React from 'react'
import './page.css'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from './Image/madrid_icon.png'
import militao from './Image/militao.jpeg'

const page = () => {

  const [click1, setClick1] = useState(true)
  const [click2, setClick2] = useState(false)
  const [click3, setClick3] = useState(false)
  const [click4, setClick4] = useState(false)

  const handleClick1 = () => {
    setClick1(true)
    setClick2(false)
    setClick3(false)
    setClick4(false)

  }

  const handleClick2 = () => {
    setClick1(false)
    setClick2(true)
    setClick3(false)
    setClick4(false)

  }

  const handleClick3 = () => {
    setClick1(false)
    setClick2(false)
    setClick3(true)
    setClick4(false)

  }

  const handleClick4 = () => {
    setClick1(false)
    setClick2(false)
    setClick3(false)
    setClick4(true)
    
  }

  const [notlike, setNotlike] = useState(true)
  const [like, setLike] = useState(false)

  const handleNotlike = () => {
    setNotlike(true)
    setLike(false)

  }

  const handleLike = () => {
    setNotlike(false)
    setLike(true)

  }

  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <div>
        {/* Big screen responsiveness */}
        <div className='hidden md:block sm:block lg:block'>
            {/* Navbar */}
            <div className="topnav">
                <div className="navbar">
                    <Link href="/">

                    <div className="left">
                        <h2>Real Madrid</h2>
                        <Image className='logo' src={logo} width={300} alt='' />
                    </div>
                    </Link>

                    <div className="middle">
                    <Link href="/">
                        <h2 onClick={handleClick1} id='h2' className={click1 === true ? ('tap') : ''}>News</h2>
                    </Link>

                    <Link href="https://www.livescore.com/en/football/team/real-madrid/4009/fixtures/">
                        <h2 onClick={handleClick2} id='h2' className={click2 === true ? ('tap') : ''}>Fixtures</h2>
                    </Link>

                    <h2 onClick={handleClick3} id='h2' className={click3 === true ? ('tap') : ''}>Standings</h2>

                    <Link href="Play">
                        <h2 onClick={handleClick4} id='h2' className={click4 === true ? ('tap') : ''}>Players</h2>
                    </Link>
                    </div>
                </div>
            </div>

            {/* Background-Image */}
            <div>
              <Image className='stadium' src={militao} alt='' />
            </div>

            {/* feedback */}
            {notlike === true &&
            <div onClick={handleLike}>
                <p className='feedback'>🤍</p>

                <div className='content'>
                <p>more content like this</p>
                </div>
            </div>
            }

            {like === true &&
            <div onClick={handleNotlike}>
                <p className='feedback'>💗</p>

                <div className='content'>
                <p>thanks for the likes</p>
                </div>
            </div>
            }

            {/* text */}
            <div className="text">
                <h1>Eder Militao's medical report</h1>
                <p>MEDICAL REPORT. 08/09/2024</p>
                <h3>Following test carried out on 08/09/2024 by Real Madrid Medical Service on our player Eder Militao.</h3>
                <h3>He has been diagnosed with a muscular injury due to a strain in the rectus abdominis muscle of his right leg</h3>
                <h3>His progress would be monitored.</h3>
            </div>
        </div>

        {/* Phone responsiveness */}
        <div className='block md:hidden sm:hidden lg:hidden'>

            {/* Navbar */}
            <div className="topnav_phone">

                <div className="navbar_phone">

                    <Link href="/">
                    <div className="left">
                    <h2>Real Madrid</h2>
                    <Image className='logo_phone' src={logo} alt='' />
                    </div>
                    </Link>

                    <div className="right">
                    <p className='dropdown_icon_phone' onClick={handleDropdown}>▼</p>

                    {dropdown === true &&
                        <div className="dropdown_phone">
                        <Link href="/" className={click1 === true ? ('tap_phone') : ''}>
                            <h2 onClick={handleClick1} className={click1 === true ? ('tap_phone') : ''}>News</h2>
                        </Link>
                        <Link href="https://www.livescore.com/en/football/team/real-madrid/4009/fixtures/">
                            <h2 onClick={handleClick2} className={click2 === true ? ('tap_phone') : ''}>Fixtures</h2>
                        </Link>
                        <h2 onClick={handleClick3} className={click3 === true ? ('tap_phone') : ''}>Standings</h2>
                        <Link href="Play" className={click4 === true ? ('tap_phone') : ''}>
                            <h2 onClick={handleClick4} className={click4 === true ? ('tap_phone') : ''}>Players</h2>
                        </Link>
                        </div>
                    }
                    </div>

                </div>

            </div>

            {/* Stadium */}

            <Image className='stadium_phone' src={militao} alt='' />

            {/* Feedback */}

            {notlike === true &&
            <div onClick={handleLike}>
                <p className='feedback_phone'>🤍</p>

                <div className='content_phone'>
                <p>more content like this</p>
                </div>
            </div>
            }

            {like === true &&
            <div onClick={handleNotlike}>
                <p className='feedback_phone'>💗</p>

                <div className='content_phone'>
                <p>thanks for the likes</p>
                </div>
            </div>
            }

            {/* text */}

            <div className="text_phone">
                <h1>Eder Militao's medical report</h1>
                <p>MEDICAL REPORT. 08/09/2024</p>
                <h3>Following test carried out on 08/09/2024 by Real Madrid Medical Service on the player Eder Militao.</h3>
                <h3>He has been diagnosed with a muscular injury due to a strain in the rectus abdominis muscle of his right leg</h3>
                <h3>His progress would be monitored.</h3>
            </div>
        </div>
      
    </div>
  )
}

export default page
