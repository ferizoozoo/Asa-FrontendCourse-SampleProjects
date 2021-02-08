import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

axios.defaults.headers.common["auth-token"] = localStorage.getItem(
  "auth-token"
);

axios.interceptors.response.use(null, (ex) => {
  if (ex.response.status === 500) {
    alert("An Unknown Exception occured.");
  }

  toast.error("an error occured.....");
});

class Dashboard extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(baseUrl);
    this.setState({
      posts,
    });
  }

  addPost = async () => {
    const data = { title: "test", body: "test test test" };
    const { data: post } = await axios.post(baseUrl, data);

    const posts = [post, ...this.state.posts];
    this.setState({
      posts,
    });
  };

  handleUpdate = async () => {
    const data = { title: "Title Updated", body: "bla bla bla" };

    const { data: post } = await axios.put(baseUrl + "/" + post.id, data);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = post;

    this.setState();
  };

  handleDelete = async (id) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((x) => x.id !== id);
    this.setState({
      posts,
    });

    try {
      await axios.delete(baseUrl + "/" + id);
    } catch (ex) {
      this.setState({
        posts: originalPosts,
      });
    }
  };

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>Posts</h1>
        <button className="btn btn-primary m-2" onClick={this.addPost}>
          Add New Post
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update Post
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete Post
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
