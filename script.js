let today = new Date();
let year = today.getFullYear();

// month is zero indexed
let month = today.getMonth() + 1;
let date = today.getDate();

// zero padding months and dates
month = month < 10 ? '0' + month : month;
date = date < 10 ? '0' + date : date;

let url = 'https://epaper.ekantipur.com/kathmandupost/download/' + year + '-' + month + '-' + date;

window.open(url, '_blank');