// 함수를 명령으로 바꾸기
// Replace Function with Command


function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  // 긴 코드 생략
}


// ▼


class Score {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
    // 긴 코드 생략
  }
}
