$ = require("./lib/jquery.min.js")

module.exports = {};

// Destination
module.exports.renderDestination = function($el){
  $('#app-destination').empty().append($el)
}

module.exports.askDestinationQuestion = function(question, option, callback){
  var $options = [];

  option.values.forEach(function(o){
    $options.push(' \
      <input id="' + o + '" type="radio" name="' + option.name + '" value="' + o + '"> \
      <label class="cap" for="' + o + '">' + o + '</label> \
    ')
  })

  var $form = $('<form id="form-destination"> \
                    <fieldset> \
                    <legend>' + question + '</legend> \
                    ' + $options.join('\n') + ' \
                    <input type="submit" value="Submit" /> \
                    </fieldset> \
                </form>');

  module.exports.renderDestination($form)
  $('#form-destination').submit(function(e){
    e.preventDefault();
    var chosen = $('#form-destination input[name=' + option.name + ']:checked').val();
    console.log(chosen)

    callback(chosen)
    return false;
  })
}

module.exports.showDestinationAnswer = function(description, answer){
  var $form = $('<form id="form-destination"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b class="cap">' + answer + '</b> \
                    </fieldset> \
                </form>');

  module.exports.renderDestination($form)
}

module.exports.showDestinationError = function(description, error){
  var $form = $('<form id="form-destination"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b>' + error + '</b> \
                    </fieldset> \
                </form>');

  module.exports.renderDestination($form)
}

// Accomodation
module.exports.renderAccomodation = function($el){
  $('#app-accomodation').empty().append($el)
}

module.exports.askAccomodationQuestion = function(question, option, callback){
  var $options = [];

  option.values.forEach(function(o){
    $options.push(' \
      <input id="' + o + '" type="' + (option.multi ? "checkbox" : "radio") + '" name="' + option.name + '" value="' + o + '"> \
      <label class="cap" for="' + o + '">' + o + '</label> \
    ')
  })

  var $form = $('<form id="form-accomodation"> \
                    <fieldset> \
                    <legend>' + question + '</legend> \
                    ' + $options.join('\n') + ' \
                    <input type="submit" value="Submit" /> \
                    </fieldset> \
                </form>');

  module.exports.renderAccomodation($form)
  $('#form-accomodation').submit(function(e){
    e.preventDefault();
    if (option.multi) {
      var chosen = $('#form-accomodation input[name=' + option.name + ']:checked').map(function(){
        return $(this).val();
      }).get()
    } else {
      var chosen = $('#form-accomodation input[name=' + option.name + ']:checked').val();
    }

    console.log(chosen)

    callback(chosen)
    return false;
  })
}

module.exports.showAccomodationAnswer = function(description, answer){
  var $form = $('<form id="form-accomodation"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b class="cap">' + answer + '</b> \
                    </fieldset> \
                </form>');

  module.exports.renderAccomodation($form)
}

module.exports.showAccomodationError = function(description, error){
  var $form = $('<form id="form-accomodation"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b>' + error + '</b> \
                    </fieldset> \
                </form>');

  module.exports.renderAccomodation($form)
}