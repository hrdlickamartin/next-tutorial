// @flow
import * as React from 'react';
import MainNav from './MainNav';
import 'isomorphic-unfetch';
import Footer from './Footer';

const Container = props => <div className="container">{props.children}</div>;

type Props = {
  children: React.Node,
};

class Page extends React.Component<Props> {
  render() {
    const children = this.props.children;

    return (
      <Container>
        <MainNav />
        {children}
        <Footer createdBy="Martin Hrdlicka" />
      </Container>
    );
  }
}

export default Page;
