var destinations = require('./destinations.js');
module.exports = {};

module.exports.questions = [{
  about: "destination",
  skip: true,
  options: destinations.data.map(function(destination){ return destination.destination })
}, {
  about: "facility",
  question: "Apa fasilitas yang Anda butuhkan dalam akomodasi ?",
  multi: true,
  options: [
          "ac",
          "wifi",
          "waterHeater",
          "balcon",
          "lcdTv"]
}, {
  about: "stars",
  question: "Hotel bintang berapa yang Anda inginkan ?",
  options: [
          "1",
          "2",
          "3",
          "4",
          "5"]
}, {
  about: "food",
  question: "Jenis makanan apa yang Anda inginkan ?",
  options: [
          "prasmanan",
          "porsi"]
}];

module.exports.data = [{
  accomodation: 'aston favehotel',
  destination: 'bali',
  stars: '3',
  facility: ['ac', 'wifi'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel hilton',
  destination: 'london',
  stars: '5',
  facility: ['ac', 'wifi', 'balcon', 'lcdTv'],
  food: 'prasmanan'
}, {
  accomodation: 'hotel mulia',
  destination: 'bali',
  stars: '4',
  facility: ['ac', 'wifi', 'waterHeater'],
  food: 'prasmanan'
}]