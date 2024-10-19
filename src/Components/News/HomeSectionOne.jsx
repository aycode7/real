'use client'
import React from 'react'
import './page.css'
import Image from 'next/image'
import logo from './Image/madrid_icon.png'
import stadium from './Image/night-stadium.jpg'
import champions from './Image/champions.webp'
import rodrygo from './Image/rodrygo.jpg'
import { Arsenal, Play } from 'next/font/google'
import arsenal from './Image/Arsenal-stadium.jpg'
import mbappe from './Image/Mbappe.jpeg'
import david from './Image/david.webp'
import kylian from './Image/kylian.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import { Poppins } from 'next/font/google'
import perez from './Image/Perez.webp'
import Link from 'next/link'
import belligoal from './Image/bellingham_med.webp'
import militao from './Image/militao.jpeg'

const HomeSectionOne = () => {

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

  const [show, setShow] = useState(true)
  const[hide, setHide] = useState(false)

  const handleShow = () => {
    setShow(true)
    setHide(false)

  }

  const handleHide = () => {
    setHide(true)
    setShow(false)

  }

  // pop up
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem('disclaimerAccepted');

    if(hasAcceptedDisclaimer === 'true'){
      setShowDisclaimer(false);

    }
  }, []);

  const handleAcceptDisclaimer = () => {
    localStorage.setItem('disclaimerAccepted', 'true');

    setShowDisclaimer(false);

  };

  return (
    <div>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      {/* Big Laptop Responsiveness */}

      <div className='hidden md:hidden lg:hidden xl:block'>

        {showDisclaimer && (
          <div style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.459)', zIndex: 1}} className='head_popup'>
            <div style={{ backgroundColor:'rgba(0, 0, 0, 0.459)', padding:'20px', borderRadius:'10px', boxShadow:'0 0 10px rgba(0,0,0,0.2)', zIndex:2}} className='popup'>
              <h2>"This website, <span style={{color:'darkblue'}}>kickoff-santiagobernabeu.netlify.app</span>, is an unofficial fan site and not affiliated with Real Madrid, Santiago Bernabeu, or any related entities. All trademarks and copyrights remain property of their respective owners. This site is for informational and entertainment purposes only."</h2>
              <button style={{border:'2px solid white', borderRadius:'10px'}} onClick={handleAcceptDisclaimer}>Accept</button>
            </div>
          </div>

        )}

        {/* new div */}
        <div style={showDisclaimer ? {filter: 'blur(5px)'} : {}}>

          {/* topnav */}

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

          {/* Stadium */}

          <div>
            <Image className='stadium' src={belligoal} alt='' />
          </div>

          {/* Feed_back */}

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

          {/* News_Heading */}

          <div className='news_heading'>
            <h2>News</h2>
          </div>

          {/* News */}

          <div>
            <div className='news_flex'>

              <div className='news'>
                <Link className='news' href="Real-madrid-have-been-crowned-2023-2024-Uefa-Champions-League_winners">
                <span>
                  <Image className='img1' src={champions} alt='' />

                  <div>
                    <h2 className='headline'>Real Madrid have been crowned the 2023/2024 Uefa Champions League Winners</h2>
                  </div>
                </span>
                </Link>
              </div>
            
              <div className='news'>
                <Link className='news' href="Mbappe-Leaves-Psg-To-RealMadrid">
                <span>
                  <Image className='img1' src={david} alt='' />

                  <div>
                    <h2 className='headline'>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>
                  </div>
                </span>
                </Link>
              </div>

            </div>

            <div className="news_flex">
              <div className='news'>
                  <Link className='news' href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                    <span>
                      <Image className='img1' src={kylian} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Mbappe : PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>
                      </div>
                    </span>
                  </Link>
              </div>

              <div className='news'>
                  <Link className='news' href="https://www.realmadrid.com/en-US/news/football/first-team/medical-reports/parte-medico-de-bellingham-11-02-2024">
                    <span>
                    <Image className='img1' src={belligoal} alt='' />

                    <div>
                      <h2 id='headline' className='headline'>Bellingham's medical report</h2>
                    </div>
                    </span>
                  </Link>
              </div>
              
            </div>

            <div className="news_flex">
              <div className='news'>
                  <Link className='news' href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/rodrygo-primer-gol-madridista-en-las-dos-ultimas-ligas-18-08-2024">
                    <span>
                    <Image className='img1' src={rodrygo} alt='' />

                    <div>
                      <h2 id='headline' className='headline'>Rodrygo has scored the opening goal for real madrid for the last two seasons</h2>
                    </div>
                    </span>
                  </Link>
              </div>

              <div className='news'>
                  <Link className='news' href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                    <span>
                      <Image className='img1' src={mbappe} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Mbappe set to leave PSG for Real Madrid</h2>
                      </div>
                    </span>
                  </Link>
              </div>
              
            </div>

            <div className="news_flex">
              <div className='news'>
                  <Link className='news' href="Florentino-Perez-Talks-About-Winning-The-Super-Cup">
                    <span>
                    <Image className='img1' src={perez} alt='' />

                    <div>
                      <h2 id='headline' className='headline'>Florentino Perez:'This title will give us energy for a very difficult season'</h2>
                    </div>
                    </span>
                  </Link>
              </div>

              <div className='news'>
                  <Link className='news' href="Eder-Militao-Medical-Report">
                    <span>
                      <Image className='img1' src={militao} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Militao's medical report</h2>
                      </div>
                    </span>
                  </Link>
              </div>
              
            </div>

          </div>

        </div>  

      </div>



      {/* Small Laptop Responsiveness */}

      <div className='hidden md:hidden lg:block xl:hidden'>

        {showDisclaimer && (
          <div style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.459)', zIndex: 1}} className='head_popup'>
            <div style={{ backgroundColor:'rgba(0, 0, 0, 0.459)', padding:'20px', borderRadius:'10px', boxShadow:'0 0 10px rgba(0,0,0,0.2)', zIndex:2}} className='popup'>
              <h2>"This website, <span style={{color:'darkblue'}}>kickoff-santiagobernabeu.netlify.app</span>, is an unofficial fan site and not affiliated with Real Madrid, Santiago Bernabeu, or any related entities. All trademarks and copyrights remain property of their respective owners. This site is for informational and entertainment purposes only."</h2>
              <button style={{border:'2px solid white', borderRadius:'10px'}} onClick={handleAcceptDisclaimer}>Accept</button>
            </div>
          </div>

        )}

        {/* new div */}
        <div style={showDisclaimer ? {filter: 'blur(5px)'} : {}}>

          {/* Navbar */}

          <div className="topnav">

            <div className="navbar">
              <Link href="/">

                <div className="left">
                  <h2>Real Madrid</h2>
                  <Image className='logo' src={logo} alt='' />
                </div>
              </Link>

              <div className="middle">
                <Link href="/">
                  <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>News</h2>
                </Link>
                <Link href="https://www.livescore.com/en/football/team/real-madrid/4009/fixtures/">
                  <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
                </Link>
                <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
                <Link href="Play">
                  <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>Players</h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Stadium */}

          <div>
            <Image src={belligoal} className='stadium' alt='' />
          </div>

          {/* Feedback */}

          <div>
            {notlike === true &&
              <div onClick={handleLike}>
                <p className='feedback_small'>🤍</p>

                <div className='content_small'>
                  <p>more content like this</p>
                </div>
              </div>
            }

            {like === true &&
              <div onClick={handleNotlike}>
                <p className='feedback_small'>💗</p>

                <div className='content_small'>
                  <p>thanks for the likes</p>
                </div>
              </div>
            }
          </div>

          {/* News_Heading */}
          
          <div className='news_heading_small'>
            <h2>News</h2>
          </div>

          {/* News */}

          <div>
            <div className='news_flex'>

              <div className='news'>
                <Link href="Real-madrid-have-been-crowned-2023-2024-Uefa-Champions-League_winners">
                <span>
                  <Image className='img1' src={champions} alt='' />

                  <div>
                    <h2 className='headline'>Real Madrid have been crowned the 2023/2024 Uefa Champions League Winners</h2>
                  </div>
                </span>
                </Link>
              </div>
            
                <div className='news'>
                  <Link href="Mbappe-Leaves-Psg-To-RealMadrid">
                  <span>
                    <Image className='img1' src={david} alt='' />

                    <div>
                      <h2 className='headline'>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>
                    </div>
                  </span>
                  </Link>
                </div>

            </div>

            <div className="news_flex">
              <div className='news'>
                  <Link href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                    <span>
                      <Image className='img1' src={kylian} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Mbappe : PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>
                      </div>
                    </span>
                  </Link>
              </div>

              <div className='news'>
                  <Link href="https://www.realmadrid.com/en-US/news/football/first-team/medical-reports/parte-medico-de-bellingham-11-02-2024">
                    <span>
                    <Image className='img1' src={belligoal} alt='' />

                    <div>
                      <h2 id='headline' className='headline'>Bellingham's medical report</h2>
                    </div>
                    </span>
                  </Link>
              </div>
              
            </div>

            <div className="news_flex">
              <div className='news'>
                  <Link href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/rodrygo-primer-gol-madridista-en-las-dos-ultimas-ligas-18-08-2024">
                    <span>
                    <Image className='img1' src={rodrygo} alt='' />

                    <div>
                      <h2 id='headline' className='headline'>Rodrygo has scored the opening goal for real madrid for the last two seasons</h2>
                    </div>
                    </span>
                  </Link>
              </div>

              <div className='news'>
                  <Link href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                    <span>
                      <Image className='img1' src={mbappe} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Mbappe set to leave PSG for Real Madrid</h2>
                      </div>
                    </span>
                  </Link>
              </div>
              
            </div>

            <div className="news_flex">
              <div className='news'>
                  <Link href="Florentino-Perez-Talks-About-Winning-The-Super-Cup">
                    <span>
                    <Image className='img1' src={perez} alt='' />

                    <div>
                      <h2 id='headline' className='headline'>Florentino Perez:'This title will give us energy for a very difficult season'</h2>
                    </div>
                    </span>
                  </Link>
              </div>

              <div className='news'>
                  <Link href="Eder-Militao-Medical-Report">
                    <span>
                      <Image className='img1' src={militao} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Militao's medical report</h2>
                      </div>
                    </span>
                  </Link>
              </div>
              
            </div>

          </div>

        </div>

      </div>

      {/* Tablet Responsiveness */}

      <div className='hidden md:block lg:hidden xl:hidden'>

        {showDisclaimer && (
          <div style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.459)', zIndex: 1}} className='head_popup'>
            <div style={{ backgroundColor:'rgba(0, 0, 0, 0.459)', padding:'20px', borderRadius:'10px', boxShadow:'0 0 10px rgba(0,0,0,0.2)', zIndex:2}} className='popup'>
              <h2>"This website, <span style={{color:'darkblue'}}>kickoff-santiagobernabeu.netlify.app</span>, is an unofficial fan site and not affiliated with Real Madrid, Santiago Bernabeu, or any related entities. All trademarks and copyrights remain property of their respective owners. This site is for informational and entertainment purposes only."</h2>
              <button style={{border:'2px solid white', borderRadius:'10px'}} onClick={handleAcceptDisclaimer}>Accept</button>
            </div>
          </div>

        )}

        {/* new div */}
        <div style={showDisclaimer ? {filter: 'blur(5px)'} : {}}>
            {/* Navbar */}

            <div className="topnav_tablet">
              
              <div className="navbar_tablet">
                  <Link href="/">

                    <div className="left">
                      <h2>Real Madrid</h2>
                      <Image className='logo' src={logo} alt='' />
                    </div>
                  </Link>

                  <div className="middle">
                    <Link href="/">
                      <h2 onClick={handleClick1} className={click1 === true ? ('tap') : ''}>News</h2>
                    </Link>
                    <Link href="https://www.livescore.com/en/football/team/real-madrid/4009/fixtures/">
                      <h2 onClick={handleClick2} className={click2 === true ? ('tap') : ''}>Fixtures</h2>
                    </Link>
                    <h2 onClick={handleClick3} className={click3 === true ? ('tap') : ''}>Standings</h2>
                    <Link href="Play">
                      <h2 onClick={handleClick4} className={click4 === true ? ('tap') : ''}>Players</h2>
                    </Link>
                  </div>
              </div>
            </div>

            {/* Stadium */}

            <div>
              <Image src={belligoal} className='stadium' alt='' />
            </div>

            {/* Feedback */}

            <div>
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
            </div>

            {/* News Heading */}

            <div className='news_heading_tablet'>
              <h2>News</h2>
            </div>

            {/* News */}

            <div>

              <div className="news_flex_tablet">
                
              <div className='news_tablet'>
                <Link href="Real-madrid-have-been-crowned-2023-2024-Uefa-Champions-League_winners">
                  <Image className='img1' src={champions} alt='' />

                  <div className='headline'>
                    <h2>Real Madrid have been crowned the 2023/2024 Uefa Champions League Winners</h2>
                  </div>
                </Link>
              </div>

              <div className='news_tablet'>
                <Link href="Mbappe-Leaves-Psg-To-RealMadrid">
                  <span>
                    <Image className='img1' src={david} alt='' />

                    <div className='headline'>
                      <h2>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>
                    </div>
                  </span>
                </Link>
              </div>
              
              </div>

              <div className="news_flex_tablet">
                <div className='news_tablet'>
                    <Link href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                      <span>
                        <Image className='img1' src={kylian} alt='' />

                        <div>
                          <h2 id='headline' className='headline'>Mbappe : PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>
                        </div>
                      </span>
                    </Link>
                </div>

                <div className='news_tablet'>
                    <Link href="https://www.realmadrid.com/en-US/news/football/first-team/medical-reports/parte-medico-de-bellingham-11-02-2024">
                      <span>
                      <Image className='img1' src={belligoal} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Bellingham's medical report</h2>
                      </div>
                      </span>
                    </Link>
                </div>
                
              </div>

              <div className="news_flex_tablet">
                <div className='news_tablet'>
                    <Link href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/rodrygo-primer-gol-madridista-en-las-dos-ultimas-ligas-18-08-2024">
                      <span>
                      <Image className='img1' src={rodrygo} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Rodrygo has scored the opening goal for real madrid for the last two seasons</h2>
                      </div>
                      </span>
                    </Link>
                </div>

                <div className='news_tablet'>
                    <Link href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                      <span>
                        <Image className='img1' src={mbappe} alt='' />

                        <div>
                          <h2 id='headline' className='headline'>Mbappe set to leave PSG for Real Madrid</h2>
                        </div>
                      </span>
                    </Link>
                </div>
                
              </div>

              <div className="news_flex_tablet">
                <div className='news_tablet'>
                    <Link href="Florentino-Perez-Talks-About-Winning-The-Super-Cup">
                      <span>
                      <Image className='img1' src={perez} alt='' />

                      <div>
                        <h2 id='headline' className='headline'>Florentino Perez:'This title will give us energy for a very difficult season'</h2>
                      </div>
                      </span>
                    </Link>
                </div>

                <div className='news_tablet'>
                    <Link href="Eder-Militao-Medical-Report">
                      <span>
                        <Image className='img1' src={militao} alt='' />

                        <div>
                          <h2 id='headline' className='headline'>Militao's medical report</h2>
                        </div>
                      </span>
                    </Link>
                </div>
                
              </div>
              
            </div>

        </div>
      </div>

      {/* Phone Responsiveness */}

      <div className='block md:hidden lg:hidden xl:hidden'>

        {showDisclaimer && (
          <div style={{ width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.459)', zIndex: 1}} className='head_popup_phone'>
            <div style={{ backgroundColor:'rgba(0, 0, 0, 0.459)', padding:'20px', borderRadius:'10px', boxShadow:'0 0 10px rgba(0,0,0,0.2)', zIndex:2}} className='popup_phone'>
              <h2>"This website, <span style={{color:'darkblue'}}>kickoff-santiagobernabeu.netlify.app</span>, is an unofficial fan site and not affiliated with Real Madrid, Santiago Bernabeu, or any related entities. All trademarks and copyrights remain property of their respective owners. This site is for informational and entertainment purposes only."</h2>
              <button style={{border:'2px solid white', borderRadius:'10px'}} onClick={handleAcceptDisclaimer}>Accept</button>
            </div>
          </div>

        )}

        {/* new div */}
        <div style={showDisclaimer ? {filter: 'blur(5px)'} : {}}>
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

          <Image className='stadium_phone' src={belligoal} alt='' />

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

          {/* News Heading */}
          <div className="news_heading_phone">
            <h2>News</h2>
          </div>

          {/* News */}

          <div className="news_phone">
            <Link href="Real-madrid-have-been-crowned-2023-2024-Uefa-Champions-League_winners">
              <div className="left_news_phone">
                <Image className='news_img_phone' src={champions} />

                <div className="news_text_phone">
                  <h2>Real Madrid have been crowned the 2023/2024 Uefa Champions League winners</h2>
                </div>
              </div>
            </Link>

            <Link href="Mbappe-Leaves-Psg-To-RealMadrid">
            <div className="right_news_phone">
              <Image className='news_img_phone' src={david} />

              <div className="news_text_phone">
                <h2>David Beckham the Inter Miami manager has broken silence on Mbappes move to Real Madrid</h2>
              </div>
            </div>
            </Link>
          </div>

          <div className="news_phone">
            <div className='left_news_phone'>
                <Link href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                  <span>
                    <Image className='news_img_phone' src={kylian} alt='' />

                    <div className='news_text_phone'>
                      <h2 id='headline' className='headline'>Mbappe : PSG do not want me in the squad anymore, it was Luis Enrique that saved me</h2>
                    </div>
                  </span>
                </Link>
            </div>

            <div className='right_news_phone'>
                <Link href="https://www.realmadrid.com/en-US/news/football/first-team/medical-reports/parte-medico-de-bellingham-11-02-2024">
                  <span>
                  <Image className='news_img_phone' src={belligoal} alt='' />

                  <div className='news_text_phone'>
                    <h2 id='headline' className='headline'>Bellingham's medical report</h2>
                  </div>
                  </span>
                </Link>
            </div>
              
          </div>

          <div className="news_phone">
              <div className='left_news_phone'>
                  <Link href="https://www.realmadrid.com/en-US/news/football/first-team/latest-news/rodrygo-primer-gol-madridista-en-las-dos-ultimas-ligas-18-08-2024">
                    <span>
                    <Image className='news_img_phone' src={rodrygo} alt='' />

                    <div className='news_text_phone'>
                      <h2 id='headline' className='headline'>Rodrygo has scored the opening goal for real madrid for the last two seasons</h2>
                    </div>
                    </span>
                  </Link>
              </div>

              <div className='right_news_phone'>
                  <Link href="https://www.goal.com/en-ng/lists/kylian-mbappe-luis-enrique-never-play-for-psg-again/bltb77e3f6430ffb58d#:~:text=During%20an%20interaction%20with%20reporters,and%20Luis%20Campos%20saved%20me.">
                    <span>
                      <Image className='news_img_phone' src={mbappe} alt='' />

                      <div className='news_text_phone'>
                        <h2 id='headline' className='headline'>Mbappe set to leave PSG for Real Madrid</h2>
                      </div>
                    </span>
                  </Link>
              </div>
              
          </div>

          <div className="news_phone">
            <div className='left_news_phone'>
                <Link href="Florentino-Perez-Talks-About-Winning-The-Super-Cup">
                  <span>
                  <Image className='news_img_phone' src={perez} alt='' />

                  <div className='news_text_phone'>
                    <h2 id='headline' className='headline'>Florentino Perez:'This title will give us energy for a very difficult season'</h2>
                  </div>
                  </span>
                </Link>
            </div>

            <div className='right_news_phone'>
                <Link href="Eder-Militao-Medical-Report">
                  <span>
                    <Image className='news_img_phone' src={militao} alt='' />

                    <div className='news_text_phone'>
                      <h2 id='headline' className='headline'>Militao's medical report</h2>
                    </div>
                  </span>
                </Link>
            </div>
            
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default HomeSectionOne
