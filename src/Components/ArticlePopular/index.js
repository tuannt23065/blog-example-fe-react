import React from "react";
import './ArticlePopular.css';
import MainTitle from "../Shared/MainTitle";
import Button from "../Shared/Button";
import ArticleList from "../ArticleList";

class ArticlePopular extends React.Component {
    render() {
        return(
            <>
                <div className="popular-news section bg-white-blue">
                    <div className="tcl-container">
                        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                            <MainTitle mainTitle="Popular Articles" />
                            <Button classButton="btn-default" textButton="View More" />
                        </div>
                        <div className="popular-news__list spacing">
                            <div className="popular-news__list--left">
                                <div className="popular-news__list--row">
                                    <ArticleList 
                                        classNameArticleWrap="popular-news__list--card"
                                        classNameArticleItem="article-item style-card"
                                        countItems="2"
                                        categoryButton={true}
                                        showDesc={true}
                                    />
                                </div>
                            </div>
                            <div className="popular-news__list--right">
                                <div className="popular-news__list--row">
                                    <ArticleList 
                                        classNameArticleWrap="popular-news__list--card"
                                        classNameArticleItem="article-item style-card style-row"
                                        countItems="1"
                                        categoryButton={true}
                                        showDesc={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ArticlePopular;