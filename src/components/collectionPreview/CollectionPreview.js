import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
            {items.filter(item => item.id < 5).map(item =>  <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
}

export default CollectionPreview;

