import { Component } from 'react';

//import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
        monsters: [],
        nfts: [],
        nclyneNfts: [],
    };
  }

  componentDidMount(){
   /* fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then((users) => this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          },

    ));*/

    fetch('https://api.opensea.io/api/v1/assets?owner=0x5116936f1B52F8545995f2549101Ab1A41920309&order_direction=desc&limit=200&include_orders=false').then(response => response.json()).then((assets) => this.setState(
          () => {

            
            return { nfts: assets.assets };
          },
          () => {
            console.log(this.state);
          },
    ));
  }

  render(){

    
    return (
      <div className="App">
       {
        this.state.nfts.map((nft) => {
          return<img key={nft.id} width="200px" alt="" src={nft.image_url}></img>;
        })
       }
      </div>
    ); 
  }

}

export default App;
