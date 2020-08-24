const { default: Nav } = require("./Nav");

function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
    </>
  );
}

export default Layout;
