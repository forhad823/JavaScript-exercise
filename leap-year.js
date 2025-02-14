/*   flow-chart of leap-year determination

        Start
          │
          ▼
        Is the year divisible by 4?
          │
          ├── No → Not a leap year → End
          │
          ▼
        Is the year divisible by 100?
          │
          ├── No → Leap year → End
          │
          ▼
        Is the year divisible by 400?
          │
          ├── Yes → Leap year → End
          │
          ├── No → Not a leap year → End

*/

function isLeap(year) {
  // If not divisible by 4, it's not a leap year
  if (year % 4 !== 0) return false;

  // If divisible by 100 but not by 400, it's not a leap year
  if (year % 100 === 0 && year % 400 !== 0) return false;

  // Otherwise, it's a leap year
  return true;
}
