import React from "react";
import { connect } from "react-redux";
import { getPostsActions } from "../redux/postsActions";
import { FirebaseAuth, FirebaseDatabase } from "../firebase/FirebaseService";

class Posts extends React.Component {
  componentDidMount() {
    const { getPostsRequest, getPostsSuccess, getPostsError } = this.props;

    console.log(FirebaseDatabase);

    FirebaseDatabase.collection("todos")
      .get()
      .then(snapshot =>
        snapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        }))
      )
      .then(response => console.log(response));

    FirebaseAuth.signInWithEmailAndPassword(
      "dumancic.s@gmail.com",
      "12344321"
    ).then(response => console.log(response.user.toJSON()));

    // FirebaseAuth.signInWithEmailAndPassword(
    //   "dumancic.s@gmail.com",
    //   "12344321"
    // ).then(response => console.log(response.user.toJSON()));

    getPostsRequest();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => {
        getPostsSuccess(posts);
      })
      .catch(error => getPostsError(error));
  }

  render() {
    const { posts, postsAreChanging } = this.props;

    if (postsAreChanging) {
      return <p>Loading...</p>;
    }

    return (
      <div className="wrapper">
        <p>niš nemamo</p>

        {posts &&
          posts.map(item => (
            <div key={item.id}>
              <p>{item.id}</p>
              <h2>{item.title}</h2>
            </div>
          ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    posts: state.posts.posts,
    postsAreChanging: state.posts.postsAreChanging,
    error: state.posts.error
  }),
  dispatch => ({
    getPostsRequest: () => dispatch(getPostsActions.postsRequest()),
    getPostsSuccess: posts => dispatch(getPostsActions.postsSuccess(posts)),
    getPostsError: error => dispatch(getPostsActions.postsSuccess(error))
  })
)(Posts);
