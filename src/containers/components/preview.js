import React from 'react'
import {connect} from 'react-redux';

class Preview extends React.Component {


  constructor(props) {
     super(props);
     this.state = {

     };

   }


   render() {
     return (
       <div id="previewpop">  
        <div className="custom-file-container__image-preview">
        </div>     
      </div>
     );
   }

}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Preview)

