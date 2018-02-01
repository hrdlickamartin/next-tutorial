// @flow
import * as React from "react";

type Props = {|
  children: string
|};

class Text extends React.PureComponent<Props> {
  render() {
    return (
      <span>
        {this.props.children}
        <style jsx>{`
          span {
            font-size: 30px;
            line-height: 1.5;
            color: #333;
            border-radius: 10px;
          }
        `}</style>
      </span>
    );
  }
}

export default Text;
