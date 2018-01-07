import React from 'react'
import {connect} from 'react-redux'
import $ from "jquery";
import classNames from 'classnames';
import checkMark from './../../../public/assets/img/check.gif'
import Modals from './modals'
import ModalSide from './modalside'

class Product extends React.Component {
  constructor(props) {
     super(props);
       this.state = {
        isModalOpen: false,
        isModalSideOpen:false,
      }
    this.handleModal = this.handleModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleModalSide = this.handleModalSide.bind(this);

   }
  
   handleModalSide(){
     this.setState({
      isModalSideOpen: true,
    });
    $( document ).ready(function() {
       $('.modalside').addClass("sideopen");
    });
   
   }

  handleModal(e) {
  $('.products').addClass("inactiveproducts");
   $( "#quoteformcont" ).append( "<div id='modalbg'></div>" );
   $(".quoteformparentcont").addClass("productcontainer");
     this.setState({
      isModalOpen: true,
    });
   }

  handleClose(e) {
     $('.modalside').removeClass("sideopen");
    $( "#modalbg" ).remove();
    $('.products').removeClass("inactiveproducts");
      this.setState({
      isModalOpen: false,
      isModalSideOpen: false,

    });
  }
  handleSubmit(e){
e.preventDefault();
   
   let product ={
      "name": this.props.name,
      "thumbnail":this.props.thumbnail,
      "descr": this.state.productDescr,
      "price":  this.state.calculatedPrice,
      "quantity": this.state.count,
    };

     this.props.dispatch({
     type: "ADD_PRODUCT",
     payload: product,
   })

  }
  
   render() {
      const { name , id} = this.props;
     return (
     	<div  className={classNames({activeproduct:this.state.isModalOpen},'item')}>
        <div onClick={this.handleModal}>
        <img src={this.props.thumbnail}/>
        <li className="productname">{this.props.name}</li>
        </div>  
        {  this.state.isModalOpen ?     
          <Modals handleModalSide={this.handleModalSide}  modalbg={this.props.modalbg} handleClose={this.handleClose} thumbnail={this.props.thumbnail} productname={this.props.name} />
        : null
        }
          {  this.state.isModalSideOpen ?     
          <ModalSide handleSubmit={this.handleSubmit} handleClose={this.handleClose} thumbnail={this.props.thumbnail} name={this.props.name} productDescr={this.props.descr} quantity={this.props.quantity} price={this.props.price} />
        : null
        }

      </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Product)
