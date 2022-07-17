import React from "react";
import MainTitle from "../Shared/MainTitle";
import Button from "../Shared/Button";
import ArticleList from "../ArticleList";

class NewsList extends React.Component {

    render() {
        return(
            <>
                <div className="articles-list section">
                    <div className="tcl-container">
                        {/* Main Title */}
                        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
                            <MainTitle mainTitle="News List" />
                            <Button classButton="btn-default" textButton="View More" />
                        </div>
                        {/* End Main Title */}
                        {/* End Row News List */}
                        <div className="tcl-row">
                            <ArticleList
                                classNameArticleWrap="tcl-col-12 tcl-col-md-6"
                                classNameArticleItem="article-item style-card"
                                countItems="6"
                            />
                        </div>
                        {/* End Row News List */}
                        {/* Btn Loadmore */}
                        <div className="text-center">
                            <Button
                                isButtonLoading="1"
                                classButton="btn-primary btn-size-large" 
                                textButton="Load more"
                            />
                        </div>
                    </div>
                    </div>

            </>
        );
    }

}

export default NewsList;