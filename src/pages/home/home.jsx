import './home.css'
import Carousel from "../../components/carousel/Carousel"
import pic1 from "../../components/carousel/assets/1.png"
import pic2 from "../../components/carousel/assets/2.png"
import pic3 from "../../components/carousel/assets/3.png"

function Home() {

    const slides = [
        pic1,
        pic2,
        pic3,
      ]
    return(
        <div className='home-wrapper'>
            <h1 className='header'>Resume Portfolio</h1>
            <h3 className='header'>Nathan Gorsch</h3>
            <div className="flex-container">
            <div className="flex-item-left">
            <Carousel slides={slides} controls indicators interval={6000} autoPlay={true}/>
                    
                    <h4>Nathan Gorsch</h4>
                    <p>Junior Software Engineer</p>
                </div>
                <div className="flex-item-right">
                    <h3>About Me</h3>

                    <p>
                    Since I’m on a computer for most of my days duration I try to balance this out with a lot of physical and outdoor activities. I really enjoy bouldering and rock climbing.
                    Also, when I’m visiting my family during the warmer months of the year, we tend to go water skiing 
                    which is by far my favorite outdoor thing to do I also love going for a good hike weather permitting of course.
                    </p>
                    <p>
                    When I’m not outdoors ill usually be back on my computer either gaming, upskilling or just watching something hosted off my plex server. 
                    My favorite gaming corporation would be Riot Games, they held my attention for a long time and I’m generally a big fan of how they design, develop and communicate with their player base. 
                    But I always have a special place in my heart for smaller more indie developers. This might be due to my pipe dream of being an indie developer myself, 
                    but this might be later in life after a successful career in software engineering. My current favorite indie game would have to be Hollow Knight developed by Team Cherry. 
                    </p>
                    
                    <h3>My values</h3>
                    <ul className='list-left'>
                        <li><p>Alturism</p></li>
                        <li><p>Dependability</p></li>
                        <li><p>Sustainability</p></li>
                        <li><p>Family</p></li>
                        <li><p>Personal Growth</p></li>
                    </ul>

                    <ul className='right-list'>
                        <li><p>Accountability</p></li>
                        <li><p>Teamwork</p></li>
                        <li><p>Consistency</p></li>
                        <li><p>Deadlines</p></li>
                        <li><p>Communication</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;