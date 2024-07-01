import React from 'react';
import CommentCard from './CommentCard';

const CommentList = ({ comments,setComments }) => {
    function onDelete(id){
    setComments(comments.filter((comment) => comment.$id !== id));
    }
    if(comments.length!==0)return (
        <div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Comments</h3>
            {comments.map((comment) => (
                <CommentCard key={comment.$id} comment={comment} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default CommentList;
