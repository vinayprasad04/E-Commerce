import React, {Component} from 'react'


class Banner extends Component{
    render(){
        return(
            <div className="container">
                <div className="home-wrap">
                    <div id="home-slick">
                        <div className="banner banner-1">
                            <img src="/assets/img/banner01.jpg" alt=""/>
                            <div className="banner-caption text-center">
                                <h1>Bags sale</h1>
                                <h3 className="white-color font-weak">Up to 50% Discount</h3>
                                <button className="primary-btn">Shop Now</button>
                            </div>
                        </div>

                        <div className="banner banner-1">
                            <img src="/assets/img/banner02.jpg" alt=""/>
                            <div className="banner-caption">
                                <h1 className="primary-color">HOT DEAL<br/><span className="white-color font-weak">Up to 50% OFF</span></h1>
                                <button className="primary-btn">Shop Now</button>
                            </div>
                        </div>

                        <div className="banner banner-1">
                            <img src="/assets/img/banner03.jpg" alt=""/>
                            <div className="banner-caption">
                                <h1 className="white-color">New Product <span>Collection</span></h1>
                                <button className="primary-btn">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Banner;