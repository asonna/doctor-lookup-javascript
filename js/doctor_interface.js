var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctorsBio = function(medicalIssue, doctorLists) {
  var i = "";
  $('.showDoctors').empty();
  for (i=0; i<doctorList.length; ++i) {
    $('.showDoctors').append('<li>' + doctorList.body[i] + '</li>');
  }
};

$(document).ready.function() {
  var currentDoctorObject = new Doctor();
  $('.issueForm').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val();
    currentDoctorObject.getDoctorsBio(medicalIssue, displayDoctorsBio);
  });
};
