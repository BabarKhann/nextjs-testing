import Nav from "./Nav";
import "../styles/styles.css";

function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
}

export default Layout;
