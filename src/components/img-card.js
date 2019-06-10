import React, { Component } from "react";

class Card extends Component {
    state = [
        {
            id: 1,
            clicked: false,
            imgUrl: "/images/img-1.jpg"
        },
        {
            id: 2,
            clicked: false,
            imgUrl: "/images/img-2.jpg"
        },
    ];

    render() {
        return (
            this.state.map((imgUrl, key) => <img src={imgUrl} key={this.id} alt="img" />)
        );
    }
}

export default Card;