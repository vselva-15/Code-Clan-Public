import React, { Component } from "react";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1,
          author: "Seneca",
          text: "Luck is what happens when preparation meets opportunity."
        },
        { id: 2,
          author: "Dr. Suess",
          text: "Don't cry because it's over, smile because it happened."
        }
      ]
    };

    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(newComment) {
    const updatedComments = [...this.state.data, newComment]
    this.setState({ data: updatedComments })
  }

  render() {
    return (
      <div className="comment-box">
        <h2>Enter a comment</h2>
        <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;
