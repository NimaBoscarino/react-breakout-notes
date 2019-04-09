import React, {Component} from 'react';

class ClickableKanyeWest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      angry: false
    }
  }

  handleClick = () => {
    this.setState({
      angry: !this.state.angry
    })
  }

  render() {
    return (
      <img 
        onClick={this.handleClick}
        src={
        this.state.angry ? (
          'https://66.media.tumblr.com/tumblr_m9466vHFTz1rue873o1_400.png'
        ) : (
          'https://66.media.tumblr.com/b8cb54d763901ce0158385a1e12b0cca/tumblr_o8lzttyTbn1rue873o1_500.png'
        )
      } />
    )
  }
}

const playSound = (sound) => {
  var audio = new Audio('build/' + sound); // hahaha.wav
  audio.play()
}

const SoundKanyeWest = (props) => {
  return (
    <img 
      onClick={() => playSound(props.sound)}
      src={props.image} />
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kanyes: [
        {
          id: 1,
          sound: 'agh.wav',
          image: 'http://ordinaryquotes.com/images/20638/sns_thank_you_guys_for_t.jpg'
        },
        {
          id: 2,
          sound: 'dadada.wav',
          image: 'https://ih0.redbubble.net/image.432053491.2384/raf,360x360,075,t,fafafa:ca443f4786.jpg'
        },
        {
          id: 3,
          sound: 'heh.wav',
          image: 'http://pluspng.com/img-png/kanye-west-png-kanye-west-png-pic-png-image-450.png'
        }
      ]
    }

  }
  render() {
    return (
      <div>
        <h2>Click these Kanyes for anger toggling</h2>
        <ClickableKanyeWest />
        <ClickableKanyeWest />
        <ClickableKanyeWest />
        <ClickableKanyeWest />
        <ClickableKanyeWest />

        <h2>Click these Kanyes for Sounds!</h2>
        {
          this.state.kanyes.map(kanye => {
            return (
              <SoundKanyeWest
                key={kanye.id}
                image={kanye.image}
                sound={kanye.sound}  
              />
            )
          })
        }
      </div>
    );
  }
}
export default App;
