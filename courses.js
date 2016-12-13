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
  question: "Waktu perkuliahan yang Anda inginkan dimulai jam? (Sesuai dengan jumlah sks)",
  multi: true,
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
              "suka ngasih tugas",
              "suka bercerita",
              "cuek",
              "baik"
          ]
},

];

module.exports.data = [{
  course:'Psikologi Persepsi',
  faculty:'FSRD',
  sks:'3',
  day:'Rabu',
  time:'15.00',
  lecturer_type:'suka bercanda'
},
{
  course:'Komposisi',
  faculty:'FSRD',
  sks:'3',
  day:'Selasa',
  time:'09.00',
  lecturer_type:'jarang masuk'
},
{
  course:'Kesehatan Lingkungan',
  faculty:'FTSL',
  sks:'3',
  day:'Senin',
  time:'07.00',
  lecturer_type:'tegas'
},
{
  course:'Ekonomi Teknik',
  faculty:'FTI',
  sks:'2',
  day:'Selasa',
  time:'14.00',
  lecturer_type:'tegas'
},
{
  course:'Psikologi Sosial',
  faculty:'FSRD',
  sks:'2',
  day:'Selasa',
  time:'13.00',
  lecturer_type:'suka ngasih tugas'
},
{
  course:'Pendidikan Anti Korupsi',
  faculty:'FTI',
  sks:'2',
  day:'Rabu',
  time:'15.00',
  lecturer_type:'suka bercerita'
},
{
  course:'Hukum Perburuhan',
  faculty:'FTI',
  sks:'2',
  day:'Jumat',
  time:'08.00',
  lecturer_type:'cuek'
},
{
  course:'Studium Generale',
  faculty:'FTI',
  sks:'3',
  day:'Rabu',
  time:'10.00',
  lecturer_type:'cuek'
},
{
  course:'Lingkungan untuk Penyembuhan',
  faculty:'SF',
  sks:'2',
  day:'Kamis',
  time:'16.00',
  lecturer_type:'jarang masuk'
},
{
  course:'Game Design',
  faculty:'FSRD',
  sks:'3',
  day:'Senin',
  time:'13.00',
  lecturer_type:'suka ngasih tugas'
},
{
  course:'Astronomi Lingkungan',
  faculty:'FMIPA',
  sks:'2',
  day:'Kamis',
  time:'11.00',
  lecturer_type:'suka ngasih tugas'
},
{
  course:'Financial Planning',
  faculty:'SBM',
  sks:'3',
  day:'Rabu',
  time:'07.00',
  lecturer_type:'cuek'
},
{
  course:'Tech Based Business',
  faculty:'SBM',
  sks:'3',
  day:'Selasa',
  time:'16.00',
  lecturer_type:'tegas'
},
{
  course:'Representasi Pengetahuan dan Penalaran',
  faculty:'STEI',
  sks:'3',
  day:'Rabu',
  time:'09.00',
  lecturer_type:'baik'
},
{
  course:'Pembelajaran Mesin',
  faculty:'STEI',
  sks:'3',
  day:'Kamis',
  time:'09.00',
  lecturer_type:'suka bercerita'
},
{
  course:'Sistem Informasi Lanjut',
  faculty:'STEI',
  sks:'3',
  day:'Selasa',
  time:'07.00',
  lecturer_type:'baik'
},
{
  course:'Kriptografi',
  faculty:'STEI',
  sks:'3',
  day:'Senin',
  time:'11.00',
  lecturer_type:'suka ngasih tugas'
},
{
  course:'Interpretasi dan Pengolahan Citra',
  faculty:'STEI',
  sks:'3',
  day:'Jumat',
  time:'13.00',
  lecturer_type:'suka ngasih tugas'
},
{
  course:'Pengembagan Aplikasi Terdistribusi',
  faculty:'STEI',
  sks:'3',
  day:'Kamis',
  time:'14.00',
  lecturer_type:'jarang masuk'
},
{
  course:'Manajemen Proyek Perangkat Lunak',
  faculty:'STEI',
  sks:'2',
  day:'Selasa',
  time:'12.00',
  lecturer_type:'suka bercanda'
},
{
  course:'Interaksi Manusia dan Komputer',
  faculty:'STEI',
  sks:'3',
  day:'Rabu',
  time:'16.00',
  lecturer_type:'cuek'
},
{
  course:'Manajemen Basis Data',
  faculty:'STEI',
  sks:'2',
  day:'Senin',
  time:'09.00',
  lecturer_type:'tegas'
},
{
  course:'Teori Bahasa Formal dan Otomata',
  faculty:'STEI',
  sks:'3',
  day:'Kamis',
  time:'11.00',
  lecturer_type:'baik'
},
{
  course:'Jaringan Komputer',
  faculty:'STEI',
  sks:'3',
  day:'Jumat',
  time:'09.00',
  lecturer_type:'suka bercerita'
},
{
  course:'Logika Informatika',
  faculty:'STEI',
  sks:'3',
  day:'Senin',
  time:'07.00',
  lecturer_type:'tegas'
},
{
  course:'Matematika Diskrit',
  faculty:'STEI',
  sks:'3',
  day:'Senin',
  time:'13.00',
  lecturer_type:'baik'
},
{
  course:'Algoritma dan Struktur Data',
  faculty:'STEI',
  sks:'4',
  day:'Senin',
  time:'14.00',
  lecturer_type:'tegas'
}


]

