import React,{PureComponent} from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import styles from './products.css';

class Products extends PureComponent{
  handleDelete = (id) => {
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  render(){
    const {productsList} = this.props.products;
    return (
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={this.handleDelete} productsList={productsList} />
      </div>
    )
  }
}

export default connect(({products}) => ({
  products,
}))(Products);