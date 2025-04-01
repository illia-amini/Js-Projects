let hasMeeting = true;
let meeting = new Promise((myResolve, myReject) => {
  let meetingDetails = {
    time: "12:30",
    location: "Tehran",
    name: "AliAmini",
  };
  if (hasMeeting) {
    myResolve(meetingDetails);
    //also return in console meeting details is not defiend
  } else {
    myReject("Sorry!!!");
  }
});

meeting.then(function (value) {
  console.log(value);
});
meeting.catch(function (error) {
  myDisplayer(error);
});

const addToCalender = meetingDetails;

function myDisplayer(some) {
  document.getElementById("Display").innerHTML = some;
}
