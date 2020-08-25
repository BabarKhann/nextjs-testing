import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

function Home(props) {
  const { posts } = props;
  return (
    <Layout>
      <div className="container">
        <h3>Posts</h3>
        {posts.map((post) => (
          <div className="card text-white bg-primary mb-3" key={post.id}>
            <div className="card-header">{post.title}</div>
            <div className="card-body">
              {/* <h4 className="card-title">{post.title}</h4> */}
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

Home.getInitialProps = async (context) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await data.json();

  return {
    posts: result,
  };
};

export default Home;
