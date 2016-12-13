var expert = require("./lib/expert.js"),
    _ = require('underscore'),
    lib = require('./script');

var domain   = expert.Domain(),
    Concept  = domain.Concept,
    Relation = domain.Relation,
    concepts = {},
    relations = {};

var courses = require('./courses.js');
courses.questions.forEach(function(question){
  question.options.forEach(function(option){
    concepts[question.topic] = concepts[question.topic] || {};
    concepts[question.topic][option] = Concept.create({id: question.topic + '-' + option})
  })

  relations[question.topic] = Relation.create({id: '~' + question.topic, inverseFor: Relation.create({id: question.topic})})
});

console.log(courses.data);

courses.data.forEach(function(course){
  concepts['courses'] = concepts['courses'] || {};
  concepts['courses'][course.course] = Concept.create({id: course.course});

  concepts['courses'][course.course]
    .faculty(concepts['faculty'][course.faculty])
    .sks(concepts['sks'][course.sks])
    .day(concepts['day'][course.day])
    .time(concepts['time'][course.time])
    .lecturer_type(concepts['lecturer_type'][course.lecturer_type])
  console.log("a");
});

var currentQuestionIdx = 0,
    currentAnswers = [],
    showQuestion = function(currentQuestionIdx){
      while(courses.questions[currentQuestionIdx].skip) currentQuestionIdx++;

      lib.askCourseQuestion(courses.questions[currentQuestionIdx].question, {
        name: courses.questions[currentQuestionIdx].topic,
        values: courses.questions[currentQuestionIdx].options
      }, function(answer){
        var topic = courses.questions[currentQuestionIdx].topic;

        currentAnswers.push({
          topic: topic,
          answer: answer
        })

        var results = _.intersection.apply(this, currentAnswers.map(function(currentAnswer){
          return relations[currentAnswer.topic](concepts[currentAnswer.topic][currentAnswer.answer])
        }))

        if (currentQuestionIdx == courses.questions.length - 1){
          if (results.length > 0){
            lib.showCourseAnswer("Pilihan mata kuliah yang paling cocok adalah", _.map(results, function(c){return c.id; })[0])
          }else{
            lib.showCourseError("Error", "Mata Kuliah Tidak Ditemukan, Silahkan Refresh untuk mengulang")
          }
        }else{
          if(results.length > 0){
            showQuestion(++currentQuestionIdx)
          }else{
            lib.showCourseError("Error", "Mata Kuliah Tidak Ditemukan, Silahkan Refresh untuk mengulang")
          }
        }
      })
    }

showQuestion(currentQuestionIdx);