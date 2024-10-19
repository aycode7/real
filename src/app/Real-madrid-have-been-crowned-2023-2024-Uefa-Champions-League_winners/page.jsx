
"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import logo from './Image/madrid_icon.png'
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

  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <div>

      {/* Big Screen Responsiveness */}
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
          <Image className='stadium' src={champions} alt='' />
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

        {/* News */}

        <div className='news_big_laptop'>
          <div className="heading_big_laptop">
            <h1>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h1>

            <p>Beating Borussia Dortmund 2 - 0 in a final Carvajal, Vinicius Jr. score for Los Merengues at Wembley</p>

            <h3>Real Madrid won the 2024 UEFA Champions League trophy Saturday by blanking Borussia Dortmund 2 - 0 in the final.</h3>

            <h3>Spanish defender Dani Carvajal and Brazilian attacker Vinicius Jr. scored for Los Merengues in the 74th and 83rd minutes, respectively, at Wembley Stadium.</h3>

            <h3>Dortmund's German striker Niclas Fullkrug missed a chance for the lead by aiming his shot at the crossbar in the 23rd minute. Fullkrug missed another chance to score in the 87th minute as the Video Assistant Referee (VAR) disallowed his goal because of an offside.</h3>

            <h3>Dortmund's Swiss goalie Gregor Kobel made vital saves during the match to keep his team alive but could not prevent Real Madrid from clinching their 15th Champions League title.</h3>

            <h3>UEFA Champions League record holders Real Madrid won their sixth trophy in the last 10 years.</h3>

            <h3>Arda Guler became the first Turkish footballer to win a UEFA Champions League trophy.</h3>
          </div>

        </div>
      </div>

      {/* phone screen reponsiveness */}
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

        {/* Background-Image */}
        <div>
          <Image className='stadium_phone' src={champions} alt='' />
        </div>

        {/* feedback */}
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

        {/* News */}

        <div className='news_big_laptop'>
          <div className="heading_big_laptop">
            <h1>Real Madrid have been crowned the 2023/2024 UEFA Champions League Winners</h1>

            <p>Beating Borussia Dortmund 2 - 0 in a final Carvajal, Vinicius Jr. score for Los Merengues at Wembley</p>

            <h3>Real Madrid won the 2024 UEFA Champions League trophy Saturday by blanking Borussia Dortmund 2 - 0 in the final.</h3>

            <h3>Spanish defender Dani Carvajal and Brazilian attacker Vinicius Jr. scored for Los Merengues in the 74th and 83rd minutes, respectively, at Wembley Stadium.</h3>

            <h3>Dortmund's German striker Niclas Fullkrug missed a chance for the lead by aiming his shot at the crossbar in the 23rd minute. Fullkrug missed another chance to score in the 87th minute as the Video Assistant Referee (VAR) disallowed his goal because of an offside.</h3>

            <h3>Dortmund's Swiss goalie Gregor Kobel made vital saves during the match to keep his team alive but could not prevent Real Madrid from clinching their 15th Champions League title.</h3>

            <h3>UEFA Champions League record holders Real Madrid won their sixth trophy in the last 10 years.</h3>

            <h3>Arda Guler became the first Turkish footballer to win a UEFA Champions League trophy.</h3>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default page
