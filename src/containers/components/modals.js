import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery";
import classNames from 'classnames';
import 'react-accessible-accordion/dist/react-accessible-accordion.css';

class Modals extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
     };

this.handleClose = this.handleClose.bind(this);
this.handleDescr = this.handleDescr.bind(this);
this.handlePrice = this.handlePrice.bind(this);
this.handleCustomize = this.handleCustomize.bind(this);

   };

  componentDidUpdate(){
    
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
        $(document).ready(function() {
    $(".options").delay(600).fadeIn(100);
  });

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
