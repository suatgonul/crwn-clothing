import React from 'react';
import './shop.styles.scss';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsStartAsync, updateCollections} from "../../redux/shop/shop.actions";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    // unsubscribeFromSnapshot = null;

    /*constructor() {
        super();

        this.state = {
            loading: true
        }
    }*/
    // state = {
    //     loading: true
    // }

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionsLoaded} = this.props;
        return (
            <div className='shop-page'>
                {/*<Route exact path={`${match.path}`} component={CollectionsOverview}/>*/}
                {/*<Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> } />*/}
                {/*<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/> } />*/}
                <Route exact
                       path={`${match.path}`}
                       component={CollectionsOverviewContainer}
                       // render={(props) =>
                       //     <CollectionsOverviewWithSpinner
                       //         isLoading={isCollectionFetching}
                       //         {...props}
                       //     />
                       // }
                />
                <Route path={`${match.path}/:collectionId`}
                       render={(props) =>
                           <CollectionPageWithSpinner
                               isLoading={!isCollectionsLoaded}
                               {...props}
                           />
                       }
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);