import React from 'react';
import './App.css';
import Input from './components/input';
import Button from './components/button';
import darkSouls3 from './components/images/dark-souls-3.jpg'
import eldenRing from './components/images/elden-ring.jpg'
import sekiro from './components/images/sekiro.jpg'
import liesOfp from './components/images/Lis-of-p.jpg'
import theWitcher3 from './components/images/The-witcher-3.jpg'
import Card from './components/card';


const DATA = [
  {
      id: 0,
      title: "Dark Souls 3",
      raiting: "9.0",
      poster: darkSouls3
  },
  {
      id: 1,
      title: "Elden ring",
      raiting: "10.0",
      poster: eldenRing
  },
  {
      id: 2,
      title: "Sekiro",
      raiting: "9.5",
      poster: sekiro
  },
  {
      id: 3,
      title: "Lies of P",
      raiting: "9.9",
      poster: liesOfp
  },
  {
      id: 4,
      title: "The Witcher 3",
      raiting: "10.0",
      poster: theWitcher3
  }
]



function App() {
  
  return (
    <div className="App">
      <div className='inputBox'>
        <Input />
        {/* <Button title="Add"/> */}
      </div>
      <div className='CardItems'>
      {DATA.map(el => {

        return (

          <Card 
           key = {el.id}
           title = {el.title}
           raiting = {el.raiting}
           poster = {el.poster}
    
          />
        )
      })}
      
      </div>
    </div>
    

  );
}

export default App;
