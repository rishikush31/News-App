import { useState, useEffect } from 'react';
import './Content.css'
import NewsBox from './NewsBox';
function Content() {
    const [data, setData] = useState([]);
    const [qy, setQy] = useState("in");
    const fun = (e) => {
        e.preventDefault();
        let gp=(document.getElementsByClassName("textip")[0]===undefined) ? "in":document.getElementsByClassName("textip")[0].value;
        console.log(typeof(gp));
        setQy(gp);
        (async () => {
            const res = await fetch(`https://gnews.io/api/v4/top-headlines?q=${qy}&apikey=0882b34381a84633c123e829a0266900`);
            const da = await res.json();
            setData(da.articles);
            console.log(data);
        })();
        console.log(qy);
    }
    const st = (e) => {
        e.preventDefault();
        setQy(e.target.value);
    }
    useEffect((qy) => {
        (async () => {
            const res = await fetch(`https://gnews.io/api/v4/top-headlines?q=${qy}&apikey=0882b34381a84633c123e829a0266900`);
            const da = await res.json();
            setData(da.articles);
        })();
    }, []);
    let defa=[{"img":"https://media.cnn.com/api/v1/images/stellar/prod/150325082132-social-gfx-breaking-news.jpg?q=x_2,y_0,h_898,w_1596,c_crop/w_800","author":"Un-revealed"}];
    
    return (
        <div className="content">
            <div className="header">
                <div className='Heading'><h1>Hey there , This is your very own News site</h1></div>
                <form className='form1' onSubmit={fun}>
                    <span>Search with any keyword  :  </span>
                    <input type="text" className="textip" placeholder='search' onChange={st} />
                    <button className='btn1' type='submit'>Search</button>
                </form>
            </div>
            <div className="newsarea">
                {
                data.map(news => <NewsBox
                    image={(!(news.image===null))?news.image:defa[0].img}
                    author={(!(news.source.name===null))?news.source.name:defa[0].author}
                    title={news.title}
                    description={news.description}
                    story={news.content}
                    publishedAt={news.publishedAt}
                    url={news.url}></NewsBox>)
                }
            </div>
            {/* </div> */}
        </div>
    );
}

export default Content;