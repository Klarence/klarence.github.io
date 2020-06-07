var getAge = function () {
  var dateString = new Date("2009/09/1");

  var today = new Date();
  var workStartDate = new Date(dateString);
  var diff = today-workStartDate;
  var age = Math.floor(diff/31536000000);
  // var age = today.getFullYear() - workStartDate.getFullYear();
  // var m = today.getMonth() - workStartDate.getMonth();
  // if (m < 0 || (m === 0 && today.getDate() < workStartDate.getDate())) {
  //     age--;
  // };
  return age;
}

document.addEventListener('DOMContentLoaded', (event) => {
  // console.log('DOM is ready');
  // console.log(getAge());
  document.getElementById("yearsExp").innerHTML = getAge();
})

// DomReady.ready(function() {
//   alert('dom is ready');
//   console.log('getAge()');
//   document.getElementById("yearsExp").innerHTML = getAge();
// });


// var birthdate = new Date("2009/1/1");
// var cur = new Date();
// var diff = cur-birthdate;
// var age = Math.floor(diff/31536000000);
// alert(age);

	// var workExp = new Date(01/01/2009);//format 01/02/1900
	//
	// 	function calculateAge(workExp) { // workExp is a date
	//     var ageDifMs = Date.now() - workExp.getTime();
	//     var ageDate = new Date(ageDifMs); // milliseconds from epoch
	//     return Math.abs(ageDate.getUTCFullYear() - 1970);
	// }
