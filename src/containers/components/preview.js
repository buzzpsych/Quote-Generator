import React from 'react'

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
        <div id="iframeContainer"></div>
      </div>
     );
   }

}

export default Preview
