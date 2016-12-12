var expert = require("./lib/expert.js"),
    _ = require('underscore'),
    lib = require('./script');

var domain   = expert.Domain(),
    Concept  = domain.Concept,
    Relation = domain.Relation,
    concepts = {},
    relations = {};

var destinations = require('./destinations.js');
destinations.questions.forEach(function(order){
  order.options.forEach(function(option){
    concepts[order.about] = concepts[order.about] || {};
    concepts[order.about][option] = Concept.create({id: order.about + '-' + option})
  })

  relations[order.about] = Relation.create({id: '~' + order.about, inverseFor: Relation.create({id: order.about})})
});
destinations.data.forEach(function(destination){
  concepts['destinations'] = concepts['destinations'] || {};
  concepts['destinations'][destination.destination] = Concept.create({id: destination.destination});

  concepts['destinations'][destination.destination]
    .popularity(concepts['popularity'][destination.popularity])
    .purpose(concepts['purpose'][destination.purpose])
    .season(concepts['season'][destination.season])
    .budget(concepts['budget'][destination.budget])
    .continent(concepts['continent'][destination.continent])
});

var accomodations = require('./accomodations.js');
accomodations.questions.forEach(function(order){
  order.options.forEach(function(option){
    concepts[order.about] = concepts[order.about] || {};
    concepts[order.about][option] = Concept.create({id: order.about + '-' + option})
  })

  if (order.multi) {
    order.options.forEach(function(option){
      relations[order.about + option] = Relation.create({id: '~' + order.about + option, inverseFor: Relation.create({id: order.about + option})})
    })
  } else {
    relations[order.about] = Relation.create({id: '~' + order.about, inverseFor: Relation.create({id: order.about})})
  }
});
accomodations.data.forEach(function(accomodation){
  concepts['accomodations'] = concepts['accomodations'] || {};
  concepts['accomodations'][accomodation.accomodation] = Concept.create({id: accomodation.accomodation});

  concepts['accomodations'][accomodation.accomodation]
    .destination(concepts['destination'][accomodation.destination])
    .stars(concepts['stars'][accomodation.stars])
    .food(concepts['food'][accomodation.food])

  accomodation.facility.forEach(function(f){
    concepts['accomodations'][accomodation.accomodation]['facility' + f](concepts['facility'][f])
  })
});

var currentDestinationQuestionIndex = 0,
    currentDestinationAnswers = [],
    showDestinationQuestion = function(currentDestinationQuestionIndex){
      while (destinations.questions[currentDestinationQuestionIndex].skip) currentDestinationQuestionIndex++;

      lib.askDestinationQuestion(destinations.questions[currentDestinationQuestionIndex].question, {
        name: destinations.questions[currentDestinationQuestionIndex].about,
        values: destinations.questions[currentDestinationQuestionIndex].options
      }, function(answer){
        var about = destinations.questions[currentDestinationQuestionIndex].about;

        currentDestinationAnswers.push({
          about: about,
          answer: answer
        })

        var results = _.intersection.apply(this, currentDestinationAnswers.map(function(currentAnswer){
          return relations[currentAnswer.about](concepts[currentAnswer.about][currentAnswer.answer])
        }))

        if (currentDestinationQuestionIndex == destinations.questions.length - 1) {
          if (results.length > 0) {
            lib.showDestinationAnswer("Tujuan destinasi terbaik adalah", _.map(results, function(c){ return c.id; })[0])
            currentAccomodationAnswers.push({
              about: 'destination',
              answer: _.map(results, function(c){ return c.id; })[0]
            })

            showAccomodationQuestion(currentAccomodationQuestionIndex)
          } else {
            lib.showDestinationError("Error", "Destinasi Tidak Ditemukan")
          }
        } else {
          if (results.length > 0) {
            showDestinationQuestion(++currentDestinationQuestionIndex)
          } else {
            lib.showDestinationError("Error", "Destinasi Tidak Ditemukan")
          }
        }
      })
    },
    currentAccomodationQuestionIndex = 0,
    currentAccomodationAnswers = [],
    showAccomodationQuestion = function(currentAccomodationQuestionIndex){
      while (accomodations.questions[currentAccomodationQuestionIndex].skip) currentAccomodationQuestionIndex++;

      lib.askAccomodationQuestion(accomodations.questions[currentAccomodationQuestionIndex].question, {
        name: accomodations.questions[currentAccomodationQuestionIndex].about,
        values: accomodations.questions[currentAccomodationQuestionIndex].options,
        multi: accomodations.questions[currentAccomodationQuestionIndex].multi
      }, function(answer){
        window.d = answer
        console.log('answer', answer, typeof answer)
        var about = accomodations.questions[currentAccomodationQuestionIndex].about,
            multi = accomodations.questions[currentAccomodationQuestionIndex].multi;

        if (multi) {
          answer.forEach(function(a){
            currentAccomodationAnswers.push({
              multi: multi,
              about: about,
              answer: a
            })
          })
        } else {
          currentAccomodationAnswers.push({
            about: about,
            answer: answer
          })
        }

        // console.log('currentAccomodationAnswers', currentAccomodationAnswers)

        var results = _.intersection.apply(this, currentAccomodationAnswers.map(function(currentAnswer){
          if (currentAnswer.multi) {
            return relations[currentAnswer.about + currentAnswer.answer](concepts[currentAnswer.about][currentAnswer.answer])
          } else {
            return relations[currentAnswer.about](concepts[currentAnswer.about][currentAnswer.answer])
          }
        }))

        if (currentAccomodationQuestionIndex == accomodations.questions.length - 1) {
          if (results.length > 0) {
            lib.showAccomodationAnswer("Akomodasi terbaik adalah", _.map(results, function(c){ return c.id; })[0])
          } else {
            lib.showAccomodationError("Error", "Akomodasi Tidak Ditemukan")
          }
        } else {
          if (results.length > 0) {
            showAccomodationQuestion(++currentAccomodationQuestionIndex)
          } else {
            lib.showAccomodationError("Error", "Akomodasi Tidak Ditemukan")
          }
        }
      })
    }

showDestinationQuestion(currentDestinationQuestionIndex);