import './blog.css'

const blogList =[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },
    {
        id:4,
    },
    {
        id:5,
    }
]

function Blog() {
    return (  
        <section className='blog-section container'>
            <h3 className='text-color'>A lot is happening, We are blogging about it.</h3>
            <div className="blog-cont">
                {blogList.map(el=>{
                    return(
                        <div className={`blog ${"blog"+el.id}`} key={el.id}>
                            <div className="image">
                                <img src={require(`../../assets/blog0${el.id}.png`)} alt="blog photo" />
                            </div>
                            <div className="content">
                                <p className="date">Sep 26, 2022</p>
                                <h5>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
                                <p className="more">Read Full Article</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Blog;