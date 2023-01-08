import logo from '../../assets/logo.svg'
import './footer.css'

function Footer() {
    const dateNow = new Date().getFullYear()
    return ( 
        <footer className='footer-section'>
            <div className="footer container">
                <h3 className='text-color'>Do you want to step in to the future before others</h3>
                <button className='btn'>Request Early Access</button>
                <div className="content">
                    <div className="logo content-item">
                        <img src={logo} alt="logo" />
                        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="list content-item">
                        <h5>Links</h5>
                        <a href="./" className="list-item">Overons</a>
                        <a href="./" className="list-item">Social Media</a>
                        <a href="./" className="list-item">Counters</a>
                        <a href="./" className="list-item">Contact</a>
                    </div>
                    <div className="list content-item">
                        <h5>Company</h5>
                        <a href="./" className="list-item">terms & Conditions</a>
                        <a href="./" className="list-item">Privacy Policy</a>
                        <a href="./" className="list-item">Contact</a>
                    </div>
                    <div className="list content-item">
                        <h5>Get in touch</h5>
                        <a href="./" className="list-item">Crechterwoord K12 182 DK Alknjkcb</a>
                        <a href="./" className="list-item">085-132567</a>
                        <a href="./" className="list-item">info@payme.net</a>
                    </div>
                </div>
                <p className="copyrights">© {dateNow} GPT-3. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;