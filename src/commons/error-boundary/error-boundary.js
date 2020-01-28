import React from 'react';
import page404 from "../../components/layout/page404/page404";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <page404 />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
