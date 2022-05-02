"use strict";

const newDate = new Date("Jul 25, 2022 00:00:01").getTime();
// const newDate = new Date("Jan 1, 2023 00:00:01").getTime();
// const newDate = new Date("May 3, 2022 00:00:01").getTime();
const days = document.querySelector("#num-days");
const hours = document.querySelector("#num-hours");
const minutes = document.querySelector("#num-minutes");
const seconds = document.querySelector("#num-seconds");

const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = newDate - now;

  // Time calculations for days, hours, minutes and seconds
  const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an elements

  days.innerHTML = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".main__timer").innerHTML = "EXPIRED";
  }
}, 1000);
