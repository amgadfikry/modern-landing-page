import './companies.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlas from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

function Companies() {
    return (
        <section className="companies container">
            <img src={google} alt="google logo" />
            <img src={slack} alt="slack logo" />
            <img src={atlas} alt="atlas logo" />
            <img src={dropbox} alt="dropbox logo" />
            <img src={shopify} alt="shopify logo" />
        </section>
    );
}

export default Companies;