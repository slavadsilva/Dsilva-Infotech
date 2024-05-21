import { Link, NavLink} from 'react-router-dom'
import './ServiceStyle.css';

export const Services = () => {
  return (
    <div>
      <div className='service-rows'>
        <div className='service-columns'>
          <div className='service-cards'>
            <h2>Web Development</h2>
            <p>In the dynamic realm of commerce, establishing a robust online footprint is indispensable for business vitality. This is where adept web development comes into play, offering the means to create websites that captivate, engage, and convert visitors into loyal patrons. <br />
Irrespective of scale, businesses stand to gain manifold from professional web development endeavors. A meticulously crafted website serves as a digital flagship, instantly shaping perceptions and beckoning potential clientele. <br />
Expertly curated web development ensures not just aesthetic appeal but also seamless user experiences, where navigation feels instinctive and interactions are frictionless. Through strategic design elements and functional prowess, your offerings are presented with utmost clarity, driving conversions with ease.</p>
          <button><NavLink to="/contact">Let's Discuss</NavLink></button>
          </div>
        </div>
        <div className='service-columns'>
          <div className='service-cards'>
            <h2>Mobile App Development</h2>
            <p> the smartphone has emerged as an indispensable tool for consumers globally. Leveraging the capabilities of mobile app development can propel your business into the hands of millions, offering unparalleled access and engagement opportunities. <br />

Creating a bespoke mobile app isn't just about convenience—it's about forging meaningful connections with your audience. Whether you're delivering services, products, or content, a thoughtfully crafted app serves as a direct conduit for interaction, fostering customer loyalty and satisfaction. <br />

Through meticulous development, your app becomes more than a mere utility; it embodies your brand essence. With polished design, intuitive navigation, and flawless functionality, user experiences are elevated, driving sustained engagement and loyalty. <br />
 <br />
 </p>
<button><NavLink to="/contact">Let's Discuss</NavLink></button>
          </div>
        </div>
        <div className='service-columns'>
          <div className='service-cards'>
            <h2>IOT Development</h2>
            <p>In this age of interconnected devices, IoT (Internet of Things) development emerges as a pivotal force, revolutionizing our relationship with technology. From smart homes to industrial automation, IoT's potential is boundless, reshaping our daily interactions with the digital world. <br />

IoT development involves building intelligent systems that enable devices to communicate effortlessly, exchanging data to perform tasks autonomously or respond to user commands. Whether it's monitoring home security, optimizing energy consumption, or revolutionizing healthcare, IoT solutions empower us to live smarter, safer, and more efficient lives. <br />
</p>
<button><NavLink to="/contact">Let's Discuss</NavLink></button>
          </div>
        </div>
        <div className='service-columns'>
          <div className='service-cards'>
            <h2>Game Development</h2>
            <p>In the realm of digital entertainment, game development stands as a beacon of creativity and innovation, offering immersive experiences that captivate players and spark imagination. <br />

Game development is a collaborative journey, blending artistry, technology, and storytelling to bring concepts to life. From indie studios to major players, developers work tirelessly through conceptualization, prototyping, coding, and testing to create interactive masterpieces.</p>
<button><NavLink to="/contact">Let's Discuss</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
}