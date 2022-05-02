function timeWord(time) {
  let numbers = {
    0: "twelve", //if hour is 0 it is twelve am;
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
  };
  //split time into hour and minute
  let hour = +time.slice(0, 2);
  let minute = +time.slice(3, 5);
  //check for case of midnight and noon
  if (hour === 0 && minute === 0) {
    return "midnight";
  } else if (hour === 12 && minute === 0) {
    return "noon";
  }
  //set the return string to be empty;
  let timeString = "";
  //handle the hour return number between 0 and 12;
  if (hour > 12) {
    timeString += numbers[hour - 12];
  } else {
    timeString += numbers[hour];
  }
  //handle minutes
  if (minute < 10) {
    //if minute under 10 handle o options
    if (minute === 0) {
      timeString += " o'clock";
    } else {
      timeString += " oh " + numbers[minute];
    }
  } else if (minute < 20) {
    //if minute under 20 handle teens
    timeString += " " + numbers[minute];
  } else {
    //if above or equal to 20 handle tens and ones places
    if (minute % 10 === 0) {
      timeString += " " + numbers[minute];
    } else {
      timeString +=
        " " + numbers[minute - (minute % 10)] + " " + numbers[minute % 10];
    }
  }
  //check am or pm
  if (hour >= 12) {
    timeString += " pm";
  } else {
    timeString += " am";
  }
  return timeString;
}

console.log(timeWord("00:23"));
