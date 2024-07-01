import React, { useState, useEffect } from 'react';
import { Container, PostCard,Loading } from '../components';
import appwriteService from "../appwrite/config";
import { Query } from 'appwrite';

function Blogs() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts([Query.equal("status", "blogPost")]);
                if (response && response.documents) {
                    setPosts(response.documents);
                } else {
                    console.log('No posts found or an error occurred.');
                }
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);
    if(posts.length===0) return <Loading />
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2  w-full md:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Blogs;
