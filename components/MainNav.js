// @flow
import * as React from "react";
import Link from "next/link";

class MainNav extends React.Component<{}> {
  render() {
    return (
      <div>
        <Link href="/index">Home</Link> <Link href="/about">About</Link>
      </div>
    );
  }
}

export default MainNav;
