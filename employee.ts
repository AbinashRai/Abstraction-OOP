abstract class Employee {
  protected name: string;
  protected id: number;
  constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
  }
  abstract calculateSalary(): number;

  displayInfo() {
    console.log(`Employee ${this.name} has an id of ${this.id}`);
  }
}

class FullTimeEmployee extends Employee {
  constructor(name: string, id: number, protected salary: number) {
    super(name, id);
  }

  calculateSalary(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    name: string,
    id: number,
    protected hourlyRate: number,
    protected hoursWorked: number
  ) {
    super(name, id);
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const fulltime = new FullTimeEmployee("Jake", 11, 20000);
console.log("The fulltime salary is :", fulltime.calculateSalary());

const partTime = new PartTimeEmployee("Billy", 12, 500, 20);
console.log("the part time salary is :", partTime.calculateSalary());
