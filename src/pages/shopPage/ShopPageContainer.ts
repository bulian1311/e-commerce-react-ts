import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchCollestionsStartAsync } from '../../redux/shop/shopActions';
import ShopPage from './ShopPage';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchCollestionsStartAsync: () => dispatch<any>(fetchCollestionsStartAsync())
});

const ShopPageContainer = connect(null, mapDispatchToProps)(ShopPage);

export default ShopPageContainer;