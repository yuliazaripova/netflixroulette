import * as React from 'react';

export default class ErrorButton extends React.Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
     throw new Error()
      console.log('error')
    }

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => this.setState({renderError: true})}>
        Throw Error
      </button>
    );
  }
}