import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorInfo: "",
  };

  componentDidCatch = (error: Error) => {
    this.setState({ hasError: true, errorInfo: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorInfo}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
