module.exports = {};

module.exports.questions = [{
  topic: "faculty",
  question: "Fakultas yang Anda minati ?",
  options: [
              "STEI",
              "FTI",
              "FTSL",
              "FSRD",
              "FTTM",
              "FMIPA",
              "FTMD",
              "SAPPK",
              "SBM",
              "SF",
              "SITH",
              "FITB"
          ]
}, {
  topic: "sks",
  question: "Jumlah sks yang Anda inginkan ?",
  options: [
              "2",
              "3",
              "4"
          ]
}, {
  topic: "day",
  question: "Hari yang Anda inginkan ?",
  options: [
              "Senin",
              "Selasa",
              "Rabu",
              "Kamis",
              "Jumat"
          ]
}, {
  topic: "time",
  question: "Waktu perkuliahan yang Anda inginkan dimulai dari jam?",
  options: [
              "07.00",
              "08.00",
              "09.00",
              "10.00",
              "11.00",
              "12.00",
              "13.00",
              "14.00",
              "15.00",
              "16.00",
              "17.00"
          ]
}, {
  topic: "lecturer_type",
  question: "Karakteristik dosen yang Anda suka ?",
  options: [
              "tegas",
              "jarang masuk",
              "suka bercanda",
              "suka ngasih tugas / PR",
              "suka bercanda"
          ]
},

];


module.exports.data = [{
  course:'Psikoper',
  faculty:'FSRD',
  sks:'3',
  day:'rabu',
  time:'15.00',
  Lecturer_type:'suka bercanda'
}]
