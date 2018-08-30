import React from 'react';
// import CheckType from './CheckType.jsx'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      result: []
    }
  }

  componentDidMount = () => {
    this.userList()
  }

  userList = () => {
  fetch('https://api.myjson.com/bins/13twjs')
  .then(response => response.json())
  .then(data => this.setState({result:data}) )
  return
}

render() {
      return ( 

        // <CheckType func={this.state.result}/>

          this.state.result.map( x=> {
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

export default App;