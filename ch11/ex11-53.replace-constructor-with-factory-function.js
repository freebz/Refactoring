// 생성자를 팩터리 함수로 바꾸기
// Replace Constructor with Factory Function


leadEngineer = new Employee(document.leadEngineer, 'E');


// ▼


leadEngineer = createEngineer(document.leadEngineer);
