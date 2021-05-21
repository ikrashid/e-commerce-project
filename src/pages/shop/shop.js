import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CollectionPage from '../../pages/collection/Collection';
import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import {connect} from 'react-redux';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop-selectors'
import { fetchCollectionsFailure, fetchCollectionsStartAsync} from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/withSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends Component {

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    render (){
        const {match, isFetchingCollections, selectIsCollectionsLoaded} = this.props;
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props}/>}/>
            <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!selectIsCollectionsLoaded} {...props} />}/>
        </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isFetchingCollections: selectIsCollectionFetching,
    selectIsCollectionsLoaded: selectIsCollectionsLoaded
})
const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);