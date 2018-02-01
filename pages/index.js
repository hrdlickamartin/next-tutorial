// @flow
import * as React from "react";
import Page from "../components/Page";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

type Props = {|
  stars: number
|};

type State = {|
  email: string,
  password: string
|};

const initialState = {
  email: "",
  password: ""
};

class Index extends React.Component<Props, State> {
  // static getInitialProps({}) {
  //   return { now: Date.now() };
  // }

  state = initialState;

  // static async getInitialProps() {
  //   const res = await fetch("https://api.github.com/repos/zeit/next.js");
  //   const json = await res.json();
  //   return { stars: json.stargazers_count };
  // }

  // componentDidMount() {
  //   this.setState(state => ({}));
  // }
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

  onButtonClick = () => console.log("Hello world");

  handleFormSubmit = (e: *) => {
    e.preventDefault();
    // validate !
    const variables = {
      email: this.state.email,
      password: this.state.password
    };
  };

  render() {
    //return <div>Seconds: {this.props.now}</div>;
    return (
      <Page>
        <Text>Login or Signun</Text>
        <form onSubmit={this.handleFormSubmit}>
          <TextInput
            name="email"
            value={this.state.email}
            onChange={email => this.setState({ email })}
          />
          <TextInput
            name="password"
            value={this.state.password}
            onChange={password => this.setState({ password })}
          />
          <Button>Submit</Button>
        </form>
      </Page>
      //<div>Seconds: {this.props.stars}</div>
    );
  }
}

export default Index;
