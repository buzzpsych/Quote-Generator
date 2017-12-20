import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery";
import { stepFive } from './../../../scripts/helpers/jquery'


class Step5 extends React.Component {
  constructor(props) {
     super(props);
     this.state = {

     };

   }

   componentDidMount() {
    stepFive();
    this.props.dispatch({type: "SHOW_PREVIEW", payload: true})
  }

   render() {
     return (
       <div>

       
       </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Step5)
