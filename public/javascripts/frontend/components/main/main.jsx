import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.getRepos = this.getRepos.bind(this);
    this.getCommitsOfFirstRepo = this.getCommitsOfFirstRepo.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.user.username !== nextProps.user.username){
      this.setState({
        username: nextProps.user.username,
        avatar_url: nextProps.user.avatar_url
      });
    }
  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchUser(this.state);
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

export default Main;
