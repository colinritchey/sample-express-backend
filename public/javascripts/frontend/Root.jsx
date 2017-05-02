import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', data: ''};
  }

  componentDidMount(){

    $.ajax({
      url: 'api/users'
    }).then(res => console.log( this.setState({user: res.login}) ));
    // debugger;

  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.user}</h1>
      </div>
    );
  }
}

export default Root;
