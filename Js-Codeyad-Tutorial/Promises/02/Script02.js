let hasMeeting = true;
let meeting = new Promise((myResolve, myReject) => {
  let meetingDetails = {
    time: "12:30",
    location: "Tehran",
    name: "AliAmini",
  };
  if (hasMeeting) {
    myResolve(meetingDetails);
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
