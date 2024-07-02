import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, CommentForm, CommentList } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import commentService from "../appwrite/service";

export default function Post() {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    let status = post?.status ;

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    status = post?.status ;
                }
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);
    
    const fetchComments = async () => {
        try {
            const response = await commentService.getCommentsForArticle(post.$id);
            if (response && response.documents) {
                setComments(response.documents);
            } else {
                console.log('No comments found or an error occurred.');
            }
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        if (post) {
            fetchComments();
        }
    }, [post]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    const handleCommentAdded = () => {
        fetchComments();
    };
    const quesClasses = status==="question" ?  "" :null;
    const BlogClasses = status==="blogPost" ?  "border mb-4" :null;
    return post ? (
        <div className="py-8">
            <Container>
                <div className={`w-full flex justify-center  relative ${quesClasses} ${BlogClasses} rounded-xl p-2 object-contain`}>
                   {status==="blogPost" && <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl max-h-[90vh]"
                    />}

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="bg-white p-3 rounded-xl dark:bg-[#2c2929] dark:text-white">
                    <div className="w-full mb-6">
                        <h1 className="text-3xl font-bold">{post.title}</h1>
                        <div className="bg-yellow-400 mt-2 w-96 h-[3px] rounded-full"></div>
                    </div>
                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                </div>
                <CommentForm articleId={post.$id} onCommentAdded={handleCommentAdded} status={status} />
                <CommentList comments={comments} setComments={setComments} status={status} />
            </Container>
        </div>
    ) : null;
}
