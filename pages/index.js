// @flow
import * as React from "react";
import Page from "../components/Page";

type Props = {|
  stars: number
|};

type State = {|
  count: number
|};

class Index extends React.Component<Props, State> {
  // static getInitialProps({}) {
  //   return { now: Date.now() };
  // }

  state = {
    count: 0
  };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
  }

  componentDidMount() {
    this.setState(state => ({}));
  }
  //const Hello = (props) => `Hello ${props.fn()}`;

  // state = {
  //   seconds: Date.now();
  // };
  //
  // tick = () => {
  //   this.setState(prevState => ({
  //     seconds: prevState.seconds + 1
  //   }));
  // };
  //
  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000);
  // }
  //
  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    //return <div>Seconds: {this.props.now}</div>;
    return (
      <Page>
        <div>Seconds: {this.props.stars}</div>
      </Page>
    );
  }
}

export default Index;
