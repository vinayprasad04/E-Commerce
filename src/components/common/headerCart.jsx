import React, {Component} from 'react';



class HeaderCart extends Component {
    render (){
        return(
            <li className="header-cart dropdown default-dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <div className="header-btns-icon">
                        <i className="fa fa-shopping-cart"></i>
                        <span className="qty">3</span>
                    </div>
                    <strong className="text-uppercase">My Cart:</strong>
                    <br/>
                    <span>35.20$</span>
                </a>
                <div className="custom-menu">
                    <div id="shopping-cart">
                        <div className="shopping-cart-list">
                            <div className="product product-widget">
                                <div className="product-thumb">
                                    <img src="/assets/img/thumb-product01.jpg" alt=""/>
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                    <h2 className="product-name"><a href="JavaScript:void(0);">Product Name Goes Here</a></h2>
                                </div>
                                <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                            </div>
                            <div className="product product-widget">
                                <div className="product-thumb">
                                    <img src="/assets/img/thumb-product01.jpg" alt=""/>
                                </div>
                                <div className="product-body">
                                    <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                    <h2 className="product-name"><a href="JavaScript:void(0);">Product Name Goes Here</a></h2>
                                </div>
                                <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                            </div>
                        </div>
                        <div className="shopping-cart-btns">
                            <button className="main-btn">View Cart</button>
                            <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default HeaderCart ;




