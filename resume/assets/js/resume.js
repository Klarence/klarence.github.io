const getAge = function () {
  const startDate = new Date("2014/09/1");

  const today = new Date();
  const workStartDate = new Date(startDate);
  const diff = today - workStartDate;
  return Math.floor(diff / 31536000000);
};

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById("yearsExp").innerHTML = getAge();
})
