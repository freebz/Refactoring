function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);  
  return lines;
}



console.log(reportLines({
  name: "BigCo",
  location: "Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522",
}));
