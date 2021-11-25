import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({id, ...otherPropNames}) => (
                    <CollectionPreview key={id} {...otherPropNames}/>
                ))
            }
        </div>
    );
}

const mapStateToProps = () => createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);