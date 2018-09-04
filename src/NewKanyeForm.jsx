import React, {Component} from 'react';


class NewKanyeForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            image: '',
            sound: ''
        }

        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeSound = this.handleChangeSound.bind(this);    
        this.handleNewKanye = this.handleNewKanye.bind(this);    
    }

    handleChangeImage(event) {
        let image = event.target.value
        this.setState({
            image: image
        })
    }

    handleChangeSound(event) {
        let sound = event.target.value
        this.setState({
            sound: sound
        })
    }

    handleNewKanye() {
        this.props.addKanye({
            image: this.state.image,
            sound: this.state.sound
        })
    }

    render() {
        return (
        <div>
            <input placeholder="image path" type="text" value={this.state.image} onChange={this.handleChangeImage} />
            <input placeholder=".mp3 path" type="text" value={this.state.sound} onChange={this.handleChangeSound} />
            <button onClick={this.handleNewKanye}>ADD SOUND</button>
        </div>
        );
    }
}
export default NewKanyeForm;
