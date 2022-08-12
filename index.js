// Write your solution in this file!
const employee = {
    name: 'Anne',
    streetAddress: 'kenya 254',
}
function updateEmployeeWithKeyAndValue () {
    const updatedEmployee={...employee};
    updatedEmployee['name'] = 'Sam';
    updatedEmployee['streetAddress'] = '11 Broadway';
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue () {
    employee ['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey () {
    const employeeClone={...employee};
    delete employeeClone.name;
    return employeeClone;
}
function destructivelyDeleteFromEmployeeByKey () {
    delete employee.name;
    return employee;
}