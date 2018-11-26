import React, {Component} from 'react';


class HeaderSearch extends Component{
    render(){
        return(
            <div className="header-search">
                <form>
                    <input className="input search-input" type="text" placeholder="Enter your keyword"/>
                    <select className="input search-categories">
                        <option value="0">All Categories</option>
                        <option value="1">Category 01</option>
                        <option value="1">Category 02</option>
                    </select>
                    <button className="search-btn"><i className="fa fa-search"></i></button>
                </form>
            </div>
        );
    }
}

export default HeaderSearch;