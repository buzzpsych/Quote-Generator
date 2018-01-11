import React from 'react'
import { connect } from 'react-redux'
import $ from "jquery";
import Clipboard from 'clipboard'
import { stepFive } from './../../../scripts/helpers/jquery'
const clipboard =new Clipboard('#copy');
class Share extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
      sharedroor:false,
     };
  this.handlePreview = this.handlePreview.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleCopy = this.handleCopy.bind(this);
   }

   componentDidMount() {
    stepFive();
    this.props.dispatch({type: "SHOW_PREVIEW", payload: true})

  }
  handleCopy(event){
     event.preventDefault();
    clipboard.on('success', function(e) {
      $("#copy").text("Copied!");

        e.clearSelection();
    });

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
  }

  handlePreview(event){
    event.preventDefault();
    window.open('https://qg-fe.herokuapp.com/pdf/'+this.props.pdf.path);

  }

  handleClick(){
    this.setState({
      sharedroor:true
    })
  }

   render() {
     return (
      <div id="sharecont">
      { this.state.sharedroor ?
          <div id="sharedroor">
            <button data-clipboard-text={'http://localhost:3000/pdf/'+this.props.pdf.path} onClick={this.handleCopy} id="copy">Copy link to clipboard <i className="fa fa-clipboard" aria-hidden="true"></i>
</button><hr/>
     <button onClick={this.handlePreview} id="previewbtn">Preview  </button>
          </div> 
        : null
      }
         <i onClick={this.handleClick} className="share fa fa-share-square" aria-hidden="true"></i>
          <div id="iframeContainer"></div>
      </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Share)
