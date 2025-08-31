import IssuesData from "./IssuesData";

export default class IssuesApi {
    static getAllIssues() {
        return IssuesData.issues;
    }
}