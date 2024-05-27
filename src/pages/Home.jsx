import Navbar from "../components/Navbar";
import space from '../assets/Space.mp4';
import '../css/home.css';
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="video-container">
              
                <video src={space} type="video/mp4" autoPlay loop muted>
                    Sorry, your browser doesn't support videos.
                </video>
                <div className="typewriter">
                     <p>MISSION
	The message that the Al Irshad Charity & Development Association believes in is to increase the participation & contribution of marginalized societal groups, especially women, in economic & social activity.
	We seek to achieve this mission by developing skills & capabilities through various training & courses & providing various services such as loans & others for the purpose of achieving self-sufficiency, sponsoring orphans, students & the poor, providing drinking water by digging surface, artesian & semi-artesian wells & assisting the disabled.
<hr />\
	Implementing geographically and environmentally feasible development projects, to build the community’s capacity by creating integration and cooperation.  
</p>
                    <h2>ACTION, SERVICE, HOPE FOR AIDS... </h2>
                </div>
            </div>
            <Landing />
            <Initiatives />
            <Funds />
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}