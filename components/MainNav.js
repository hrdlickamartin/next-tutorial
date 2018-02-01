// @flow
import * as React from "react";
import Link from "next/link";

class MainNav extends React.Component<{}> {
  render() {
    return (
      <div>
        <Link href="/index">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  }
}

export default MainNav;
