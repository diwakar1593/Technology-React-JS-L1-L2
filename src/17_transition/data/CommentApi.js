import CommentData from "./CommentData";

export default class CommentApi {
    static getAllComments() {
        return CommentData.comments;
    }
}