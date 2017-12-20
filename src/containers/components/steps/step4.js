import React from 'react'
import $ from "jquery";
import { stepFour } from './../../../scripts/helpers/jquery'

class Step4 extends React.Component {
  
  constructor(props) {
     super(props);
     this.state = {

     };

   }

   componentDidMount() {

    stepFour();
  }

   render() {
     return (
       <div>
       <div className="col-lg-12">
       <label>
         <input defaultChecked
           name="TotalPrice"
           type="checkbox"
          />
         Total Price
       </label>
       <input placeholder="$XX.XX"  type="number" name="TotalPrice" />
           <span id="totalapply">APPLY</span>

       </div>

       <div className="col-lg-12">
       <label>
         <input
           name="ShowTaxes"
           type="checkbox"
          />
         Show Taxes
       </label>

             <hr/>
       </div>

       <div className="col-lg-12">
       <label>
         <input
           name="useFooter"
           type="checkbox"
          />
         Use Footer Copy
       </label>
       </div>
       </div>
     );
   }

}

export default Step4
