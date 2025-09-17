import React from 'react'
import { IoFastFoodOutline, IoMailOutline } from "react-icons/io5";
import { FaRegCheckCircle } from "react-icons/fa";
import '../styles/NewsLetter.css'

const NewsLetter = () => {

  const [subscribe, setSubscribe] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubscribe = () => {
    setEmail('');
    setSubscribe(true);
    setTimeout(() => {
      setSubscribe(false);
    }, 5000);
  }

  return (
    <div className='newsletter-container'>

      <div className="newsletter-body">
        <div className="newsletter-text">
            <IoFastFoodOutline className='food-icon' />
            <span>
              <h4>Unlock exclusive recipes, and foodie delights straight to your inbox.</h4>
              <p>Stay ahead in the kitchen with weekly culinary inspiration, expert cooking techniques, and curated meal ideas. Subscribe to our newsletter and elevate your cooking skills with confidence</p>
            </span>
        </div>
        <div className="newsletter-input-body">
            <div className="newsletter-input">
              <span>
                  <IoMailOutline className='mail-icon' />
                  <input type="text" placeholder='Your email address' onChange={(e)=> setEmail(e.target.value)} value={email} />
              </span>
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        {subscribe && 
            <p>Thanks for subscribing!-- Welcome for SD 🍗Yummy Foodes🥄!!!</p>
        }
            <p>
                <FaRegCheckCircle className='tick-icon' />
                No spam here—just delicious ideas to inspire your cooking! Join us today!
            </p>
        </div>
      </div>

    </div>
  )
}

export default NewsLetter