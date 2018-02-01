// @flow
import * as React from "react";

type Props = {|
  value: string,
  name?: string,
  onChange: (text: string) => void
|};

class TextInput extends React.PureComponent<Props> {
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name={this.props.name}
          value={this.props.value}
        />

        <style jsx>{`
          input {
            font-size: 30px;
            line-height: 1.5;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default TextInput;
