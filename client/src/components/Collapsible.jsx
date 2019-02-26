import React from "react";
import MenuList from './MenuList.jsx';
// import styled from 'styled-components';
const { styled } = window;

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {

    const { title, children } = this.props;
    return (
      // className={this.state.isExpanded ? Panel.expand : ''}
      <Panel onClick={this.handleToggle}>

        <PanelCollapse>

          <PanelBody expanded={this.state.isExpanded}>
            {children}
          </PanelBody>

        </PanelCollapse>
        <div className='panel-heading'>
          <h2>{title}</h2>
        </div>
      </Panel>
    );
  }
}

export default Collapsible;

const Panel = styled.div`
  cursor: pointer;
`;

const PanelCollapse = styled.div`
  ${'' /* overflow:hidden; */}
`;

const PanelBody = styled.div`
  display: ${(props) => props.expanded ? 'block' : 'none'};
  font-weight: bold;
`;