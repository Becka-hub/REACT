import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
class Accueil extends Component {

    render() {
        const { posts } = this.props;

        const handleClick = (id) => {
            this.props.deletePost(id);
        }

        const postDate = posts.length ? (
            posts.map(post => {
                return (
                    <div className="base" key={post.id}>
                        <Link to={"/" + post.id}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.body}</p>
                        <button onClick={()=>handleClick(post.id)}>Suprimer</button>
                    </div>
                );
            })
        ) : (
            <p>Aucun article pour le moment</p>
        )

        return (
            <div className="accueil">
                <h2>Page d'accueils</h2>
                {postDate}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({ type: "DELETE_POST", id: id })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Accueil);