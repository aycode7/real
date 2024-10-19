"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './page.css'
import logo from './Image/madrid_icon.png'
import { useState } from 'react'
import perez from './Image/Perez.webp'

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
        
        {/* Big responsiveness */}
        <div className='hidden md:block sm:block lg:block '>

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
                <Image className='stadium' src={perez} alt='' />
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
                <h1>Florentino Perez:'This title will give us energy for a very difficult season'</h1>
                <p>Florentino Perez talks on winning the Super Cup</p>
                <h3>'It's not easy to debut at Real Madrid with a goal and Mbappe has made a very good start,' added the president after picking up his 64th title at the helm of the club.</h3>
                <h3>President <span style={{fontWeight:'bolder'}}>Florentino Perez</span> was interviewed by Real Madrid TV after winning the <span style={{fontWeight:'bolder'}}>European Super Cup</span> in Warsaw:'I'm very happy. We're just starting the season, it's the first title we've won and this is going to encourage us to do our best. it would give us energy for a season that, as we all know, is going to be very difficult.'</h3>
                <h1>Mbappe's Debut</h1>
                <h3>'The fact that <span style={{fontWeight:'bolder'}}>Mbappe</span> made his debut in a <span style={{fontWeight:'bolder'}}>Real Madrid</span> shirt by scoring is going to give him a lot of confidence to have a good season. He's very happy. When he picked up his medal he was happy. It's not easy to make your <span style={{fontWeight:'bolder'}}>Real Madrid</span> debut with a goal and he's made a great start.' </h3>
                <h1>The match</h1>
                <h3>'In the second half we came out to win. We scored two goals and we could have scored more. When you ho out to win with that impetus and that strength. It's normal dat we win.'</h3>
                <h1>64 titles as President</h1>
                <h3>'I'm excited about everything we can do. We have to keep working hard like we did last year and we will reap the rewards. We have a great team and nobody doubts that.'</h3>
                <h1>Madridstas</h1>
                <h3>'I've just come back from the United States, where they were amazing, as they were here.<span style={{fontWeight:'bolder'}}>Real Madrid</span> is universal. Fans all over the world have the club in their hearts and we can see that every time we leave Spain.'</h3>
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

            <Image className='stadium_phone' src={perez} alt='' />

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
                <h1>Florentino Perez:'This title will give us energy for a very difficult season'</h1>
                <p>Florentino Perez talks on winning the Super Cup</p>
                <h3>'It's not easy to debut at Real Madrid with a goal and Mbappe has made a very good start,' added the president after picking up his 64th title at the helm of the club.</h3>
                <h3>President <span style={{fontWeight:'bolder'}}>Florentino Perez</span> was interviewed by Real Madrid TV after winning the <span style={{fontWeight:'bolder'}}>European Super Cup</span> in Warsaw:'I'm very happy. We're just starting the season, it's the first title we've won and this is going to encourage us to do our best. it would give us energy for a season that, as we all know, is going to be very difficult.'</h3>
                <h1>Mbappe's Debut</h1>
                <h3>'The fact that <span style={{fontWeight:'bolder'}}>Mbappe</span> made his debut in a <span style={{fontWeight:'bolder'}}>Real Madrid</span> shirt by scoring is going to give him a lot of confidence to have a good season. He's very happy. When he picked up his medal he was happy. It's not easy to make your <span style={{fontWeight:'bolder'}}>Real Madrid</span> debut with a goal and he's made a great start.' </h3>
                <h1>The match</h1>
                <h3>'In the second half we came out to win. We scored two goals and we could have scored more. When you ho out to win with that impetus and that strength. It's normal dat we win.'</h3>
                <h1>64 titles as President</h1>
                <h3>'I'm excited about everything we can do. We have to keep working hard like we did last year and we will reap the rewards. We have a great team and nobody doubts that.'</h3>
                <h1>Madridstas</h1>
                <h3>'I've just come back from the United States, where they were amazing, as they were here.<span style={{fontWeight:'bolder'}}>Real Madrid</span> is universal. Fans all over the world have the club in their hearts and we can see that every time we leave Spain.'</h3>
            </div>
        </div>
      
    </div>
  )
}

export default page
