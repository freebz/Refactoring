class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }
  get name() {return this._name;}
  get course() {return this._courses;}
  set courses(aList) {this._courses = aList;}
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name()       {return this._name;}
  get isAdvanced() {return this._isAdvanced;}
}

numAdvancedCourses = aPerson.courses
  .filter(c => c.isAdvanced)
  .length
;

// 클라이언트
const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

// 클라이언트
for(const name of readBasicCourseNames(filename)) {
  aPerson.courses.push(new Course(name, false));
}
