import React from 'react';

class FlowContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: 'cacao'
    };
  }

  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }
  render() {
    const { selectTab } = this.state;
    const { tabActive } = this.props;

    return (
      <div className={`flow-content-component`}>
        <div className="flow-content-component--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</div>
        <div className="flow-content-component--slider"></div>
      </div>
    );
  }
};

export default FlowContent;
