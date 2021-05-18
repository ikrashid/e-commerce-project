import React from 'react';
import './MenuItem.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) =>{

    return (
        <div className={size ? `${size} menu-item` : `menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image'
                style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>           
        </div>
    )
}

export default withRouter(MenuItem);