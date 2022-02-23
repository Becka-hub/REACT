import React, { Component } from 'react'
import { connect } from 'react-redux';
class Post extends Component {
    render() {
        const post = this.props.post ? (
            <div className="post">
                <h2>{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
            </div>
        ) : (
            <p>L'article n'existe pas</p>
        );

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post => post.id === id))
    };
}
export default connect(mapStateToProps)(Post);