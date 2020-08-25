import Nav from "./Nav";
import "../styles/styles.css";

import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>NextJs Testing</title>
        <link rel="shortcut icon" href="" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
      </Head>
      <Nav />
      {props.children}
    </>
  );
}

export default Layout;
