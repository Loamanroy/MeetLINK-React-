import React from 'react';
import classes from './Post.module.css';
import '../../../../fonts.css';




const Post = (props) => {



    return (
          <div className={classes.posts__row}>
            <div className={classes.posts__item}>
                <img src="https://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" alt=""/>
                <div className={classes.posts__item__body}>
                    <p className={classes.posts__item__header}>{props.message}</p>
                    <p className={classes.posts__item__desc}>{props.submessage}</p>
                    <div className={classes.item__like}>
                        <span>Likes: {props.like}</span>
                        <span>Dislike: {props.dislike}</span>
                    </div>
                </div>
            </div>
          </div>
    );
}

export default Post;