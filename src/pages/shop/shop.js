import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../../pages/collection/Collection';
import CollectionOverview from '../../components/collectionOverview/CollectionOverview';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';

class ShopPage extends Component {
    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        })
    }
    render (){
        const {match} = this.props;
        return (
        
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})
export default connect(null, mapDispatchToProps)(ShopPage);