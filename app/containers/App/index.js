/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.node,
  };

  state = {
    scrolled: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    this.setState({ scrolled: scrollTop });
  }

  render() {
    return (
      <Layout>
        <Header scrolled={this.state.scrolled} />
        <Main>
          {React.Children.toArray(this.props.children)}
        </Main>
        <Footer />
      </Layout>
    );
  }
}
