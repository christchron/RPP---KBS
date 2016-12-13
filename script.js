$ = require("./lib/jquery.min.js")

module.exports = {};

module.exports.renderCourse = function($el){
  $('#app-course').empty().append($el)
}

module.exports.askCourseQuestion = function(question, option, callback){
  var $options = [];

  option.values.forEach(function(o){
    $options.push(' \
      <input id="' + o + '" type="radio" name="' + option.name + '" value="' + o + '"> \
      <label class="cap" for="' + o + '">' + o + '</label> \
    ')
  })

  var $form = $('<form id="form-course"> \
                    <fieldset> \
                    <legend>' + question + '</legend> \
                    ' + $options.join('\n') + ' \
                    <input type="submit" value="Submit" /> \
                    </fieldset> \
                </form>');

  module.exports.renderCourse($form)
  $('#form-course').submit(function(e){
    e.preventDefault();
    var chosen = $('#form-course input[name=' + option.name + ']:checked').val();
    console.log(chosen)

    callback(chosen)
    return false;
  })
}

module.exports.showCourseAnswer = function(description, answer){
  var $form = $('<form id="form-course"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b class="cap">' + answer + '</b> \
                    </fieldset> \
                </form>');

  module.exports.renderCourse($form)
}

module.exports.showCourseError = function(description, error){
  var $form = $('<form id="form-course"> \
                    <fieldset> \
                      <legend>' + description + '</legend> \
                      <b>' + error + '</b> \
                    </fieldset> \
                </form>');

  module.exports.renderCourse($form)
}