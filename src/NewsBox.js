import './News_box.css';
function NewsBox({ image, author, title, description, story, publishedAt, url }) {
    return (
        <div className="column">
            <div className="newsimg">
                <img src={image} alt="" />
            </div>
            <div className="con">
                <h2 className='title'>{title}</h2>
                <p className="description">{story}</p>
            </div>
            <div className="foot">
                <h3 className="author">By-{author}</h3>
                <a href={url} className="footbtn" target="_blank" rel="noopener noreferrer">
                    <button className='btn'>read</button>
                </a>
            </div >
        </div >
    );
}

export default NewsBox