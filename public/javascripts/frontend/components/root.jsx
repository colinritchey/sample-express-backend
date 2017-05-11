import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'colinritchey', avatar_url: "", firstRepoName: ""};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getRepos = this.getRepos.bind(this);
    this.getCommitsOfFirstRepo = this.getCommitsOfFirstRepo.bind(this);
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

  getRepos(e){
    e.preventDefault();
    $.ajax({
      url: 'api/repos',
      data: { gitInfo: this.state }
    }).then(res => console.log( this.setState({ firstRepoName: res[0].name}) ));
  }

  getCommitsOfFirstRepo(e){
    e.preventDefault();
    $.ajax({
      url: 'api/commits',
      data: { gitInfo: this.state }
    }).then(res => console.log( res ));
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

          <input type="submit" >

          </input>

        </form>

        <button onClick={this.getRepos}>Click here first</button>
        <button onClick={this.getCommitsOfFirstRepo}>click here second</button>
      </div>
    );
  }
}

export default Root;
