import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import ShopPage from './ShopPage';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollectionsStart: () => dispatch<any>(fetchCollectionsStart())
});

const ShopPageContainer = connect(null, mapDispatchToProps)(ShopPage);

export default ShopPageContainer;