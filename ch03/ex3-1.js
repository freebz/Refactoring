managerName = aPerson.department.manager.name;


managerName = aPerson.department.managerName // 관리자 객체(manager)의 존재를 숨김
managerName = aPerson.manager.name // 부서 객체(department)의 존재를 숨김
managerName = aPerson.managerName // 부서 객체와 관리자 객체 모두의 존재를 숨김


managerName = aPerson.department.manager.name
report = `${managerName}께
${aPerson.anme} 님의 작업 로그
...`
console.log(report);


console.log(reportAutoGenerator.report(aPerson));
