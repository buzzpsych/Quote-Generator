import React from 'react'
import $ from "jquery";
import {connect} from 'react-redux'
import { stepTwo } from './../../../scripts/helpers/jquery'

//CustomTitle Needs to be passed to store
var customTitle ='';

class Title extends React.Component {


  constructor(props) {
     super(props);
     this.showCustomTitle = this.showCustomTitle.bind(this);
     this.handleCustomTitle = this.handleCustomTitle.bind(this);

   }

   componentDidMount(){
    stepTwo();

   }

   showCustomTitle () {
      var empty = false;
     $("#customtitleinput").prop('disabled', empty);
  
   }

   handleCustomTitle(event) {
       this.props.dispatch({
         type: "CUSTOM_TITLE",
         payload:event.target.value
       })

   }
   render() {
     return (
       <div className="step2 container-fluid">
        <h3>Choose a heading</h3>
       <label >
         <input onChange={this.showCustomTitle}
           name="CustomTitle"
           type="checkbox"
          />

       </label>
         <input onChange={this.handleCustomTitle.bind(this)} id="customtitleinput" disabled placeholder="Custom Title/Text" type="text" name="name" />

       </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Title)
