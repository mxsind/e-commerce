
import React from 'react';

import Root from './Root';
import Container from './Container';

export default class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    scrolled: React.PropTypes.number,
  }

  render() {
    const { scrolled } = this.props;
    return (
      <Root scrolled={scrolled}>
        <Container scrolled={scrolled}>
          Header Component
        </Container>
      </Root>
    );
  }
}
