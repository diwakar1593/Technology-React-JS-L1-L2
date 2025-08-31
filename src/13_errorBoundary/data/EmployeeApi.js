import EmployeeData from "./EmployeeData";

export default class EmployeeApi {
    static getAllEmployees() {
        return EmployeeData.employees;
    }
}