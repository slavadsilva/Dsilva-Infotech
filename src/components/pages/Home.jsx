import { Link, NavLink} from 'react-router-dom'
import './Style.css';
import dsilva from "./Images/dsilva.png";
import welfound from "./Images/welfound.png";
import highriding from "./Images/highriding.png";
import employee from "./Images/employee.jpeg";
import mySelf from './Images/myself.png';

export const Home = () => {
  return (
    <div>
      <header>
        <div className='homeHeader'>
          Start unloacking advantages.
        </div>
        <hr />
        <div className='hometext'>
        We prioritize commerce in every technology-driven experience, leveraging data and action-oriented design to generate significant value for your brand
        </div>
        <button><NavLink to="/services">Let's Discuss</NavLink></button>
        </header>
        <br />
        <div className='devTitle'><h1>Custom Software Development</h1>
        <br/>
        <h1>Take Your Business To Next Level</h1></div>
      <div className='row'>
        <div className='column'>
        <NavLink to="/services">
          <div className='card'>
            <h3>Web Development</h3>
            <p>Enterprise Level, Functional & Feature Rich Websites</p>
          </div>
          </NavLink>
        </div>
        <div className='column'>
        <NavLink to="/services">
          <div className='card'>
            <h3>Mobile App Development</h3>
            <p>Custom iOS, Android & Cross Platform App Development</p>
          </div>
          </NavLink>
        </div>
        <div className='column'>
        <NavLink to="/services">
          <div className='card'>
            <h3>IOT Development</h3>
            <p>Embark on a journey of heightened efficiency, innovation, and expansion.</p>
          </div>
          </NavLink>
        </div>
        <div className='column'>
        <NavLink to="/services">
          <div className='card'>
            <h3>Game Development</h3>
            <p>Develop games for endless entertainment.</p>
          </div>
          </NavLink>
        </div>
      </div>
      <div className='portfolio'>
        <h1>Our Portfolio</h1>
        <div className='row'>
        <div className='column'>
          <div className='img'>
            <img src={dsilva} />
            <div className='content'>
              <h2>Photography</h2>
              <p>Capturing Life's Moments Through a Lens</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='img'>
            <img src={welfound} />
            <div className='content'>
              <h2>Tourism</h2>
              <p>Unveil the World's Wonders</p>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='img'>
            <img src={highriding} />
            <div className='content'>
              <h2>Car Blog</h2>
              <p>Premier Destination for Automotive Insights</p>
            </div>
          </div>
        </div>
        </div>  
      </div>
      <div className='containerChoose'>
        <div className='contentChoose'>
          <h1>Why to choose us?</h1>
          <p>We excel in crafting state-of-the-art software solutions tailored to your unique business requirements. With a focus on innovation, we harness the latest technology trends to drive growth and efficiency for your enterprise. Our customized approach ensures that every solution is perfectly aligned with your objectives, irrespective of your industry.<br /><br /> Experience seamless integration with your existing systems, minimizing disruption and maximizing productivity. Count on our responsive support team for assistance at every step of the way. Choose Dsilva for expert technology solutions that propel your business to new heights.</p>
          </div>
          <div className='image'>
            <img src={employee} alt="" />
          </div>
      </div>
      <div className='myContainer'>
        <div className='myContent'>
          <h2>Speak to an expert</h2>
          <br /><br />
        We envision a world where technology intertwines people, data, and things, fostering connectivity like never before. Especially in today's landscape, the essence of connection is paramount for businesses. We are dedicated to aiding you in sustaining and evolving your operational methodologies. Share your aspirations with us, and together, we'll navigate the path towards achieving remarkable feats.
        <br /><br />
        <a href='tel: +9130598444'>
        <button className='myButton'>Speak to our expert</button>
        </a>
        </div>
        <div className='myImage'>
          <img src={mySelf} alt="" />
        </div>
      </div>

      <div className='video-responsive'>
        <h1>YouTube Gaming Channel</h1>
      <iframe width="80%" height="300px" src="https://www.youtube.com/embed/wOGWeSx908g?si=Mv3rfkSOGe9PLAUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      </div>
    </div>
  );
}