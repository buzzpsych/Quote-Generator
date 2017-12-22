import React from 'react'
import $ from "jquery";
var fs = require('fs');
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import StepZilla from 'react-stepzilla';
import {connect} from 'react-redux';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Step5 from './steps/step5';
import i2b from 'imageurl-base64';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const upload ='';
const customTitle='';
const products = [];
const steps =
    [
      {name: 'Step 1', component: <Step1 />},
      {name: 'Step 2', component: <Step2 />},
      {name: 'Step 3', component: <Step3 />},
      {name: 'Step 4', component: <Step4 />},
      {name: 'Step 5', component: <Step5 />}
    ]

class Form extends React.Component {

  constructor(props) {
     super(props);
   }

  componentWillReceiveProps() {
    products = this.props.stepThreeReducer;
  }
   
  render() { 

  if(this.props.stepFiveReducer.showPreview) {
     
    customTitle= this.props.stepTwoReducer.pdfTitle;
           
    $("#iframeContainer").show();

    let logo = $(".custom-file-container__image-preview").css('background-image');
      logo = logo.replace('url("','').replace(')','');
        //PDF GENERATION OBJECT
    let docDefinition = {
      content:[{
        columns:[{
          image: logo,
          width: 150,
          style:'logo',

        },{   
          text: customTitle,
          style: 'header',
          }
        ]},
          products.map(function(product) { 
            {
              return [
              {
                columns: [
                  {
                    image: product.product.thumbnail,
                    width: 150,                   
                  },
                  {
                    width: 300, 
                    margin: [0,20,0,0],
                    text:[
                      { text: 
                        product.product.name + ' \n\n', 
                        fontSize: 15,
                        bold: true,

                      },
                      product.product.descr,
                    ]
                  },
                  [{
                    text: product.product.price,
                    margin: [0,50,0,0],
                   
                  }],
                ]
              }]
               columnGap: 30
            }
          })

      ],
      styles: {
        logo: {
          margin: [0,0,0,20],
        },
        header: {
          fontSize: 22,
          bold: true,
          margin: [0,50,20,0],
        
        },
        product: {
          bold: true,
          fontSize: 15,
                
        },
        productdescr: {
          margin: [0,0,0,0],
          fontsize:9,
          
        },
       
      }
    }


    const pdfDocGenerator = pdfMake.createPdf(docDefinition);
      pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.querySelector('#iframeContainer');
        const iframe = document.createElement('iframe');
          iframe.src = dataUrl;
          targetElement.appendChild(iframe);
      });
  }

    return (
      <div className="quoteformparentcont">
       <form id="quoteformcont" className="col-lg-12">
           <div className='step-progress'>
             <StepZilla preventEnterSubmission={true} showSteps={true} steps={steps} stepsNavigation={true} prevBtnOnLastStep={true} />
           </div>
       </form>     
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Form)
