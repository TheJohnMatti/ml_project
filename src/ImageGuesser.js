import React from 'react';

export default class ImageGuesser extends React.Component {

  render(){

    var backgroundStyle = {
      
      backgroundColor: "#7392a4",
      paddingLeft: "0px",
      paddingRight: "0px",
      marginRight: "0px",
      marginLeft:"0px",
      paddingBottom:"0px",
      paddingTop:"0px",
      marginBottom:"0px",
      marginTop:"0px"

    }
    var centerStyle = {
      backgroundColor: "#c0c3c5",
      marginLeft: "auto",
      marginRight: "auto"
    }

    return (
      <div class="container-fluid" style={backgroundStyle}>
      <AppTitle/ >
      <div style={centerStyle}>
      <br/>
      <Explanation />
      <ImageInput />
      </div>
      </div>
      );
  }
}

///////////////////////
/* TITLE FOR WEBSITE */
///////////////////////
class AppTitle extends React.Component {
 
  render(){

    var style = {
      position: "relative",
      margin: "auto",
      width: "50%"
    }

    var textStyle = {
      fontFamily: "verdana",

    }

    return (
    <div class="container card" style={style}>
      <div class="row justify-content-center bg-light">
      <p class="h1 font-weight-bold" style={textStyle}>Image Classifier</p>
      </div>
      <div class="row justify-content-center bg-light">
        <h5>by John Matti</h5>
      </div>
    </div>);
  }
}

////////////////////////
/*    EXPLANATION     */
////////////////////////
class Explanation extends React.Component{
  render(){

    var textboxStyle = {
      textAlign: "center",
      padding: "25px 25px 25px 25px",
      marginRight: "30%",
      marginLeft: "30%",
      backgroundColor: "light gray"
    }

    var textStyle = {
      fontFamily: "monospace"
    }
    return (

      <div style={textboxStyle} class="card">
        <p class="h6 card-body" style={textStyle}>
          Simply input a png or jpeg of any image and it will be identified as a dog or cat.
        </p>
      </div>

    )
  }
}

////////////////////////
/* IMAGE INPUT BUTTON */
////////////////////////
class ImageInput extends React.Component {
 
  render(){

    var formSpacing = {
      paddingLeft: "25%",
      paddingRight: "25%",
      paddingTop: "50px",
      paddingBottom: "50px"
    }

    return (
      <>

      <div class="input-group mb-3" style={formSpacing}>
      <input type="file" class="form-control" id="inputPNG" accept="image/png, image/jpeg"/>
      <label class="input-group-text" for="inputPNG">Upload</label>
      </div>
      
      </>
    )
  }
}


