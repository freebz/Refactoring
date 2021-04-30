// 조건문 분해하기
// Decompose Conditional


if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd))
  charge = quantity * plan.summerRate;
else
  charge = quantity * plan.regularRate + plan.regularServiceCharge;


// ▼


if (summer())
  charge = summerCharge();
else
  charge = regularCharge();
