import React from 'react'
import FileUploadWithPreview from 'file-upload-with-preview'
import $ from "jquery";
import { connect } from 'react-redux'
import { getLogo } from './../../../store/actions/stepone'
import { detatchButtons, stepOne } from './../../../scripts/helpers/jquery'
import logo from './../../../../public/assets/img/logo.png'

///CONSTANTS
var upload ='';

class Step1 extends React.Component {

  constructor(props) {
     super(props);
     this.state = {

     };
     this.handleLogoUpload = this.handleLogoUpload.bind(this);
   }

   componentDidMount() {
     stepOne();
     detatchButtons();

     upload = new FileUploadWithPreview('myUniqueUploadId');
   }

   handleLogoUpload () {
     this.props.dispatch({type: "UPLOAD_LOGO", payload:true})

     $("#logoUpload").toggleClass("show");
     
   }
      isValidated(){

         let isDataValid = false;

          return isDataValid;
      }

   render() {
     return (
       <div className="step1 container-fluid">
         <h3>Choose a logo</h3>
       <div id="logoUploadcheckbox" className="col-lg-6">
        <label>
          <input id="logoinput"  onChange={this.handleLogoUpload}
            name="useLogo"
            type="checkbox"
           />
           Use My Logo
         
        </label>
            
       <div className="col-lg-12" id="logoUpload">
       <label className="custom-file-container__custom-file" >
           <input title="&nbsp;" type="file" className="custom-file-container__custom-file__custom-file-input" accept="*" multiple/>
           <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
           <span className="custom-file-container__custom-file__custom-file-control"></span>
       </label>
         <label><a href="javascript:void(0)" className="custom-file-container__image-clear" title="Clear Image">x</a></label>
       </div>
     </div>
     <div className="renderPreview col-lg-6">
          <img src={logo}/>
     </div>


     </div>
     );
   }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Step1)
