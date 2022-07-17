import React from "react";
import './ArticleLatest.css';
import MainTitle from "../Shared/MainTitle";
import ArticleList from "../ArticleList";

class ArticleLatest extends React.Component {
    
    render() {
        return(
            <div className="latest-news section">
			    <div className="tcl-container">
                    {/* Main Title */}
                    <div className="main-title spacing">
                        <MainTitle mainTitle="Latest Articles" />
                    </div>
                    <div className="latest-news__list spacing">
                        <ArticleList 
                            classNameArticleWrap="latest-news__card" 
                            classNameArticleItem="article-item"
                            countItems="3"
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default ArticleLatest;