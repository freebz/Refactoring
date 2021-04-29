// 반복문을 파이프라인으로 바꾸기
// Replace Loop with Pipeline


const names = [];
for (const i of input) {
  if (i.job === "programmer")
    names.push(i.name);
}


// ▼


const names = input
  .filter(i => i.job === "programmer")
  .map(i => i.name)
;
