import React from 'react';

export default class Home extends React.Component {
  state = {
    message: 'Hello World!',
  };

  render() {
    const { message } = this.state;
    return <span>{message}</span>;
  }
}
