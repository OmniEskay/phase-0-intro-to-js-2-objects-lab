let employee = {
    name: 'Jane Smith',
    streetAddress: '456 Oak Avenue'
  };

  function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    const newEmployee = {
      ...employeeObj,
      [key]: value 
    };
    return newEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
  }

  function deleteFromEmployeeByKey(employeeObj, key) {
    const { [key]: removedValue, ...newEmployee } = employeeObj;
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
  }
  