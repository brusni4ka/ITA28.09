import React from "react";

interface IErrorBoundaryState {
  hasError: boolean;
  errorInfo: Error;
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {

  state: IErrorBoundaryState = { 
    hasError: false,
    errorInfo: new Error()
  };

  componentDidCatch = (error: Error) => {
    this.setState({ hasError: true, errorInfo: error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
      <h1>Что-то пошло не так.</h1>;
      <p>{this.state.errorInfo}</p>
      </>
      )
    }
    return this.props.children
  }
}

  export default ErrorBoundary;