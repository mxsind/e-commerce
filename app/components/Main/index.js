import React from 'react';

import Root from './Root';
import Container from './Container';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Root>
        <Container>
          {React.Children.toArray(this.props.children)}
        </Container>
      </Root>
    );
  }
}
