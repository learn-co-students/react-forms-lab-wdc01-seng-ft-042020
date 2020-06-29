import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        tweet: ''
    };
  }

  writeTweet = (e) => {
      this.setState({tweet: e.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={this.writeTweet}/>
        <p>{this.props.maxChars - this.state.tweet.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
