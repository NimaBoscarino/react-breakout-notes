import React, {Component} from 'react';

const playSound = (sound) => {
    var audio = new Audio('build/' + sound); // hahaha.wav
    audio.play()
}

const SingleKanye = (props) => {
    return (
        <img onClick={() => playSound(props.kanye.sound)} src={props.kanye.image} />
    )
}


class KanyeContainer extends Component {
  render() {
    return (
      <div>
        {
            this.props.kanyes.map(kanye => (
                <SingleKanye key={kanye.sound} kanye={kanye} />
            ))
        }
      </div>
    );
  }
}
export default KanyeContainer;
