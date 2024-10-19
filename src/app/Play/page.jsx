"use client"
import './page.css'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import stadium from './Image/night-stadium.jpg'
import logo from './Image/madrid_icon.png'
import modric from './Image/Modric.png'
import kroos from './Image/Kroos.jpeg'
import alaba from './Image/Alaba.jpeg'
import joselu from './Image/Mato Joselu.jpeg'
import nacho from './Image/Nacho.jpeg'
import courtois from './Image/Thibaut Courtois.png'
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

    const [show, setShow] = useState(false)

    const[show2, setShow2] = useState(true)
    const[show3, setShow3] = useState(false)

    const handleShow2 = () => {
        setShow2(true)
        setShow3(false)

    }

    const handleShow3 = () => {
        setShow2(false)
        setShow3(true)

    }

    const handleShow = () => {
        setShow(true)
        
    }

    const handleShowNot = () => {
        setShow(false)

    }

    const [dropdown, setDropdown] = useState(false)

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div>
        {/* Big Laptop Responsiveness */}
        <div id='movetop' className='hidden md:hidden lg:hidden xl:block'>
            {/* Stadium */}

            <div>
            <Image className='stadium' src={stadium} alt='' />
            </div>

            {/* Navbar */}

            <div className='topnav'>

                <div className="navbar">
                    <a href="/">
                        <div className="left">

                            <h2>Real Madrid</h2>
                            <Image className='logo' src={logo} alt='' />

                        </div>
                    </a>

                    <div className="middle">

                        <a href="/">
                            <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>News</h2>
                        </a>
                        <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
                        <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
                        <a href="players">
                            <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>Players</h2>
                        </a>

                    </div>
                </div>
            </div>

            <div className='baba'>

                {/* Players, Feedback, MOveTop */}
                <div className="flex">
                    
                    {/* Feedback */}

                    <div>

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
                    </div>

                    {/* Players */}

                    <div className="ctn">
                    <a href="/">
                        <div className="head-1">
                        <div className='madrid-head'>
                            <h2>Real Madrid</h2>
                            <Image src={logo} width={80} alt='Real Madrid' />
                        </div>
                        </div>
                    </a>

                    <div className="data-head">
                        <h3 className='name'>Name</h3>
                        <h3 className='position'>Position</h3>
                        <h3 className='age'>Age</h3>
                        <h3 className='height'>Ht</h3>
                        <h3 className='weight'>Wt(kg)</h3>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Luka Modric' />

                            <h3>Luka Modric</h3>

                            <h3>#10</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>39</h3>

                        <p className='play-height'>5'7"</p>

                        <h3 className='play-width'>66</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={kroos} alt='Toni Kroos' />

                            <h3>Valverde</h3>

                            <h3>#8</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>25</h3>

                        <p className='play-height'>6'0"</p>

                        <h3 className='play-width'>76</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={kroos} alt='Toni Kroos' />

                            <h3>Endrick</h3>

                            <h3>#24</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>19</h3>

                        <p className='play-height'>5'5"</p>

                        <h3 className='play-width'>66</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Vinicius Jr</h3>

                            <h3>#7</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>24</h3>

                        <p className='play-height'>5'6"</p>

                        <h3 className='play-width'>68</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Kylian Mbappe</h3>

                            <h3>#9</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>25</h3>

                        <p className='play-height'>5'8"</p>

                        <h3 className='play-width'>72</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={alaba} alt='David Alaba' />

                            <h3>David Alaba</h3>

                            <h3>#4</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>5'10"</p>

                        <h3 className='play-width'>78</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={nacho} alt='Nacho' />

                            <h3>Nacho</h3>

                            <h3>#6</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>5'10"</p>

                        <h3 className='play-width'>76</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={joselu} alt='Mato Joselu' />

                            <h3>Mato Joselu</h3>

                            <h3>#14</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>6'3"</p>

                        <h3 className='play-width'>80</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={joselu} alt='Mato Joselu' />

                            <h3>Mato Joselu</h3>

                            <h3>#14</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>6'3"</p>

                        <h3 className='play-width'>80</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Arder Guler</h3>

                            <h3>#24</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>20</h3>

                        <p className='play-height'>5'7"</p>

                        <h3 className='play-width'>72</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Militao</h3>

                            <h3>#6</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>6'0"</p>

                        <h3 className='play-width'>70</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Thibaut Courtois</h3>

                            <h3>#1</h3>
                        </div>

                        <h3 className='play-pst'>GoalKeeper</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>6'6"</p>

                        <h3 className='play-width'>96</h3>
                        </div>
                    </div>

                    {show === true &&
                    <div>
                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>
                    </div>
                    }

                    {show2 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow3}><button onClick={handleShow} className='btn' title='Click to see more'>See more</button></span>
                    </div>
                    }

                    {show3 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow2}><button onClick={handleShowNot} className='btn-2' title='Click to see less'>See less</button></span>
                    </div>
                    }

                    </div>

                    {/* MoveTop */}

                    <a href="#movetop">
                    <div title='click to go to navbar' className='moveTop'>
                    <p>☝🏽</p>
                    </div>
                    </a>
                    
                </div>
            </div>

        </div>

        {/* small Laptop Responsiveness */}
        <div id='movetop' className='hidden md:hidden lg:block xl:hidden'>
            {/* Stadium */}

            <div>
            <Image className='stadium' src={stadium} alt='' />
            </div>

            {/* Navbar */}

            <div className='topnav'>

                <div className="navbar">
                    <a href="/">
                        <div className="left">

                            <h2>Real Madrid</h2>
                            <Image className='logo' src={logo} alt='' />

                        </div>
                    </a>

                    <div className="middle">

                        <a href="/">
                            <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>News</h2>
                        </a>
                        <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
                        <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
                        <a href="players">
                            <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>Players</h2>
                        </a>

                    </div>
                </div>
            </div>

            <div className='baba'>

                {/* Players, Feedback, MOveTop */}
                <div className="flex">
                    
                    {/* Feedback */}

                    <div>

                        {notlike === true &&
                        <div onClick={handleLike}>
                            <p className='feedback_small'>🤍</p>

                            <div className='content'>
                            <p>more content like this</p>
                            </div>
                        </div>
                        }

                        {like === true &&
                        <div onClick={handleNotlike}>
                            <p className='feedback_small'>💗</p>

                            <div className='content'>
                            <p>thanks for the likes</p>
                            </div>
                        </div>
                        }
                    </div>

                    {/* Players */}

                    <div className="ctn">
                    <a href="/">
                        <div className="head-1">
                        <div className='madrid-head'>
                            <h2>Real Madrid</h2>
                            <Image src={logo} width={80} alt='Real Madrid' />
                        </div>
                        </div>
                    </a>

                    <div className="data-head">
                        <h3 className='name'>Name</h3>
                        <h3 className='position'>Position</h3>
                        <h3 className='age'>Age</h3>
                        <h3 className='height'>Ht</h3>
                        <h3 className='weight'>Wt(kg)</h3>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Luka Modric' />

                            <h3>Luka Modric</h3>

                            <h3>#10</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>39</h3>

                        <p className='play-height'>5'7"</p>

                        <h3 className='play-width'>66</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={kroos} alt='Toni Kroos' />

                            <h3>Toni Kroos</h3>

                            <h3>#8</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>6'0"</p>

                        <h3 className='play-width'>76</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={alaba} alt='David Alaba' />

                            <h3>David Alaba</h3>

                            <h3>#4</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>5'10"</p>

                        <h3 className='play-width'>78</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={nacho} alt='Nacho' />

                            <h3>Nacho</h3>

                            <h3>#6</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>5'10"</p>

                        <h3 className='play-width'>76</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={joselu} alt='Mato Joselu' />

                            <h3>Mato Joselu</h3>

                            <h3>#14</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>6'3"</p>

                        <h3 className='play-width'>80</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Thibaut Courtois</h3>

                            <h3>#1</h3>
                        </div>

                        <h3 className='play-pst'>GoalKeeper</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>6'6"</p>

                        <h3 className='play-width'>96</h3>
                        </div>
                    </div>

                    {show === true &&
                    <div>
                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>
                    </div>
                    }

                    {show2 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow3}><button onClick={handleShow} className='btn' title='Click to see more'>See more</button></span>
                    </div>
                    }

                    {show3 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow2}><button onClick={handleShowNot} className='btn-2' title='Click to see less'>See less</button></span>
                    </div>
                    }

                    </div>

                    {/* MoveTop */}

                    <a href="#movetop">
                    <div title='click to go to navbar' className='moveTop_small'>
                    <p>☝🏽</p>
                    </div>
                    </a>
                    
                </div>
            </div>

        </div>

        {/* tablet Laptop Responsiveness */}
        <div id='movetop' className='hidden md:block lg:hidden xl:hidden'>
            {/* Stadium */}

            <div>
            <Image className='stadium' src={stadium} alt='' />
            </div>

            {/* Navbar */}

            <div className='topnav'>

                <div className="navbar">
                    <a href="/">
                        <div className="left">

                            <h2>Real Madrid</h2>
                            <Image className='logo' src={logo} alt='' />

                        </div>
                    </a>

                    <div className="middle">

                        <a href="/">
                            <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>News</h2>
                        </a>
                        <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
                        <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
                        <a href="players">
                            <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>Players</h2>
                        </a>

                    </div>
                </div>
            </div>

            <div className='baba'>

                {/* Players, Feedback, MOveTop */}
                <div className="flex">

                    {/* Players */}

                    <div className="ctn">
                    <a href="/">
                        <div className="head-1">
                        <div className='madrid-head'>
                            <h2>Real Madrid</h2>
                            <Image src={logo} width={80} alt='Real Madrid' />
                        </div>
                        </div>
                    </a>

                    <div className="data-head">
                        <h3 className='name'>Name</h3>
                        <h3 className='position'>Position</h3>
                        <h3 className='age'>Age</h3>
                        <h3 className='height'>Ht</h3>
                        <h3 className='weight'>Wt(kg)</h3>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Luka Modric' />

                            <h3>Luka Modric</h3>

                            <h3>#10</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>39</h3>

                        <p className='play-height'>5'7"</p>

                        <h3 className='play-width'>66</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={kroos} alt='Toni Kroos' />

                            <h3>Toni Kroos</h3>

                            <h3>#8</h3>
                        </div>

                        <h3 className='play-pst'>Midfielder</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>6'0"</p>

                        <h3 className='play-width'>76</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={alaba} alt='David Alaba' />

                            <h3>David Alaba</h3>

                            <h3>#4</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>5'10"</p>

                        <h3 className='play-width'>78</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={nacho} alt='Nacho' />

                            <h3>Nacho</h3>

                            <h3>#6</h3>
                        </div>

                        <h3 className='play-pst'>Defender</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>5'10"</p>

                        <h3 className='play-width'>76</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={joselu} alt='Mato Joselu' />

                            <h3>Mato Joselu</h3>

                            <h3>#14</h3>
                        </div>

                        <h3 className='play-pst'>Forward</h3>

                        <h3 className='play-age'>34</h3>

                        <p className='play-height'>6'3"</p>

                        <h3 className='play-width'>80</h3>
                        </div>
                    </div>

                    <div className="player-data">
                        <div className='one'>
                        <div className="player-name">
                            <Image className='play' width={50} src={courtois} alt='Thibaut Courtois' />

                            <h3>Thibaut Courtois</h3>

                            <h3>#1</h3>
                        </div>

                        <h3 className='play-pst'>GoalKeeper</h3>

                        <h3 className='play-age'>32</h3>

                        <p className='play-height'>6'6"</p>

                        <h3 className='play-width'>96</h3>
                        </div>
                    </div>

                    {show === true &&
                    <div>
                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>

                        <div className="player-data">
                        <div className='one'>
                            <div className="player-name">
                            <Image className='play' width={50} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst'>Midfielder</h3>

                            <h3 className='play-age'>32</h3>

                            <p className='play-height'>5'10"</p>

                            <h3 className='play-width'>78</h3>
                        </div>
                        </div>
                    </div>
                    }

                    {show2 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow3}><button onClick={handleShow} className='btn' title='Click to see more'>See more</button></span>
                    </div>
                    }

                    {show3 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow2}><button onClick={handleShowNot} className='btn-2' title='Click to see less'>See less</button></span>
                    </div>
                    }

                    </div>

                </div>
            </div>

        </div>

        {/* phone Laptop Responsiveness */}
        {/* Navbar */}

        <div id='movetop' className='block md:hidden lg:hidden xl:hidden'>

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
                        <Link href="/" className={click4 === true ? ('tap_phone') : ''}>
                        <h2 onClick={handleClick4} className={click4 === true ? ('tap_phone') : ''}>News</h2>
                        </Link>
                        <Link href="https://www.livescore.com/en/football/team/real-madrid/4009/fixtures/">
                        <h2 onClick={handleClick2} className={click2 === true ? ('tap_phone') : ''}>Fixtures</h2>
                        </Link>
                        <h2 onClick={handleClick3} className={click3 === true ? ('tap_phone') : ''}>Standings</h2>
                        <Link href="Play" className={click1 === true ? ('tap_phone') : ''}>
                        <h2 onClick={handleClick1} className={1 === true ? ('tap_phone') : ''}>Players</h2>
                        </Link>
                    </div>
                    }
                </div>

                </div>

            </div>

            {/* stadium */}
            <Image className='stadium_phone' src={stadium} alt='' />

            <div className='baba_phone'>

                {/* Players, Feedback, MoveTop */}
                <div className="flex_phone">

                    {/* Players */}

                    <div className="ctn_phone">
                    <a href="/">
                        <div className="head-1_phone">
                        <div className='madrid-head_phone'>
                            <h2>Real Madrid</h2>
                            <Image src={logo} width={80} alt='Real Madrid' />
                        </div>
                        </div>
                    </a>

                    <div className="data-head_phone">
                        <h3 className='name'>Name</h3>
                        <h3 className='position'>Position</h3>
                    </div>

                    <div className="player-data_phone">
                        <div className='one_phone'>
                        <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Luka Modric' />

                            <h3>Luka Modric</h3>

                            <h3>#10</h3>
                        </div>

                        <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                    </div>

                    <div className="player-data_phone">
                        <div className='one_phone'>
                        <div className="player-name_phone">
                            <Image className='play' width={40} src={kroos} alt='Toni Kroos' />

                            <h3>Toni Kroos</h3>

                            <h3>#8</h3>
                        </div>

                        <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                    </div>

                    <div className="player-data_phone">
                        <div className='one_phone'>
                        <div className="player-name_phone">
                            <Image className='play' width={40} src={alaba} alt='David Alaba' />

                            <h3>David Alaba</h3>

                            <h3>#4</h3>
                        </div>

                        <h3 className='play-pst_phone'>Defender</h3>

                        </div>
                    </div>

                    <div className="player-data_phone">
                        <div className='one_phone'>
                        <div className="player-name_phone">
                            <Image className='play' width={40} src={nacho} alt='Nacho' />

                            <h3>Nacho</h3>

                            <h3>#6</h3>
                        </div>

                        <h3 className='play-pst_phone'>Defender</h3>

                        </div>
                    </div>

                    <div className="player-data_phone">
                        <div className='one_phone'>
                        <div className="player-name_phone">
                            <Image className='play' width={40} src={joselu} alt='Joselu' />

                            <h3>Mato Joselu</h3>

                            <h3>#14</h3>
                        </div>

                        <h3 className='play-pst_phone'>Striker</h3>

                        </div>
                    </div>

                    <div className="player-data_phone">
                        <div className='one_phone'>
                        <div className="player-name_phone">
                            <Image className='play' width={40} src={courtois} alt='Thibaut Courtois' />

                            <h3>Thibaut Courtois</h3>

                            <h3>#1</h3>
                        </div>

                        <h3 className='play-pst_phone'>Goalie</h3>

                        </div>
                    </div>

                    {show === true &&
                    <div>
                        <div className="player-data_phone">
                        <div className='one_phone'>
                            <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                        </div>

                        <div className="player-data_phone">
                        <div className='one_phone'>
                            <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                        </div>

                        <div className="player-data_phone">
                        <div className='one_phone'>
                            <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                        </div>

                        <div className="player-data_phone">
                        <div className='one_phone'>
                            <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                        </div>

                        <div className="player-data_phone">
                        <div className='one_phone'>
                            <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                        </div>

                        <div className="player-data_phone">
                        <div className='one_phone'>
                            <div className="player-name_phone">
                            <Image className='play' width={40} src={modric} alt='Jude Bellingham' />

                            <h3>Jude Bellingham</h3>

                            <h3>#5</h3>
                            </div>

                            <h3 className='play-pst_phone'>Midfielder</h3>

                        </div>
                        </div>

                    </div>
                    }

                    {show2 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow3}><button onClick={handleShow} className='btn' title='Click to see more'>See more</button></span>
                    </div>
                    }

                    {show3 === true &&
                    <div className="btn-ctn">
                    <span onClick={handleShow2}><button onClick={handleShowNot} className='btn-2' title='Click to see less'>See less</button></span>
                    </div>
                    }

                    </div>

                </div>
            </div>

        </div>

      
    </div>
  )
}

export default page