var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.getDoctorBio = function(medicalIssue, apiKey, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(result) {
    displayFunction(medicalIssue, result.body[1]);
  }).fail(function(error) {
    $('.showDoctors').append(error.resultJSON.message)
  });
};
