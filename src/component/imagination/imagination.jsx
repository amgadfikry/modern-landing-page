import './imagination.css'
import image from '../../assets/possibility.png'

function Imagination() {
    return (  
        <section className='imagine container'>
            <div className="image">
                <img src={image} alt="woman with vr glasses" />
            </div>
            <article className="content">
                <p className="above">Request Early Access to Get Started</p>
                <h3 className='text-color'>The possibilities are beyond your imagination</h3>
                <p className='para'>Yet bed any for travelling assistance indulgence unpleasing.
                    Not thoughts all exercise blessing. Indulgence way everything joy alteration
                    boisterous the attachment. Party we years to order allow asked of.
                </p>
                <p className="below text-color">Request Early Access to Get Started</p>
            </article>
        </section>
    );
}

export default Imagination;