import axios from 'axios';  // npm install axios


// async await approach
// ES8 or ES2017 way of writing promise code
export default class CommentApi {
    static async getAllComments() {
        // Dev or Prod
        try {
            const response = await axios.get('http://localhost:3001/comments');
            return response.data;
        } catch(error) {
            console.log(`getAllComments failed: ${error.message}`);
            throw error;
        }
    }
}

/*
// ES2015 Promise
export default class CommentApi {
    static getAllComments() {
        return axios.get('http://localhost:3001/comments')
            .then(response => response.data)
            .catch(error => console.log(`getAllComments failed: ${error.message}`));
    }
}
    */