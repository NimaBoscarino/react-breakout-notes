// If you want to see this demo, rename this to App.js

import React, {Component} from 'react';
import KanyeContainer from './KanyeContainer.jsx'
import NewKanyeForm from './NewKanyeForm.jsx'

const Logo = () => {
  return (<h1>Kanye Sounds.com</h1>)
}

let kanyes = [
  {
    sound: 'agh.wav',
    image: 'http://ordinaryquotes.com/images/20638/sns_thank_you_guys_for_t.jpg'
  },
  {
    sound: 'dadada.wav',
    image: 'https://ih0.redbubble.net/image.432053491.2384/raf,360x360,075,t,fafafa:ca443f4786.jpg'
  },
  {
    sound: 'heh.wav',
    image: 'http://pluspng.com/img-png/kanye-west-png-kanye-west-png-pic-png-image-450.png'
  },
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      kanyes: kanyes
    }

    this.addKanye = this.addKanye.bind(this);

  }

  // how to add something to an array in your state
  addKanye(kanye) {
    this.setState({
      kanyes: [
        ...this.state.kanyes,
        kanye
      ]
    })
  }

  render() {
    return (
      <div>
        <Logo />
        <KanyeContainer kanyes={this.state.kanyes}/>
        <NewKanyeForm addKanye={this.addKanye}/>
      </div>
    );
  }
}
export default App;
