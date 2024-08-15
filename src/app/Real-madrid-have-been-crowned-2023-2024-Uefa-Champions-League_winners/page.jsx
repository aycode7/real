
"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import logo from './Image/madrid-logo-black.jpeg'
import champions from './Image/champions.webp'
import './page.css'
import Link from 'next/link'

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

  return (
    <div>

      {/* Big Laptop Responsiveness */}
      <div className='hidden md:hidden lg:hidden xl:block'>

        {/* Navbar */}

        <div className="topnav">
          <div className="navbar_big_laptop">

            <Link className='left' href="/">
              <div className="left">
                <h2>Real Madrid</h2>
                <Image className='logo' src={logo} alt='' />
              </div>
            </Link>

            <div className="center">
              <Link href="/">
                <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>News</h2>
              </Link>
              <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
              <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
              <Link href="Play">
                <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>Players</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}

        <div>
          <Image className='champions_big_laptop' src={champions} alt='' />
        </div>

        {/* Feedback */}

        {notlike === true &&
          <div onClick={handleLike}>
            <p className='feedback_big_laptop'>🤍</p>

            <div className='content_big_laptop'>
              <p>more content like this</p>
            </div>
          </div>
        }

        {like === true &&
          <div onClick={handleNotlike}>
            <p className='feedback_big_laptop'>💗</p>

            <div className='content_big_laptop'>
              <p>thanks for the likes</p>
            </div>
          </div>
        }

        {/* News */}

        <div className='news_big_laptop'>
          <div className="heading_big_laptop">
            <h2>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h2>
          </div>

          <div className="body_big_laptop"></div>
        </div>
      </div>

      {/* Small Laptop Responsiveness */}
      <div className='hidden md:hidden lg:block xl:hidden'>

        {/* Navbar */}

        <div className="topnav">
          <div className="navbar_small_laptop">

            <Link className='left' href="/">
              <div className="left">
                <h2>Real Madrid</h2>
                <Image className='logo' src={logo} alt='' />
              </div>
            </Link>

            <div className="center">
              <Link href="/">
                <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>News</h2>
              </Link>
              <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
              <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
              <Link href="Play">
                <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>Players</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}

        <div>
          <Image className='champions_small_laptop' src={champions} alt='' />
        </div>

        {/* Feedback */}

        {notlike === true &&
          <div onClick={handleLike}>
            <p className='feedback_small_laptop'>🤍</p>

            <div className='content_small_laptop'>
              <p>more content like this</p>
            </div>
          </div>
        }

        {like === true &&
          <div onClick={handleNotlike}>
            <p className='feedback_small_laptop'>💗</p>

            <div className='content_small_laptop'>
              <p>thanks for the likes</p>
            </div>
          </div>
        }

        {/* News */}

        <div className='news_small_laptop'>
          <div className="heading_small_laptop">
            <h2>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h2>
          </div>

          <div className="body_small_laptop"></div>
        </div>
      </div>

      {/* Tablet Responsiveness */}
      <div className='hidden md:block lg:hidden xl:hidden'>

        {/* Navbar */}

        <div className="topnav">
          <div className="navbar_tablet">

            <Link className='left' href="/">
              <div className="left">
                <h2>Real Madrid</h2>
                <Image className='logo' src={logo} alt='' />
              </div>
            </Link>

            <div className="center">
              <Link href="/">
                <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>News</h2>
              </Link>
              <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
              <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
              <Link href="Play">
                <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>Players</h2>
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}

        <div>
          <Image className='champions_tablet' src={champions} alt='' />
        </div>

        {/* Feedback */}

        {notlike === true &&
          <div onClick={handleLike}>
            <p className='feedback_tablet'>🤍</p>

            <div className='content_tablet'>
              <p>more content like this</p>
            </div>
          </div>
        }

        {like === true &&
          <div onClick={handleNotlike}>
            <p className='feedback_tablet'>💗</p>

            <div className='content_tablet'>
              <p>thanks for the likes</p>
            </div>
          </div>
        }

        {/* News */}

        <div className='news_tablet'>
          <div className="heading_tablet">
            <h2>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h2>
          </div>

          <div className="body_tablet"></div>
        </div>
      </div>
      
    </div>
  )
}

export default page
