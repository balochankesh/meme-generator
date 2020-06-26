import React from 'react';
import logo from './logo.svg';
import './App.css';

import Memet from "./Memet"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loading:false,
            mem:[]
        }

    }
    
    componentDidMount(){
        this.setState({loading:true})
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(ta => ta.data.memes)
            .then(dat => {
                this.setState({
                    loading:true,
                    mem:dat
                })
            })
    }
    
    render(){
        const data1 = this.state.mem
        const l = []
        l.push(data1)
        console.log(data1)
        const mData = data1.map(item => <Memet key={item.id} item={item}/>)
      return (
        <div className="App">
          <header>CHOOSE A MEME</header>
        
      <main>{mData}</main>

        </div>
  );

    }
}

export default App;
