let moment = require('moment');
console.log(moment().format('dddd'));



let mydate = require('date-fns');
console.log(mydate.format(new Date(), "MMMM '/' yy"));

console.log(
    mydate.formatDistance(
      new Date(2019, 8, 1, 0, 0, 15),
      new Date(2019, 8, 3, 0, 0, 10),
    )
  );