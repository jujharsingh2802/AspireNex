import { nanoid } from "nanoid";
import conf from "../conf/conf";
import { Client, Databases, Query } from 'appwrite';

class CommentService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createComment({ articleId, userId,userName, content }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCommentCollectionId,
                nanoid(), 
                {
                    articleId,
                    userId,
                    userName,
                    content,
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createComment ::error", error);
            throw error;
        }
    }

    async getCommentsForArticle(articleId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCommentCollectionId,
                [Query.equal("articleId", articleId)]
            );
        } catch (error) {
            console.log("Appwrite service :: getCommentsForArticle ::error", error);
            throw error;
        }
    }
    async deleteComment(commentId) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCommentCollectionId,
                commentId
            );
        } catch (error) {
            console.log("Appwrite service :: deleteComment ::error", error);
            throw error;
        }
    }
}

const commentService = new CommentService();
export default commentService;
