import React from 'react';
import CommentCard from './CommentCard';

const CommentList = ({ comments,setComments,status }) => {
    function onDelete(id){
    setComments(comments.filter((comment) => comment.$id !== id));
    }
    if(comments.length!==0)return (
        <div>
            <h3 className="text-xl font-bold my-2 dark:text-white">{status==="question"?"Answer":"Comments"}</h3>
            {comments.map((comment) => (
                <CommentCard key={comment.$id} comment={comment} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default CommentList;
