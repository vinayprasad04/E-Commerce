import React, {Component} from 'react';




class TopHeader extends Component{
    render(){
        return(
            <div id="top-header">
                <div className="container">
                    <div className="pull-left">
                        <span>Welcome to E-shop!</span>
                    </div>
                    <div className="pull-right">
                        <ul className="header-top-links">
                            <li><a href="JavaScript:void(0);">Store</a></li>
                            <li><a href="JavaScript:void(0);">Newsletter</a></li>
                            <li><a href="JavaScript:void(0);">FAQ</a></li>
                            <li className="dropdown default-dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down"></i></a>
                                <ul className="custom-menu">
                                    <li><a href="JavaScript:void(0);">English (ENG)</a></li>
                                    <li><a href="JavaScript:void(0);">Russian (Ru)</a></li>
                                    <li><a href="JavaScript:void(0);">French (FR)</a></li>
                                    <li><a href="JavaScript:void(0);">Spanish (Es)</a></li>
                                </ul>
                            </li>
                            <li className="dropdown default-dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">USD <i className="fa fa-caret-down"></i></a>
                                <ul className="custom-menu">
                                    <li><a href="JavaScript:void(0);">USD ($)</a></li>
                                    <li><a href="JavaScript:void(0);">EUR (€)</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopHeader;