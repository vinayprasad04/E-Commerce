import React, {Component} from 'react';
import SingleProduct from './product/singleProudct';
class DealDaySection extends Component{
    constructor(props){
        super(props);
        this.state = {
            products:[
                {productimg:"/assets/img/product01.jpg", productname:"Product Name Goes Here", price:"120", discount:20, desc:""},
                {productimg:"/assets/img/product02.jpg", productname:"Product Name Goes Here 3",price:"120", discount:20,desc:""},
                {productimg:"/assets/img/product03.jpg", productname:"Product Name Goes Here 4",price:"120", discount:15,desc:""},
                {productimg:"/assets/img/product04.jpg", productname:"Product Name Goes Here 5",price:"120", discount:25,desc:""},
                {productimg:"/assets/img/product05.jpg", productname:"Product Name Goes Here 6",price:"120", discount:30,desc:""},
                {productimg:"/assets/img/product06.jpg", productname:"Product Name Goes Here 6",price:"120", discount:30,desc:""},
            ]

        }
    }
    render(){







        return(
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Deals Of The Day</h2>
                                <div className="pull-right">
                                    <div className="product-slick-dots-1 custom-dots"></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="banner banner-2">
                                <img src="/assets/img/banner14.jpg" alt=""/>
                                <div className="banner-caption">
                                    <h2 className="white-color">NEW<br/>COLLECTION</h2>
                                    <button className="primary-btn">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-6 col-xs-6">
                            <div className="row">
                                <div id="product-slick-1" className="product-slick">
                                    {
                                        this.state.products.map((product, i) =>{
                                            return(
                                                <SingleProduct product={product} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Deals Of The DFGFDFFF</h2>
                                <div className="pull-right">
                                    <div className="product-slick-dots-2 custom-dots">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="product product-single product-hot">
                                <div className="product-thumb">
                                    <div className="product-label">
                                        <span className="sale">-20%</span>
                                    </div>
                                    <ul className="product-countdown">
                                        <li><span>00 H</span></li>
                                        <li><span>00 M</span></li>
                                        <li><span>00 S</span></li>
                                    </ul>
                                    <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                                    <img src="/assets/img/product01.jpg" alt=""/>
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o empty"></i>
                                    </div>
                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                    <div className="product-btns">
                                        <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                                        <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-6 col-xs-6">
                            <div className="row">
                                <div id="product-slick-2" className="product-slick">
                                    <div className="product product-single">
                                        <div className="product-thumb">
                                            <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                                            <img src="/assets/img/product06.jpg" alt=""/>
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-price">$32.50</h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o empty"></i>
                                            </div>
                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                            <div className="product-btns">
                                                <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                                                <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                                                <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-single">
                                        <div className="product-thumb">
                                            <div className="product-label">
                                                <span className="sale">-20%</span>
                                            </div>
                                            <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                                            <img src="/assets/img/product05.jpg" alt=""/>
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o empty"></i>
                                            </div>
                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                            <div className="product-btns">
                                                <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                                                <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                                                <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-single">
                                        <div className="product-thumb">
                                            <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                                            <img src="/assets/img/product04.jpg" alt=""/>
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-price">$32.50</h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o empty"></i>
                                            </div>
                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                            <div className="product-btns">
                                                <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                                                <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                                                <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="product product-single">
                                        <div className="product-thumb">
                                            <div className="product-label">
                                                <span>New</span>
                                                <span className="sale">-20%</span>
                                            </div>
                                            <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                                            <img src="/assets/img/product03.jpg" alt=""/>
                                        </div>
                                        <div className="product-body">
                                            <h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o empty"></i>
                                            </div>
                                            <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                            <div className="product-btns">
                                                <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                                                <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                                                <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};


export default DealDaySection;