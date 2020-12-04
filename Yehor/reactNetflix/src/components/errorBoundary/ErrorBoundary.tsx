import React, { useState } from "react";

interface IErrorBoundaryState {
  hasError: boolean;
  errorInfo: Error;
}

type IErrorBoundaryProps = {
  // children: JSX.Element; ???????
  children: any;
}

const ErrorBoundary = (props: IErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);
  const [errorInfo, setErrorInfo] = useState(Error);

  // componentDidCatch = (error: Error) => {
  //   this.setState({ hasError: true, errorInfo: error });
  // }
  try {
    return props.children;
  } catch (error) {
    setHasError(true);
    setErrorInfo(error);
  }

  if (hasError) {
    return (
      <>
        <h1>Что-то пошло не так.</h1>;<p>{errorInfo}</p>
      </>
    );
  }
};
export default ErrorBoundary;
