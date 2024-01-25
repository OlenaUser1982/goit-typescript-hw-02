/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const isWeekend = (day: Days) => {
  return day === Days.Saturday || day === Days.Sunday;
};
