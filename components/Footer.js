// @flow
import * as React from 'react';

type Props = {
  createdBy: string,
};

class Footer extends React.PureComponent<Props> {
  render() {
    return <div>Created by {this.props.createdBy}</div>;
  }
}

export default Footer;
