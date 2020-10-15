import React from 'react';
import '../../../fonts.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>
{
    return {
        updateNewPostTextActionCreator: state.ProfileData,
        newPostText: state.ProfileData.newPostText,
        PostElement: state.ProfileData.PostsData.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostTextActionCreator: (newText) => {
            let action = updateNewPostTextActionCreator(newText);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;