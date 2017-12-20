import React from 'react'
import Form from './components/form'
import Sidebar from './components/sidebar'
import Preview from './components/preview'

class QuoteContainer extends React.Component {
  componentDidMount() {

 }

 render() {
   return (
     <div className="globalContainer">
        <div id="title" className="container-fluid">
          <h1>QUOTE GENERATOR</h1>
        </div>
        <div  className="container-fluid custom-file-container" data-upload-id="myUniqueUploadId">
          <Form/>
          <Sidebar/>
           <Preview/>
            <div id="stepsButtons"></div>
        </div>
       
    </div>
        );
  }
}


export default QuoteContainer
