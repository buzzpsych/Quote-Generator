import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux';

class Pdf extends React.Component {
constructor(props) {
    super(props);
    
    this.state = {
      source: '',
    
    };
  }
  componentDidMount() {
  	///MAKE GET CALL WITH PARAMATER PATH 
  	axios.get('http://localhost:3001/pdf/'+this.props.match.params.path)
  .then(({ data })=> {
  	
  	this.setState({
  		source: data.source
  	})
  })
  .catch(function (error) {
    console.log(error);
  });


	 }

 render() {
   return (
     	<div id="sharedquote">
     	<h1>Your quote</h1>
     	<iframe src={this.state.source}/>
     	</div>
        );
  }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(Pdf)
