import React from 'react'
import $ from "jquery";
var fs = require('fs');
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import StepZilla from 'react-stepzilla';
import {connect} from 'react-redux';
import Logo from './steps/logo';
import Title from './steps/title';
import Catalog from './steps/catalog';
import Share from './steps/share';
import i2b from 'imageurl-base64';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const upload ='';
const customTitle='';
const products = [];
const steps =
    [
      {name: 'Logo', component: <Logo />},
      {name: 'Title', component: <Title />},
      {name: 'Catalog', component: <Catalog />},
      {name: 'Share', component: <Share />}
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
         {
          columns: [
            { 
              text: 'Item',
              bold: true,
              alignment: 'center',
              width: 150,
            },
            {
              text: '',
               bold: true,
            },
            {
              text: 'Price / Quantity',
              bold: true,
              alignment: 'right',
            }
          ]
          },
          products.map(function(product) { 
            {
              return [
             
              { margin: [0,20,0,0],
                columns: [
                  {
                    image: product.product.thumbnail,
                    width: 150,                   
                  },
                  {
                    width: 250, 
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
                    text: '$'+ product.product.price  + ' / ' +   product.product.quantity,
                    margin: [0,50,0,0],
                    alignment: 'center',
                   
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
