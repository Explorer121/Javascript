function countdown(when) {
  return difference(when, new Date()).formatDate();
}

function countup(when) {
  return difference(new Date(), when).formatDate();
}

function formatObjectDate() {
  return ((this.days != 0) ? this.days + ' days ' : '') +
    ((this.hours != 0) ? this.hours + ' hours ' : '') +
    ((this.minutes != 0) ? this.minutes + ' minutes ' : '') +
    ((this.seconds != 0) ? this.seconds + ' seconds ' : '');
}

function difference(older,newer) {
    var myObject = new Object();

    var dif = older.getTime() - newer.getTime();

    myObject.days = Math.floor(dif/1000/60/60/24);

    dif = dif - myObject.days*1000*60*60*24

    myObject.hours = Math.floor(dif/1000/60/60);

    dif = dif - myObject.hours*1000*60*60

    myObject.minutes = Math.floor(dif/1000/60);

    dif = dif - myObject.minutes*1000*60

    myObject.seconds = Math.floor(dif/1000);

    myObject.formatDate = formatObjectDate;

    return myObject;
}