import Navbar from "../navbar/navbar";
import './header.css'
import image from '../../assets/ai.png'
import people from '../../assets/people.png'

function Header() {
    return (  
        <div className="header">
            <Navbar />
            <main className="main container">
                <div className="content">
                    <h1 className="text-color">Let's Build Something amazing with GPT-3 OpenAI</h1>
                    <p>
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
                    blessing. Indulgence way everything joy alteration boisterous the attachment. Party we
                    years to order allow asked of.
                    </p>
                    <form action="post">
                        <input type="text" placeholder="Your Email Address" />
                        <button type="submit" className="btn colored-btn">Get Started</button>
                    </form>
                    <div className="people">
                        <img src={people} alt="list of people" />
                        <p>1,600 people requested access a visit in last 24 hours</p>
                    </div>
                </div>
                <div className="image">
                    <img src={image} alt="ai image" />
                </div>
            </main>
        </div>
    );
}

export default Header;