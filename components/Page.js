// @flow
import * as React from "react";
import MainNav from "./MainNav";
import "isomorphic-unfetch";

const Container = props => <div className="container">{props.children}</div>;

type Props = {
  children: React.Node
};

class Page extends React.Component<Props> {
  render() {
    const children = this.props.children;

    return (
      <Container>
        <MainNav />
        {children}
      </Container>
    );
  }
}

export default Page;
