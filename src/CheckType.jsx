import React from 'react';
import './App.css';

class CheckType extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

// handleCheck = (func) => {
// func.map(x=> {
// 	if(x.type==="image"){
// 		console.warn(x.src)
// 	}
// 	else{
// 		console.warn(x.src)
// 	}
// })
// }

render() {

      return (
      		
	this.props.func.map( x=> {
// console.log(x.type)
	if(x.type === "image"){
		// console.warn(x.src)
		return <img src={x.src} alt="image" width="200" height="200"/>
	}

	else{
		console.warn(x.src)
		return <iframe src= {x.src}
   width="200" height="200" frameborder="0" allowfullscreen></iframe>;

	}

})

       )
    }


}

export default CheckType;