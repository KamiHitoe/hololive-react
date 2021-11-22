import React from 'react';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    //bind
    this.state = {
      input: '',
      messages: [],
    }
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }
  handleClick() {
    this.setState({
      input: '',
      messages: [
        ...this.state.messages,
        this.state.input,
      ]
    })
  }
  render() {
    return (
      <div>
        <textarea onChange={this.handleChange.bind(this)} rows={5} cols={30}></textarea>
        <br />
        <button onClick={this.handleClick.bind(this)}>push message</button>
        <ol style={{maxWidth: "30%", margin: "30px auto"}}>
          {this.state.messages.map((e,i) => 
            <li key={i}>{e}</li>
          )}
        </ol>
      </div>
    )
  }
}

