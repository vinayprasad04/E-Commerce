import React, {Component} from 'react';

class SingleProduct extends Component{
    render(){
        let {productimg, productname, price, discount} = this.props.product;
        return(
            <div className="product product-single">
                <div className="product-thumb">
                    <div className="product-label">
                        <span className="sale">-{discount}%</span>
                    </div>
                    <ul className="product-countdown">
                        <li><span>00 H</span></li>
                        <li><span>00 M</span></li>
                        <li><span>00 S</span></li>
                    </ul>
                    <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                    <img src={productimg} alt=""/>
                </div>
                <div className="product-body">
                    <h3 className="product-price">${price - price*discount/100} <del className="product-old-price">${price}</del></h3>
                    <div className="product-rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star-o empty"></i>
                    </div>
                    <h2 className="product-name"><a href="#">{productname}</a></h2>
                    <div className="product-btns">
                        <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                        <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                        <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default SingleProduct;