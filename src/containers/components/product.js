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
  $('.footer-buttons').addClass("modalsteps");
  $('.products').addClass("inactiveproducts");
   $( "#quoteformcont" ).append( "<div id='modalbg'></div>" );
   $(".quoteformparentcont").addClass("productcontainer");
     this.setState({
      isModalOpen: true,
    });
   }

  handleClose(e) {
     $('.modalside').removeClass("sideopen");
     $('.footer-buttons').removeClass("modalsteps");
    $( "#modalbg" ).remove();
    $('.products').removeClass("inactiveproducts");
      this.setState({
      isModalOpen: false,
      isModalSideOpen: false,

    });
  }
  
   render() {
      const { name , id} = this.props;
     return (
     	<div  className={classNames({activeproduct:this.state.isModalOpen},'col-lg-4 col-md-4')}>
        <div onClick={this.handleModal}>
        <img src={this.props.thumbnail}/>
        <li className="productname">{this.props.name}</li>
        <li className="price col-lg-12">{this.props.price}</li>
        </div>  
        {  this.state.isModalOpen ?     
          <Modals handleModalSide={this.handleModalSide}  modalbg={this.props.modalbg} handleClose={this.handleClose} thumbnail={this.props.thumbnail} productname={this.props.name} />
        : null
        }
          {  this.state.isModalSideOpen ?     
          <ModalSide productDescr={this.props.descr} quantity={this.props.quantity} price={this.props.price} />
        : null
        }

      </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Product)
