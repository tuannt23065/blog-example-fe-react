import React from "react";
import './ArticleItem.css';
import imgBlog1 from '../../assets/images/blog-1.jpg';
import johnDoe from '../../assets/images/john-doe.png';
import Button from "../Shared/Button";

class ArticleItem extends React.Component {

    showCategoryButton = () => {
        if ( this.props.categoryButton )
            return(
                <ul className="article-item__categories">
                    <li><Button classButton="btn-category" textButton="News" /></li>
                    <li><Button classButton="btn-category" textButton="News" /></li>
                </ul>
            );
        return('');
    }

    showDescription = () => {
        if( this.props.showDesc )
            return(
                <p className="article-item__desc">Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to…</p>
            );
        return ('');
    }

    render() {
    
        return(
            <>
                <article className={this.props.classNameArticleItem}>
                    <div className="article-item__thumbnail">
                        <a href="/">
                        <img src={imgBlog1} alt="" />
                        </a>
                    </div>
                    <div className="article-item__content">
                        <this.showCategoryButton />
                        <h2 className="article-item__title">
                            <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">Only Someone Who's Seen The Mummy Will
                            Pass This</a>
                        </h2>
                        <this.showDescription />
                        <div className="article-item__info">
                        <div className="article-item__author-image">
                            <a aria-label="John Doe" href="/">
                            <img src={johnDoe} alt="john-doe" />
                            </a>
                        </div>
                        <div className="article-item__info-right">
                            <div className="article-item__author-name">
                            <a href="/"><strong>John Doe</strong></a>
                            </div>
                            <div className="article-item__datetime">
                            <div className="date">June 02, 2020</div>
                            <div className="time">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" className="css-uk6cul" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                </path>
                                </svg>
                                1 min</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </article>
            </>
        );
    }
}

export default ArticleItem;