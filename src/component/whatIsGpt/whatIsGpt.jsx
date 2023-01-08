import './whatIsGpt.css'

const articleList=[
    {
        id:1,
        title:"Chatbots",
        info:"We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
        id:2,
        title:"Knowledgebase",
        info:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
        id:3,
        title:"Education",
        info:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    }
]

function WhatIsGpt() {

    return (  
        <section className="gpt container">
            <article className="define">
                <h4 className='h4-color' >What is GPT-3</h4>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.
                His defective nor convinced residence own. Connection has put impossible own apartments
                boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance 
                to on by.</p>
            </article>
            <div className="heading">
                <h3 className='text-color'>The possibilities are beyond<br></br> your imagination</h3>
                <p className='text-color'>Explore The Library</p>
            </div>
            <div className="library-cont">
                {articleList.map(el=>{ 
                    return(
                        <article className="library" key={el.id}>
                            <h4 className='h4-color' >{el.title}</h4>
                            <p>{el.info}</p>
                        </article>
                )})}
            </div>
        </section>
    );
}

export default WhatIsGpt;