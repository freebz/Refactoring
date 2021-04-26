// 기본형을 객체로 바꾸기
// Replace Primitive with Object


orders.filter(o => "high" === o.priority
	        || "rush" === o.priority);


// ▼


orders.filter(o => o.priority.heigherThan(new Priority("normal")))
