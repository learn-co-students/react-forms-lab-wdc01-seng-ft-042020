import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInput = (event) => {
this.setState({
  message: event.target.value
})
  }


  render() {
    let number = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(event) => this.handleInput(event)}/>
        {number}
      </div>
    );
  }
}

export default TwitterMessage;
