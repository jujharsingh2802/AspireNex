import React from 'react';
import { useSelector } from 'react-redux';
import commentService from '../../appwrite/service';

const CommentCard = ({ comment, onDelete }) => {
    const userData = useSelector((state) => state.auth.userData);
    const isCommentOwner = comment.userId === userData.$id;

    const handleDelete = async () => {
        try {
            await commentService.deleteComment(comment.$id);
            onDelete(comment.$id);
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

    return (
        <div className="comment bg-gray-100 p-2 rounded mb-2">
            <p><strong>{comment.userName}:</strong> {comment.content}</p>
            {isCommentOwner && (
                <button className="text-red-500 hover:text-red-700 mt-1" onClick={handleDelete}>
                    Delete
                </button>
            )}
        </div>
    );
};

export default CommentCard;
