import axios from "axios";

const BASE_URL = 'http://localhost:3001/issues';

export default class IssuesApi {
    static async getAllIssues() {
        try {
            const response = await axios.get(BASE_URL);
            return response.data;
        } catch (error) {
            console.log(`getAllIssues failed: ${error.message}`);
            throw error;
        }
    }

    static async getIssueById(description) {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.log(`getIssueById failed: ${error.message}`);
            throw error;
        }
    }

    static async saveIssue(issue) {
        try {
            const response = await axios.post(BASE_URL, issue);
            return response.data;
        } catch (error) {
            console.log(`saveIssue failed: ${error.message}`);
            throw error;
        }
    }
}