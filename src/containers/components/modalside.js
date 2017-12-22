import React from 'react'
import {connect} from 'react-redux'
import $ from "jquery"


class ModalSide extends React.Component {
  constructor(props) {
     super(props);
       this.state = {
       productDescr:this.props.productDescr,
       count: this.props.quantity,
       calculatedPrice: this.props.price,
      }
  this.handleCalcPrice = this.handleCalcPrice.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleDescr = this.handleDescr.bind(this);
	this.handlePrice = this.handlePrice.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.incrementCount = this.incrementCount.bind(this);
  this.DecrementCount = this.DecrementCount.bind(this);
   }
  componentDidMount(){
    document.getElementById("mydescr").contentEditable = true;
    document.getElementById("calculatedprice").contentEditable = true;
  }

   handleDescr(e){
        $('.optionbuttons>.tabbutton:nth-child(1)>button').attr('disabled','disabled');
    e.preventDefault();
     this.props.dispatch({
           type: "INCLUDE_DESCRIPTION",
           payload: true,
         })
  } 

   handlePrice(e){
    $('.optionbuttons>.tabbutton:nth-child(3)>button').attr('disabled','disabled');
     e.preventDefault();

    this.props.dispatch({
           type: "INCLUDE_PRICE",
           payload: true,

         })

  }

  handleEdit(event) {

    this.setState({
      productDescr: event.target.value,
    });
  }
  handleCalcPrice(event){
     this.setState({
      calculatedPrice: event.target.value,
    });
  }

 incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
  }
  DecrementCount(){
    this.setState({
      count: this.state.count - 1
    });
  }

  handleSubmit(e){
      e.preventDefault();
   
   let product ={
      "name": this.props.name,
      "thumbnail":this.props.thumbnail,
    };

    if (this.props.stepThreeReducer.include_descr) {
      
       product.descr = this.state.productDescr;
     
    }

    if (this.props.stepThreeReducer.include_price) {

        product.price = this.state.calculatedPrice;
        product.quantity = this.state.count;
    }
    
         // product["name"] = this.props.productname;
          //product ["descr"] = this.props.productDescr;


    console.log(product);

       this.props.dispatch({
           type: "ADD_PRODUCT",
           payload: product,
         })
  }
  
render() {
return (
  <div className="modalside">
    <div className="arrow-left"></div>
     	<div className="container-fluid options">
        <label>Description</label>
        <textarea rows="4" defaultValue={this.props.productDescr} onChange={this.handleEdit} id="mydescr"/>
        <div className="qty col-lg-6">
          <button type="button" onClick={this.incrementCount}>+</button>
          <div>{this.state.count}</div>
          <button type="button" onClick={this.DecrementCount}>-</button>
        
        </div>  
        <div className="calculatedprice col-lg-6">
          <span>$<input defaultValue={this.props.price} onChange={this.handleCalcPrice} id="calculatedprice"/></span>
        </div>  

        <div className="optionbuttons container-fluid">
          <div className="tabbutton col-lg-5">
            <button onClick={this.handleDescr}>include description</button>
          </div>
          <div className="col-lg-2"></div>
          <div className="tabbutton col-lg-5">
            <button onClick={this.handlePrice}>include price</button>
          </div>
          <div className="addquote col-lg-12">
            <button onClick={this.handleSubmit}>Add to my quote</button>
          </div>
        </div>

      </div> 
     </div>	
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ModalSide)
