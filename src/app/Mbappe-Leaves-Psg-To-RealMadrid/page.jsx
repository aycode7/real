'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import { useState } from 'react'
import david from './Image/david.webp'
import logo from './Image/madrid_icon.png'
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
      {/* Big_screen responsiveness */}
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
          <Image className='stadium' src={david} alt='' />
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
          <h1>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: It's a very special moment</h1>

          <p className='p-1'>The former Galatico approves of the striker's arrival</p>

          <h3 className='h3-1'>The confirmation of Kylian Mbappe's signing for Real Madrid is on everyone's lips, and even David Beckham has spoken about it.</h3>

          <h3>Mbappe has agreed a five-year contract worth a reported $15million-a-year, with a massive $163m loyalty bonus to be paid across his time at the Santiago Bernabeu. He will join after his contract with PSG expires on July 1, 2024</h3>
          
          <h3>And Beckham, 49, said he was excited about the striker's arrival in the Spanish capital after Mbappe was finally presented as a new Real Madrid player on Tuesday.</h3>

          <h3>"It's a very special moment, not only for Madrid, but for all of Spain... to see a player like him [Mbappe] come to La Liga," the Inter Miami co-owner said on his visit to Barcelona for a promotional event</h3>

          <h3>"I think he is a special player and a special person. I'm happy for him, I'm happy for Madrid. He is a great player, a great person and he joins a great club."</h3>

          <h3>Beckham, ambassador of the TUDOR brand, was in Barcelona for the opening of the watch brand's first store in the capital of Catalonia.</h3>

          <h1 className='h1-1'>How Real Madrid captured Kylian Mbappe</h1>

          <h3>The journey to Mbappe's signing began nearly two years ago, shortly after he left Real Madrid at the altar in May 2022. Under immense pressure from Paris, France, and Qatar, Mbappe renewed his contract with PSG just when Real Madrid had everything prepared to welcome him.</h3>

          <h3>Despite the disappointment, the LaLiga giants continued to lay the groundwork for the signing this summer. President Florentino Perez secured Mbappe, who worked diligently to ensure his freedom by June 30, 2024, a year earlier than initially agreed with PSG.</h3>

          <h3>Perez and Mbappe executed a flawless strategy last summer to finalize the signing of the century. Perez made PSG uneasy by denying any ongoing negotiations, while Mbappe remained resolute in his decision not to extend his contract with PSG.</h3>

          <h3>This impecable plan ultimately brought Mbappe to the Santiago Bernabeu, and he will now wear the No.9 jersey as he prepares for a new adventure in Spain.</h3>

        </div>

      </div>

      {/* Phone_Responsiveness */}
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
          <Image className='stadium' src={david} alt='' />
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
          <h1>David Beckham breaks silence on Kylian Mbappe Real Madrid transfer: It's a very special moment</h1>

          <p className='p-1'>The former Galatico approves of the striker's arrival</p>

          <h3 className='h3-1'>The confirmation of Kylian Mbappe's signing for Real Madrid is on everyone's lips, and even David Beckham has spoken about it.</h3>

          <h3>Mbappe has agreed a five-year contract worth a reported $15million-a-year, with a massive $163m loyalty bonus to be paid across his time at the Santiago Bernabeu. He will join after his contract with PSG expires on July 1, 2024</h3>
          
          <h3>And Beckham, 49, said he was excited about the striker's arrival in the Spanish capital after Mbappe was finally presented as a new Real Madrid player on Tuesday.</h3>

          <h3>"It's a very special moment, not only for Madrid, but for all of Spain... to see a player like him [Mbappe] come to La Liga," the Inter Miami co-owner said on his visit to Barcelona for a promotional event</h3>

          <h3>"I think he is a special player and a special person. I'm happy for him, I'm happy for Madrid. He is a great player, a great person and he joins a great club."</h3>

          <h3>Beckham, ambassador of the TUDOR brand, was in Barcelona for the opening of the watch brand's first store in the capital of Catalonia.</h3>

          <h1 className='h1-1'>How Real Madrid captured Kylian Mbappe</h1>

          <h3>The journey to Mbappe's signing began nearly two years ago, shortly after he left Real Madrid at the altar in May 2022. Under immense pressure from Paris, France, and Qatar, Mbappe renewed his contract with PSG just when Real Madrid had everything prepared to welcome him.</h3>

          <h3>Despite the disappointment, the LaLiga giants continued to lay the groundwork for the signing this summer. President Florentino Perez secured Mbappe, who worked diligently to ensure his freedom by June 30, 2024, a year earlier than initially agreed with PSG.</h3>

          <h3>Perez and Mbappe executed a flawless strategy last summer to finalize the signing of the century. Perez made PSG uneasy by denying any ongoing negotiations, while Mbappe remained resolute in his decision not to extend his contract with PSG.</h3>

          <h3>This impecable plan ultimately brought Mbappe to the Santiago Bernabeu, and he will now wear the No.9 jersey as he prepares for a new adventure in Spain.</h3>

        </div>

      </div>
      
    </div>
  )
}

export default page
