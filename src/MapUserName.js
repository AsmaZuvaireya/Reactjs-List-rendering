import React from 'react'
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
  fetch('https://api.myjson.com/bins/lwr8o/')
  .then(response => response.json())
  .then(data => this.setState({result:data}) )
  return
}

render() {
      return ( 
        this.state.result.map((item, index) => (          
        <div key={index}> 
        <div>Name: { item.user.name} </div>
        </div>      
))

       )
    }


}

export default App;