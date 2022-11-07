import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = function (props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>delete</MyButton>
                </div>
            </div>
        </div>
    )

}

export default PostItem;