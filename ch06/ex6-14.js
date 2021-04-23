function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(["location", aCustomer.location]);
}



console.log(reportLines({
  name: "BigCo",
  location: "Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522",
}));
