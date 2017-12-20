import React from 'react'
import {connect} from 'react-redux'

class ModalSide extends React.Component {
  constructor(props) {
     super(props);
       this.state = {
       
      }
    this.handleDescr = this.handleDescr.bind(this);
	this.handlePrice = this.handlePrice.bind(this);
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

  handleEdit() {
        document.getElementById("mydescr").contentEditable = true;
  }
  
render() {
	return (
     <div className="modalside">
     	 <div className="container-fluid options">
        <p id="mydescr" onClick={this.handleEdit}>
          {this.props.productDescr}
        </p>
        <div className="tabbutton col-lg-12">
          <button onClick={this.handleDescr}>include description</button>
        </div>
   
          <div className="col-lg-6">
            <input defaultValue={this.props.quantity} step="1" min="-8" max="10" className="qtyinput"/>
          </div>
          
          <div className="col-lg-6">
            {this.props.price}
          </div>
            
          <div className="tabbutton col-lg-12">
            <button onClick={this.handlePrice}>include price</button>
          </div>
          <button onClick={this.handleSubmit}>Add to my quote</button>
        </div> 
     </div>	
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(ModalSide)
