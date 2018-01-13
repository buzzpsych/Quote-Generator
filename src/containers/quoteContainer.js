import React from 'react'
import Form from './components/form'
import Sidebar from './components/sidebar'
import Preview from './components/preview'
import {connect} from 'react-redux';
import logo from './../../public/assets/img/qglogo.png'

class QuoteContainer extends React.Component {
  componentDidMount() {

 }

 render() {
   return (
     <div className="globalContainer">
        <div id="title" className="container-fluid">
          <img src={logo}/>
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


const mapStateToProps = state => state;

export default connect(mapStateToProps)(QuoteContainer)
