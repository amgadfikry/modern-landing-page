import './features.css'

const featList =[
    {
        id:1,
        title:"Improving end distrusts instantly ",
        info:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
        id:2,
        title:"Become the tended active",
        info:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
        id:3,
        title:"Message or am nothing",
        info:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
        id:4,
        title:"Really boy law county",
        info:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }
]

function Features() {
    return (  
        <div className="features-section">
            <section className='features container'>
                <div className="heading">
                    <h3 className='text-color' >The Future is Now and You Just Need To Realize It.
                        Step into Future Today & Make it Happen.
                    </h3>
                    <p className='text-color' >Request Early Access to Get Started</p>
                </div>
                <div className="feat-cont">
                    {featList.map(el=>{
                        return(
                            <article className='feat' key={el.id}>
                                <h4 className='h4-color' >{el.title}</h4>
                                <p>{el.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Features;