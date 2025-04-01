let hasMeeting = true;
let meeting = new Promise((myResolve, myReject) => {
  let meetingDetails = {
    time: "12:30",
    location: "Tehran",
    name: "AliAmini",
  };
  if (hasMeeting) {
    myResolve("Welcome to the meeting!!!");
  } else {
    myReject("Sorry!!!");
  }
});

meeting.then(function (value) {
  myDisplayer(value);
});
meeting.catch(function (error) {
  myDisplayer(error);
});

function myDisplayer(some) {
  document.getElementById("Display").innerHTML = some;
}
