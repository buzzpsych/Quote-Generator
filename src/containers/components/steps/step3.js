import React from 'react'
import {connect} from 'react-redux'
import $ from "jquery"
import { products } from './../../../scripts/helpers/constants'
import Product from './../product'
import { stepThree } from './../../../scripts/helpers/jquery'


class Step3 extends React.Component {
  constructor(props) {
     super(props);   
   }

   componentDidMount(){
    stepThree();
        
   }

   render() {

    const listProducts = products.map((product, index) =>
        <Product key={product.id} quantity={product.quantity} modalbg={product.modalbg} id={product.id} thumbnail={product.thumbnail} price={product.price} name={product.name} descr={product.description}  />
    );
    
     return (
     <div>
      <h3>Choose products for your quote</h3>
       <div className="products container-fluid">
          
              {listProducts}
       </div>
      </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Step3)
