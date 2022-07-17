import React from "react";
import './Button.css';

class Button extends React.Component {

    constructor() {
        super();
        this.state = {
            iconLoadmore: false
        };
    }

    iconLoading = () => {
        return(<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx={50} cy={50} fill="none" stroke="currentColor" strokeWidth={10} r={35} strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(120.057 50 50)"><animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" /></circle></svg>);        
    }

    handleLoadMore = () => {
        if( this.props.isButtonLoading ) {
            this.setState({iconLoadmore: true})
        }
    }

    render() {
        return(
            <button className={ "btn "+this.props.classButton } onClick={this.handleLoadMore}>
                { this.state.iconLoadmore ? <this.iconLoading />:'' }
                { this.props.textButton }
            </button>
        )
    }

}

export default Button;