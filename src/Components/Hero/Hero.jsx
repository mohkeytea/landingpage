import './Hero.css'
import { FaArrowRight } from 'react-icons/fa6'
import { FaPlay } from 'react-icons/fa6'
import { FaPause } from 'react-icons/fa6'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
        <div className="hero-explore">
            <p>Get Started</p>
            <FaArrowRight/>
        </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(1)}className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(2)}className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
            <button onClick={()=>setPlayStatus(!playStatus)}>{ playStatus?<FaPause/>:<FaPlay/>}</button>
            <p>see the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
