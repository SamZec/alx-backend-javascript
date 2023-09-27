export default function createReportObject(employeesList) {
  const emps = {
    allEmployees: employeesList,
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length
    }
  };
  
  return emps;
}
