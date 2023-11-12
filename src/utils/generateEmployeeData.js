const levels = [0, 1, 2, 3, 4, 5];
const status=["A promotion and consequential pay increase","No change","A demotion","Terminatiion"];

const generateEmployeeData = (numEmployees) => {
  const employees = [];

  for (let i = 1; i <= numEmployees; i++) {
    const level = levels[Math.floor(Math.random() * levels.length)];
    const stat = status[Math.floor(Math.random() * status.length)];

    const employee = {
      id: i,
      name: `employee ${i}`,
      level: `level ${level}`,
      // Add more properties as needed
    };

    // Calculate salary based on the employee's level
    employee.salary = calculateSalary(level);
    employee.status =  stat;
    employee.designation= role(level)

    employees.push(employee);
  }

  return employees;
};

const calculateSalary = (level) => {
  switch (level) {
    case 0:
      return 70000;
    case 1:
      return 100000;
    case 2:
      return 120000;
    case 3:
      return 180000;
    case 4:
      return 200000;
    case 5:
      return 250000;
    default:
      return 0;
  }
};


const role = (job) => {
    switch (job) {
      case 0:
        return "cleaner";
      case 1:
        return "driver";
      case 2:
        return "tech support";
      case 3:
        return "customer care";
      case 4:
        return "devops";
      case 5:
        return "senior engr";
      default:
        return 0;
    }
  };

export default generateEmployeeData;
