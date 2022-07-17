import React from "react";
import ArticleItem from "../ArticleItem";

class ArticleList extends React.Component {

    render() {
        const items = [];
        for( var i = 0; i < this.props.countItems; i++ ) {
            items.push(
                <div key={i} className={this.props.classNameArticleWrap}>
                    <ArticleItem 
                        classNameArticleItem={this.props.classNameArticleItem} 
                        categoryButton={this.props.categoryButton}
                        showDesc={this.props.showDesc}
                    />
                </div>
            )
        }
        return (
            <>
                {items}
            </>
        );
    }

}

export default ArticleList;