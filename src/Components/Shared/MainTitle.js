import React, {Component} from "react";
import './MainTitle.css';

class MainTitle extends Component {
    render() {
        return(
            <h2>{ this.props.mainTitle }</h2>
        );
    }
}

export default MainTitle;