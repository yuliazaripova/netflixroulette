import * as React from 'react';

import './error-boundary.css';

interface IErrorProps {

}

interface IErrorState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<IErrorProps, IErrorState> {
  constructor(props: IErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
   console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
          <h1 className="error-boundary_title">Uppps... something has gone wrong</h1>
      );
    }
    return this.props.children; 
  }
}
