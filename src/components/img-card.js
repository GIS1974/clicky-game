import React, { Component } from "react";

class Card extends Component {
    state = {
        id: 1,
        clicked: false,
        imgUrl: "/images/img-1.jpg"
    };

    imgUrls = [
        "/images/img-1.jpg",
        "/images/img-2.jpg",
        "/images/img-3.jpg",
        "/images/img-4.jpg",
        "/images/img-5.jpg",
        "/images/img-6.jpg",
        "/images/img-7.jpg",
        "/images/img-8.jpg",
        "/images/img-9.jpg",
        "/images/img-10.jpg",
        "/images/img-11.jpg",
        "/images/img-12.jpg",
        "/images/img-13.jpg",
        "/images/img-14.jpg",
        "/images/img-15.jpg"
    ]

    render() {
        return (
            this.imgUrls.map(URL => <img src={URL} alt="img" />)
        );
    }
}

export default Card;