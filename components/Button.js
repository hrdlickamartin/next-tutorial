// @flow
import * as React from "react";

type Props = {|
  bold?: boolean,
  children: React.Node
|};

class Button extends React.PureComponent<Props> {
  render() {
    return (
      <React.Fragment>
        <button>{this.props.children}</button>
        <style jsx>{`
          span {
            font-size: 30px;
            line-height: 1.5;
            color: #333;
            border-radius: 10px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Button;
