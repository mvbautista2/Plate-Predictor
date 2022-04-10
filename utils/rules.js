const weekDays = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
};

const pastRules = {
  Hours: {
    FirstMin: "07:00",
    FirstMax: "09:30",
    SecondMin: "16:00",
    SecondMax: "19:30",
  },

  Monday: {
    digits: [1, 2],
  },
  Tuesday: {
    digits: [3, 4],
  },
  Wednesday: {
    digits: [5, 6],
  },
  Thursday: {
    digits: [7, 8],
  },
  Friday: {
    digits: [9, 0],
  },
  Saturday: {
    digits: [],
  },
  Sunday: {
    digits: [],
  },
};
