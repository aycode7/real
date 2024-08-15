"use client"
import './page.css'
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import stadium from './Image/night-stadium.jpg'
import logo from './Image/madrid-logo-black.jpeg'
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
                            <Image src={logo} width={50} alt='Real Madrid' />

                            <h2>Real Madrid</h2>
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
                    <div title='click to go to navbar' className='moveTop'>
                    <p>☝🏽</p>
                    </div>
                    </a>
                    
                </div>
            </div>

        </div>

        {/* Small Laptop Responsiveness */}
        <div id='movetop' className='hidden md:hidden lg:block xl:hidden'>

            {/* Stadium */}
            <Image src={stadium} className='stadium_small_laptop' alt='' />

            <div className="topnav_small_laptop">
                <div className="navbar_small_laptop">
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

            <div className="baba_small_laptop">

                <div className="ctn_small_laptop">
                    <Image className='logo_small_laptop' src={logo} alt='' />
                    <h2>Real Madrid</h2>
                </div>
            </div>

            <div className="info_small_laptop">
                <h2>Name</h2>
                <h2 className='pst_small_laptop'>Position</h2>
                <h2 className='ag_small_laptop'>Age</h2>
                <h2 className='ht_small_laptop'>Ht</h2>
                <h2 className='wt_small_laptop'>Wt(kg)</h2>

            </div>

            <div className="details_small_laptop">
                <div className="luka_modric_small_laptop">
                    <div className="name_small_laptop">
                        <Image className='modric_img_small_laptop' src={modric} alt='' />
                        <h2>Luka Modric</h2>
                        <h2>#10</h2>
                    </div>

                    <div className="position_small_laptop">
                        <h2>Midfielder</h2>
                    </div>

                    <div className="age_small_laptop">
                        <h2>39</h2>
                    </div>

                    <div className="height_small_laptop">
                        <h2>5'7" </h2>
                    </div>

                    <div className="weight_small_laptop">
                        <h2>66</h2>
                    </div>
                </div>

                <div className="toni_kroos_small_laptop">
                    <div className="name_small_laptop">
                        <Image className='toni_kroos_img_small_laptop' src={kroos} alt='' />
                        <h2>Toni Kroos</h2>
                        <h2>#8</h2>
                    </div>

                    <div className="position_small_laptop">
                        <h2>Midfielder</h2>
                    </div>

                    <div className="age_small_laptop">
                        <h2>34</h2>
                    </div>

                    <div className="height_small_laptop">
                        <h2>6'0" </h2>
                    </div>

                    <div className="weight_small_laptop">
                        <h2>76</h2>
                    </div>
                </div>

                <div className="david_alaba_small_laptop"> 
                    <div className="name_small_laptop">
                        <Image className='david_alaba_img_small_laptop' src={alaba} alt='' />
                        <h2>David Alaba</h2>
                        <h2>#4</h2>
                    </div>

                    <div className="position_small_laptop">
                        <h2>Defender</h2>
                    </div>

                    <div className="age_small_laptop">
                        <h2>32</h2>
                    </div>

                    <div className="height_small_laptop">
                        <h2>5'7" </h2>
                    </div>

                    <div className="weight_small_laptop">
                        <h2>78</h2>
                    </div>
                </div>

                <div className="nacho_small_laptop"> 
                    <div className="name_small_laptop">
                        <Image className='nacho_img_small_laptop' src={nacho} alt='' />
                        <h2>Nacho</h2>
                        <h2>#6</h2>
                    </div>

                    <div className="position_small_laptop">
                        <h2>Defender</h2>
                    </div>

                    <div className="age_small_laptop">
                        <h2>34</h2>
                    </div>

                    <div className="height_small_laptop">
                        <h2>5'10" </h2>
                    </div>

                    <div className="weight_small_laptop">
                        <h2>76</h2>
                    </div>
                </div>

                <div className="mato_joselu_small_laptop"> 
                    <div className="name_small_laptop">
                        <Image className='mato_joselu_img_small_laptop' src={joselu} alt='' />
                        <h2>Mato Joselu</h2>
                        <h2>#14</h2>
                    </div>

                    <div className="position_small_laptop">
                        <h2>Forward</h2>
                    </div>

                    <div className="age_small_laptop">
                        <h2>34</h2>
                    </div>

                    <div className="height_small_laptop">
                        <h2>6'3" </h2>
                    </div>

                    <div className="weight_small_laptop">
                        <h2>80</h2>
                    </div>
                </div>

                <div className="thibaut_courtois_small_laptop"> 
                    <div className="name_small_laptop">
                        <Image className='thibaut_courtois_img_small_laptop' src={courtois} alt='' />
                        <h2>Thibaut Courtois</h2>
                        <h2>#1</h2>
                    </div>

                    <div className="position_small_laptop">
                        <h2>Goal Keeper</h2>
                    </div>

                    <div className="age_small_laptop">
                        <h2>32</h2>
                    </div>

                    <div className="height_small_laptop">
                        <h2>6'6" </h2>
                    </div>

                    <div className="weight_small_laptop">
                        <h2>96</h2>
                    </div>
                </div>

                <div>
                    <button className='see_more_small_laptop'>see more</button>
                </div>
            </div>
        </div>

        {/* Tablet Responsiveness */}
        <div id='movetop' className='hidden md:block lg:hidden xl:hidden'>

            {/* Stadium */}
            <Image src={stadium} className='stadium_tablet' alt='' />

            <div className="topnav_tablet">
                <div className="navbar_tablet">
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

            <div className="baba_tablet">

                <div className="ctn_tablet">
                    <Image className='logo_tablet' src={logo} alt='' />
                    <h2>Real Madrid</h2>
                </div>
            </div>

            <div className="info_tablet">
                <h2>Name</h2>
                <h2 className='pst_tablet'>Position</h2>
                <h2 className='ag_tablet'>Age</h2>
                <h2 className='ht_tablet'>Ht</h2>
                <h2 className='wt_tablet'>Wt(kg)</h2>

            </div>

            <div className="details_tablet">
                <div className="luka_modric_tablet">
                    <div className="name_tablet">
                        <Image className='modric_img_tablet' src={modric} alt='' />
                        <h2>Luka Modric</h2>
                        <h2>#10</h2>
                    </div>

                    <div className="position_tablet">
                        <h2>Midfielder</h2>
                    </div>

                    <div className="age_tablet">
                        <h2>39</h2>
                    </div>

                    <div className="height_tablet">
                        <h2>5'7" </h2>
                    </div>

                    <div className="weight_tablet">
                        <h2>66</h2>
                    </div>
                </div>

                <div className="toni_kroos_tablet">
                    <div className="name_tablet">
                        <Image className='toni_kroos_img_tablet' src={kroos} alt='' />
                        <h2>Toni Kroos</h2>
                        <h2>#8</h2>
                    </div>

                    <div className="position_tablet">
                        <h2>Midfielder</h2>
                    </div>

                    <div className="age_tablet">
                        <h2>34</h2>
                    </div>

                    <div className="height_tablet">
                        <h2>6'0" </h2>
                    </div>

                    <div className="weight_tablet">
                        <h2>76</h2>
                    </div>
                </div>

                <div className="david_alaba_tablet"> 
                    <div className="name_tablet">
                        <Image className='david_alaba_img_tablet' src={alaba} alt='' />
                        <h2>David Alaba</h2>
                        <h2>#4</h2>
                    </div>

                    <div className="position_tablet">
                        <h2>Defender</h2>
                    </div>

                    <div className="age_tablet">
                        <h2>32</h2>
                    </div>

                    <div className="height_tablet">
                        <h2>5'7" </h2>
                    </div>

                    <div className="weight_tablet">
                        <h2>78</h2>
                    </div>
                </div>

                <div className="nacho_tablet"> 
                    <div className="name_tablet">
                        <Image className='nacho_img_tablet' src={nacho} alt='' />
                        <h2>Nacho</h2>
                        <h2>#6</h2>
                    </div>

                    <div className="position_tablet">
                        <h2>Defender</h2>
                    </div>

                    <div className="age_tablet">
                        <h2>34</h2>
                    </div>

                    <div className="height_tablet">
                        <h2>5'10" </h2>
                    </div>

                    <div className="weight_tablet">
                        <h2>76</h2>
                    </div>
                </div>

                <div className="mato_joselu_tablet"> 
                    <div className="name_tablet">
                        <Image className='mato_joselu_img_tablet' src={joselu} alt='' />
                        <h2>Mato Joselu</h2>
                        <h2>#14</h2>
                    </div>

                    <div className="position_tablet">
                        <h2>Forward</h2>
                    </div>

                    <div className="age_tablet">
                        <h2>34</h2>
                    </div>

                    <div className="height_tablet">
                        <h2>6'3" </h2>
                    </div>

                    <div className="weight_tablet">
                        <h2>80</h2>
                    </div>
                </div>

                <div className="thibaut_courtois_tablet"> 
                    <div className="name_tablet">
                        <Image className='thibaut_courtois_img_tablet' src={courtois} alt='' />
                        <h2>Thibaut Courtois</h2>
                        <h2>#1</h2>
                    </div>

                    <div className="position_tablet">
                        <h2>Goal Keeper</h2>
                    </div>

                    <div className="age_tablet">
                        <h2>32</h2>
                    </div>

                    <div className="height_tablet">
                        <h2>6'6" </h2>
                    </div>

                    <div className="weight_tablet">
                        <h2>96</h2>
                    </div>
                </div>

                <div>
                    <button className='see_more_tablet'>see more</button>
                </div>
            </div>
        </div>

        {/* Phone Responsiveness */}
        <div className='block md:hidden lg:hidden xl:hidden'>

            {/* Navbar */}
            <div className="topnav_phone">
                <div className="navbar">

                    <div className="left">
                        <Link href="/" className='left'>
                            <h2>Real Madrid</h2>
                            <Image className='logo' src={logo} />
                        </Link>
                    </div>

                    <div className="right">
                        <h2 onClick={handleDropdown}>▼</h2>

                        {dropdown === true && 
                        <div className="dropdown_phone">
                        
                            <h2 onClick={handleClick4} className={click4 === true ? ('tap_phone') : ''}><Link href="/" className={click4 === true ? ('tap_phone') : ''}>News</Link></h2>
                            <h2 onClick={handleClick2} className={click2 === true ? ('tap_phone') : ''}>Fixtures</h2>
                            <h2 onClick={handleClick3} className={click3 === true ? ('tap_phone') : ''}>Standings</h2>
                            <h2 onClick={handleClick1} className={click1 === true ? ('tap_phone') : ''}><Link href="Play" className={click4 === true ? ('tap_phone') : ''}>Players</Link></h2>
                        </div>
                        }
                    </div>
                </div>
            </div>   

            {/* Players */}
            <div className="players_details_phone">
                <div className="heading">
                    <Link href="/" className='heading'>
                        <h2>Real Madrid</h2>
                        <Image className='logo_phone' src={logo} alt='' />
                    </Link>
                </div>

                <div className="details">
                    <div className="player_phone">
                        <div className="name"><h2>Name</h2></div>
                        <div className="position">Position</div>
                    </div>

                    {/* Modirc */}
                    <div className="player_phone">
                        <div className="name">
                            <Image className='img_phone' src={modric} />
                            <h2>Luka Modric #10</h2>
                        </div>
                        
                        <div className="position">Midfielder</div>
                    </div>

                    {/* Alaba */}
                    <div className="player_phone">
                        <div className="name">
                            <Image className='img_phone' src={alaba} />
                            <h2>David Alaba #6</h2>
                        </div>
                        
                        <div className="position">Defender</div>
                    </div>

                    {/* Kroos */}
                    <div className="player_phone">
                        <div className="name">
                            <Image className='img_phone' src={kroos} />
                            <h2>Toni Kroos #8 (Retired)</h2>
                        </div>
                        
                        <div className="position">Midfielder</div>
                    </div>

                    {/* Nacho */}
                    <div className="player_phone">
                        <div className="name">
                            <Image className='img_phone' src={nacho} />
                            <h2>Nacho #6</h2>
                        </div>
                        
                        <div className="position">Defender</div>
                    </div>

                    {/* Joselu */}
                    <div className="player_phone">
                        <div className="name">
                            <Image className='img_phone' src={joselu} />
                            <h2>Mato Joselu #14</h2>
                        </div>
                        
                        <div className="position">Striker</div>
                    </div>

                    {/* Thibaut */}
                    <div className="player_phone">
                        <div className="name">
                            <Image className='img_phone' src={courtois} />
                            <h2>Thibaut Courtois #1</h2>
                        </div>
                        
                        <div className="position">GoalKeeper</div>
                    </div>
                </div>

                <div className="see_more_phone">
                    <button>see more</button>
                </div>
            </div>   

            {/* Stadium */}
            <div>
              <Image className='stadium_phone' src={stadium} alt='' />
            </div> 

        </div>

      
    </div>
  )
}

export default page