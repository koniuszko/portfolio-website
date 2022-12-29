import { Link } from 'react-router-dom';

import Aside from '../../components/Aside';
import '../../style/Insure.css'

import manageScreenshot1 from '../../images/detail/mobile/image-insure-preview-1@2x.jpg'
import manageScreenshot2 from '../../images/detail/mobile/image-insure-preview-2@2x.jpg'

import leftArrow from '../../images/icons/arrow-left.svg'
import rightArrow from '../../images/icons/arrow-right.svg'

function Insure() {
    return ( 
    <>
    <div className="detail_wrapper">
        <div className="detail_insure"></div>
    <div className="detail_description">
        <span className="line"></span>
        <h2 className="secondary_title">Insure</h2>
        <p className="description">This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.</p>
        <p className="green_text">Interaction Design / Front End Development</p>
        <p className="green_text">HTML / CSS / JS</p>
        <a href="/"><button className="secondary_button">visit website</button></a>
        <span className="line"></span>
    </div>
    <div className="detail_project_background">
        <h2 className="secondary_title">Project Background</h2>
        <p className="description">This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
        <h2 className="secondary_title">Static Previews</h2>
        <img className='screenshot' src={manageScreenshot1} alt="static-screenshot-1" />
        <img className='screenshot' src={manageScreenshot2} alt="static-screenshot-2" />
     </div>
    <div className="sites_nav">
                <div className="swipe_left">
            <Link to="/bookmark" className='nav_link'><img className='arrow' src={leftArrow} alt="left-arrow-icon" /></Link> 
            <h2 className="secondary_title">Bookmark</h2>
            <p className="grey">Previous Project</p>
        </div>
        <div className="center_line"></div>
        <div className="swipe_right">
            <Link to='/fylo' className='nav_link'><img className='arrow' src={rightArrow} alt="right-arrow-icon" /></Link> 
            <h2 className="secondary_title">Fylo</h2>
            <p className="grey">Next Project</p>
        </div>
            </div>
    </div>    
    <Aside/>
    </>
     );
}

export default Insure;