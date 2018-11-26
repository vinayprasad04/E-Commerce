import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TopHeader from './topheader';
import HeaderSearch from './headerSearch';
import HeaderAccount from './headerAccount';
import HeaderCart from './headerCart';
import HeaderLogo from './headerLogo';
import CategoryNav from './categoryNav';
import NavigationMenu from './navigationMenu';


class Header extends Component{
    render(){
        return (
            <div>
                <header>
                    <TopHeader/>
                    <div id="header">
                        <div className="container">
                            <div className="pull-left">
                                <HeaderLogo/>
                                <HeaderSearch/>
                            </div>

                            <div className="pull-right">
                                <ul className="header-btns">
                                    <HeaderAccount/>
                                    <HeaderCart/>
                                    <li className="nav-toggle">
                                        <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="navigation">
                    <div className="container">
                        <div id="responsive-nav">
                            <CategoryNav/>
                            <NavigationMenu/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;