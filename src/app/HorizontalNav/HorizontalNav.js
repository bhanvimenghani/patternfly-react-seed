import React from 'react';
import { Nav, NavExpandable, NavItem, NavItemSeparator, NavList, NavGroup, PageHeader } from '@patternfly/react-core';

class HorizontalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onSelect = result => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;
    const nav = (
      <Nav onSelect={this.onSelect} variant="horizontal">
        <NavList>
          {Array.apply(0, Array(10)).map(function(x, i) {
            const num = i + 1;
            return (
              <NavItem key={num} itemId={num} isActive={activeItem === num} href="#">
                Horizontal nav item {num}
              </NavItem>
            );
          })}
        </NavList>
      </Nav>
    );
    return <PageHeader topNav={nav} />;
  }
}

export default HorizontalNav;