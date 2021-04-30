// 제어 플래그를 탈출문으로 바꾸기
// Replace Control Flag with Break


for (const p of people) {
  if (!found) {
    if (p === "조커") {
      sendAlert();
      found = true;
    }
...
  }
}


// ▼


for (const p of people) {
  if (p === "조커") {
    sendAlert();
    break;
  }
...
}
