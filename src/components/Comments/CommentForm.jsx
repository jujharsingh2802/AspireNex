import React, { useState, useEffect } from 'react';
import commentService from "../../appwrite/service"; 
import authService from "../../appwrite/auth"; 

function CommentForm({ articleId, onCommentAdded ,status }) {
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [addAns, setAddAns] = useState(false);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const user = await authService.getCurrentUser();
                setCurrentUser(user);
            } catch (error) {
                console.error('Error fetching current user:', error);
            }
        };

        fetchCurrentUser();
    }, []);

    const handleChange = (e) => {
        setContent(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            if (!currentUser) {
                throw new Error('User not authenticated.'); 
            }

            const userId = currentUser.$id;
            const userName = currentUser.name;
            // Create comment using Appwrite service
            await commentService.createComment({ articleId, userId, userName, content });

            // Reset form state
            setContent('');
            setIsSubmitting(false);

            // Notify parent component about the new comment
            onCommentAdded();
        } catch (error) {
            console.error('Error submitting comment:', error);
            setIsSubmitting(false);
        }
    };

    const handleAddAnsClick = () => {
        setAddAns(true);
    };
    const questionId = status==="question";
    return (
        <div>
            {!addAns ? (
                <div className="dark:text-white font-serif">
                    <button
                        onClick={handleAddAnsClick}
                        className='bg-[#333333] border-white border-[2px] mt-2 ml-2 hover:bg-[#1c1c1c] hover:border-[3px] rounded-lg px-2 py-1.5'
                    >
                        Add Answer
                    </button>
                </div>
            ) : (
                <div>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <textarea
                            value={content}
                            onChange={handleChange}
                            placeholder={questionId? "Add your Answer...." : "Add your comment..."}
                            className="block w-full px-4 py-3 rounded-lg bg-gray-200 border-transparent resize-none focus:border-gray-500 focus:bg-white focus:ring-0"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 w-full px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                        >
                            {  isSubmitting ? 'Submitting...' : questionId? 'Submit Answer' :'Post Comment'}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default CommentForm;
