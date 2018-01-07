import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery";
import { stepFive } from './../../../scripts/helpers/jquery'
import 'react-tippy/dist/tippy.css';
import {
  Tooltip,
} from 'react-tippy';


class Share extends React.Component {
  constructor(props) {
     super(props);
     this.state = {

     };

   }

   componentDidMount() {
    stepFive();
    this.props.dispatch({type: "SHOW_PREVIEW", payload: true})

  }
  handleShare(){
    console.log("sharing");


  }

   render() {
     return (
      <div id="sharecont">
      <Tooltip
    trigger="mouseenter"
    interactive
    arrow={true}
    html={(
      <div>
       test
      
      </div>
    )}
  >

   <i className="fa fa-share-square" aria-hidden="true"></i>

</Tooltip>
</div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Share)
