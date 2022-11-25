import React from 'react';
import Header from './components/Header';
import Details from './components/Details';
import Hero from './components/Hero';
import TextComp from './components/TextComp';
import Card from './components/Card';
import mapimg from './components/images/map.svg'
import ImgGroup from './components/ImgGroup';
import Feedback from './components/Feedback';
import user1 from './components/images/user1.png';
import user2 from './components/images/user2.png';
import user3 from './components/images/user3.png';
import "./index.css";
import Subscribe from './components/Subscribe';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Details />
      <Hero/>
      <TextComp head={"Choose Your Plan"} para={"Let's choose the package that is best for you and explore it happily and cheerfully."}/>
      <Card />
      <TextComp head={"Huge Global Network of Fast VPN"} para={"See LaslesVPN everywhere to make it easier for you when you move locations."}/>
      <img className='map-img' src={mapimg} alt="map-img" />
      <ImgGroup />
      <TextComp head={"Trusted by Thousands of Happy Customers"} para={"These are the stories of our customers who have joined us with great pleasure when using this crazy feature."}/>
      <div className='feedback-sections'>
        <Feedback photo={user1} name={"Vizeh Robert"} add={"Warsaw,Poland"} rate={"4.5"} text={'"Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN is best."'} />
        <Feedback photo={user2} name={"Yessica Christy"} add={"Shanksy, China"} rate={"4.5"} text={'"Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN is best."'} />
        <Feedback photo={user3} name={"Kim Young Jou"} add={"Seoul,South Korea"} rate={"4.5"} text={'"Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN is best."'} />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
