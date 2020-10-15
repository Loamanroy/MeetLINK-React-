import React from 'react';
import classes from './MyPosts.module.css';
import '../../../fonts.css';
import Post from "./Posts/Post";


const MyPosts = (props) => {

    const PostElement = props.PostElement.map(Posts => <Post
        id={Posts.id}
        message={Posts.message}
        submessage={Posts.submessage}
        like={Posts.likes}
        dislike={Posts.dislikes}
    />);

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostTextActionCreator(newText);
    }

    return (
        <div className={classes.posts__wrapper}>
            <div className={classes.posts__title}>
                My posts
            </div>
            <div className={classes.posts__inputs}>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          className={classes.posts__input}
                          type="text"
                          value={props.newPostText}/>

                <input onClick={onAddPost} className={classes.posts__btn} type="submit" value="Add post"/>
            </div>
            <div className={classes.posts}>
                {PostElement}
            </div>

        </div>
    );
}

export default MyPosts;