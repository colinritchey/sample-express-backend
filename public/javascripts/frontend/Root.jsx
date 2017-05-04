import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'colinritchey', avatar_url: ""};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

    $.ajax({
      url: 'api/users',
      data: { gitInfo: this.state }
    }).then(res => console.log( this.setState({username: res.login, avatar_url: res.avatar_url}) ));

  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    $.ajax({
      url: 'api/users',
      data: { gitInfo: this.state }
    }).then(res => console.log( this.setState({username: res.login, avatar_url: res.avatar_url}) ));
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.username}</h1>
        <img src={this.state.avatar_url}></img>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            >
          </input>

          <input
            type="submit"
            >

          </input>

        </form>
      </div>
    );
  }
}

export default Root;
