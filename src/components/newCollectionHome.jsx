import React, {Component} from 'react';



const NewCollectionHome = ({img, title}) => {
    return (

        <a className="banner banner-1" href="#">
            <img src={img} alt=""/>
            <div className="banner-caption text-center">
                <h2 className="white-color">{title}</h2>
            </div>
        </a>


)

}

export default NewCollectionHome;