import { useState } from 'react'
import './App.css'
import 'animate.css';
import Navigation from './component/Navigation'
import destopImage from './assets/image-hero-desktop.png'
import mobileImage from './assets/image-hero-mobile.png'
import databiz from './assets/client-databiz.svg'
import audiophile from './assets/client-audiophile.svg'
import meet from './assets/client-meet.svg'
import maker from './assets/client-maker.svg'
import { useMediaQuery } from 'react-responsive'


function App() {
  const desktopScreen = useMediaQuery({query:'(min-width:1440px)'})

  const [mainNav , setMainNav] = useState(false)
  const onNoffMainNav =()=> setMainNav(!mainNav)

  return (
    <div className='App'>
      <div className={mainNav? 'black-on' : 'black-off'}></div>
      <header>
        <Navigation mainNav={mainNav} setMainNav={setMainNav} onNoffMainNav={onNoffMainNav}/>
      </header>
      <main>
        <div className='main-image'>
          <img src={desktopScreen ? destopImage : mobileImage} alt='image-hero' width='100%'/>
        </div>
        <div className='main-detail'>
          <h1>Make remote work</h1>
          <p>Get your team in sync, no matter your location. 
            Streamline processes, create team rituals, 
            and watch productivity soar. </p>
          <button className='learn-more-button'>Learn more</button>
          <div className='footer'>
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </div>
      </main>

    </div>
  )
}

export default App
