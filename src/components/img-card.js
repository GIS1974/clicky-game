import React, { Component } from "react";

class Card extends Component {

    images = [
        {
            id: 1,
            clicked: false,
            imgUrl: "/images/img-1.jpg"
            // imgUrl: this.shuffle()
        },
        {
            id: 2,
            clicked: false,
            imgUrl: "/images/img-2.jpg"
        }, {
            id: 3,
            clicked: false,
            imgUrl: "/images/img-3.jpg"
        }, {
            id: 4,
            clicked: false,
            imgUrl: "/images/img-4.jpg"
        }, {
            id: 5,
            clicked: false,
            imgUrl: "/images/img-5.jpg"
        }, {
            id: 6,
            clicked: false,
            imgUrl: "/images/img-6.jpg"
        }, {
            id: 7,
            clicked: false,
            imgUrl: "/images/img-7.jpg"
        }, {
            id: 8,
            clicked: false,
            imgUrl: "/images/img-8.jpg"
        }, {
            id: 9,
            clicked: false,
            imgUrl: "/images/img-9.jpg"
        }, {
            id: 10,
            clicked: false,
            imgUrl: "/images/img-10.jpg"
        }, {
            id: 11,
            clicked: false,
            imgUrl: "/images/img-11.jpg"
        }, {
            id: 12,
            clicked: false,
            imgUrl: "/images/img-12.jpg"
        }, {
            id: 13,
            clicked: false,
            imgUrl: "/images/img-13.jpg"
        }, {
            id: 14,
            clicked: false,
            imgUrl: "/images/img-14.jpg"
        }, {
            id: 15,
            clicked: false,
            imgUrl: "/images/img-15.jpg"
        }
    ];

    // render() {
    //     return (
    //         this.imgUrls.map(URL => <img src={URL} alt="img" />)
    //     );
    // };

    // RandomUrlGenerator() {
    //     let randomURL;
    //     const imgUrls = [
    //         "/images/img-1.jpg",
    //         "/images/img-2.jpg",
    //         "/images/img-3.jpg",
    //         "/images/img-4.jpg",
    //         "/images/img-5.jpg",
    //         "/images/img-6.jpg",
    //         "/images/img-7.jpg",
    //         "/images/img-8.jpg",
    //         "/images/img-9.jpg",
    //         "/images/img-10.jpg",
    //         "/images/img-11.jpg",
    //         "/images/img-12.jpg",
    //         "/images/img-13.jpg",
    //         "/images/img-14.jpg",
    //         "/images/img-15.jpg"
    //     ];
    //     randomURL = imgUrls[Math.floor(Math.random() * imgUrls.length)];
    //     return randomURL;
    // };

    shuffleArray(array) {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    };

    render() {
        // console.log(this.shuffle(imgUrls));
        // this.shuffleArray(images); 

        return (
            this.images.map(result => <img src={result.imgUrl} id={result.id} key={result.id} alt="img" />)
        );
    };
};


export default Card;