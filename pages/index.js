// @flow
import * as React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { validateEmailPassword } from '../backend/validation';
import * as validation from '../backend/validation';
import { ValidationError } from '../components/validationError';

type Props = {|
  stars: number,
|};

type Fields = {|
  email: string,
  password: string,
|};

type State = {|
  ...Fields,
  validationErrors: validation.ValidationErrors<Fields>,
|};

const initialState = {
  email: '',
  password: '',
  validationErrors: {},
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

  onButtonClick = () => console.log('Hello world');

  handleFormSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const variables = {
      email: this.state.email,
      password: this.state.password,
    };

    const validationErrors = validation.validateEmailPassword(variables);
    if (validationErrors) {
      this.setState({ validationErrors });
      return;
    }
    this.setState(initialState);
  };

  render() {
    const { validationErrors } = this.state;
    //return <div>Seconds: {this.props.now}</div>;
    // this.state.validationError.email;
    return (
      <Page>
        <Text>Login or Signun</Text>
        <form onSubmit={this.handleFormSubmit}>
          <ValidationError error={validationErrors.email} />
          <TextInput
            name="text"
            value={this.state.email}
            onChange={email => this.setState({ email })}
          />
          <ValidationError error={validationErrors.password} />
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
