import React from "react";
import "./Card.css"
import img from "./assets/profile.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Card = () => {
    return <div>
    <div className='card-container'>
    <img src={img} alt="Card Image" className='card-img'/>
            <div className='content-container'> 
            <h1 className='card-title' >Laura Pinilla</h1>
            <h3 className='card-subtitle'>Product Designer</h3>
            <a className='card-link'href="https://aurainternational.online/portafolio/">laurapinilla.portfolio</a>
            <div className='btns'>
                    <button className='btn1' onClick={() => window.location.href = 'mailto:lauram.pinilla@gmail.com'}>
                        <i className="fas fa-envelope"></i>Email</button>
                    <button className='btn2' onClick={() => window.location.href = 'https://www.linkedin.com/in/laurapinilla20/'}>
                        <i className="fab fa-linkedin"></i>LinkedIn</button>

            </div>
        </div>
        <h2 className='card-subtitle-body'>About</h2>
        <p className='card-description'>Bilingual Digital Designer (C1) with experience in Web Design UX/UI and Strategic Marketing. Proficient in Adobe Suite, Microsoft Suite, Canva, Sketchup, Figma, Wordpress, Shopify, and methodologies like Design Thinking and Human-Centered Design. </p> 
        <h2 className='card-subtitle-body'>Interes</h2>
        <p className='card-description' >Passionate about exploring new cultures and personal growth, I’m dedicated to practices like yoga and spirituality. I believe in mindfulness and self-discovery as key to professional and personal success. </p>
   
       <footer className="footer">
        <a href="https://www.linkedin.com/in/laurapinilla20/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/laurapinillar20/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com/Laurapinilla20" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </div>


    </div>
}