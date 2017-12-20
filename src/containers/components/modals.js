import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery";
import classNames from 'classnames';
import 'react-accessible-accordion/dist/react-accessible-accordion.css';

// const pushProduct = [];


class Modals extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
     };

this.handlePush = this.handlePush.bind(this);
this.handleClose = this.handleClose.bind(this);
this.handleDescr = this.handleDescr.bind(this);
this.handlePrice = this.handlePrice.bind(this);
this.handleCustomize = this.handleCustomize.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

   };

  componentDidUpdate(){
      if (this.props.stepThreeReducer.include_descr && this.props.stepThreeReducer.include_price){

          alert("ADDED DESCRIPTION AND PRICE!");
      };
  }

  handleClose(e){

        this.props.handleClose(e);
  }



  handleDescr(e){
    e.preventDefault();
     this.props.dispatch({
           type: "INCLUDE_DESCRIPTION",
           payload: true,

         })
  }

  handlePrice(e){
     e.preventDefault();

    this.props.dispatch({
           type: "INCLUDE_PRICE",
           payload: true,

         })
  }

  handleCustomize(e){
    $(".modal").addClass('modalpush');
     e.preventDefault();
       this.props.handleModalSide(e);

  }

  handleSubmit(e){
    let product = {
      "name": this.props.productname,
      "thumbnail":this.props.thumbnail,
      "descr": this.props.productDescr,
      "price":this.props.price,
    };
         // product["name"] = this.props.productname;
          //product ["descr"] = this.props.productDescr;
  e.preventDefault();

    //console.log(product);

       this.props.dispatch({
           type: "ADD_PRODUCT",
           payload: product,
         })
  }

  handlePush(e){
    e.preventDefault();

   // listProductsNames.push(this.props.productname)      
        }

   render() {
      const { modalbg} = this.props;
        const bgImg = {
          background: '#93c1f1d1',
      }
  return (
    <div className="modal">
      <div>
       <i onClick={this.handleClose} style={bgImg} className="fa fa-times" aria-hidden="true"></i>
       <h3>{this.props.productname}</h3>
       <img src={this.props.thumbnail}/>
    </div>
    <div className="modalcontent container-fluid">
       <div className="modalsubmit col-lg-12">
        <button onClick={this.handleCustomize}>Customize my quote</button>
      </div>           
      </div>

   </div>
 );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Modals)
