// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Example

// Return '12:01:00'.

// Return '00:01:00'.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// string s: a time in  hour format
// Returns

// string: the time in  hour format

function timeConversion(s) {
  // Write your code here
  let amPm = s.charAt(8)
  let milHr = ''
  
  if (amPm == 'A') {
      if (s.substring(0,2) == '12') {
          milHr = '00'
      }
      else {
          milHr = s.substring(0,2)
      }
  }
  else {
      if (s.substring(0,2) == '12') {
          milHr = s.substring(0,2)
      }
      else {
          milHr = parseInt(s.substring(0,2),10) + 12
      } 
  }
  return milHr + s.substring(2,8)
}