import * as React from "react";
import MainNav from "../components/MainNav";

type Props = {|
  childern: React.Node
|};

class Test extends React.Component<Props> {
  render() {
    return `test ${MainNav}`;
  }
}

export default Test;
