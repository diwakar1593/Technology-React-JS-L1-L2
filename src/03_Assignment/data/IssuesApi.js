import axios from "axios";


export default class IssuesApi {
    static getAllIssues() {
        return axios.get('http://localhost:3001/issues')
            .then(response => response.data)
            .catch(error => {
                console.log(`getAllIssues failed: ${error.message}`);
                throw error;
            });
    }
}