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
meeting.then(addToCalender); //to pass meeting to addcalneder func
meeting.catch(function (error) {
  myDisplayer(error);
});

const addToCalender = (meetingDetails) => {
  return new Promise((resolve) => {
    let calender = `${meetingDetails.name} is scheduled at ${meetingDetails.time} on ${meetingDetails.location}`;
    resolve(calender);
  });
};

function myDisplayer(some) {
  document.getElementById("Display").innerHTML = some;
}
