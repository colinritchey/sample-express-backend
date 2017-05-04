import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'colinritchey'};

    this.update = this.update.bind(this);
  }

  componentDidMount(){

    $.ajax({
      url: 'api/users',
      data: { gitInfo: this.state }
    }).then(res => console.log( this.setState({username: res.login}) ));
    // debugger;

  }

  update(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(){
    console.log(this.state.user);

    // $.ajax({
    //   url: 'api/users'
    // }).then(res => console.log( this.setState({user: res.login}) ));
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.username}</h1>
        <form onSubmit={() => this.handleSubmit}>
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
