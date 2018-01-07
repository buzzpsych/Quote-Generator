import React from 'react'
import {connect} from 'react-redux'
import $ from "jquery"

const products = [];
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
  this.handleSubmit = this.handleSubmit.bind(this);
  this.incrementCount = this.incrementCount.bind(this);
  this.DecrementCount = this.DecrementCount.bind(this);
   }
  componentDidMount(){
    document.getElementById("mydescr").contentEditable = true;
    document.getElementById("calculatedprice").contentEditable = true;
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
     $("#next-button").prop('disabled', false);
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
  
   
    this.props.handleClose(e);

  }
  
render() {
return (
  <div className="modalside">
    <div className="arrow-left"></div>
     	<div className="container-fluid options">
        <label>Description</label>
        <textarea rows="8" defaultValue={this.props.productDescr} onChange={this.handleEdit} id="mydescr"/>
        <div className="qty col-lg-6">
          <button type="button" onClick={this.incrementCount}>+</button>
          <div>{this.state.count}</div>
          <button type="button" onClick={this.DecrementCount}>-</button>
        
        </div>  
        <div className="calculatedprice col-lg-6">
          <span>$<input defaultValue={this.props.price} onChange={this.handleCalcPrice} id="calculatedprice"/></span>
        </div>  

        <div className="optionbuttons container-fluid">
          
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
