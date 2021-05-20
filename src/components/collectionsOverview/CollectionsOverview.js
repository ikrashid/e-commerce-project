import React from 'react';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';
import './CollectionsOverview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors'

const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
        {collections.map(({id, ...collectionProps}) => (<CollectionPreview key = {id} {...collectionProps}/>))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);