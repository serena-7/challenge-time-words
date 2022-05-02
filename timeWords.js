function timeWord(time) {
  let numbers = {
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
  let hour = +time.slice(0, 2);
  let minute = +time.slice(3, 5);
  if (hour === 0 && minute === 0) {
    return "midnight";
  } else if (hour === 12 && minute === 0) {
    return "noon";
  }
  let timeString = "";
  if (hour > 12) {
    timeString += numbers[hour - 12];
  } else {
    timeString += numbers[hour];
  }
  if (minute < 10) {
    if (minute === 0) {
      timeString += " o'clock";
    } else {
      timeString += " oh " + numbers[minute];
    }
  } else if (minute < 20) {
    timeString += " " + numbers[minute];
  } else {
    if (minute % 10 === 0) {
      timeString += " " + numbers[minute];
    } else {
      timeString +=
        " " + numbers[minute - (minute % 10)] + " " + numbers[minute % 10];
    }
  }
  if (hour >= 12) {
    timeString += " pm";
  } else {
    timeString += " am";
  }
  return timeString;
}

console.log(timeWord("23:23"));
