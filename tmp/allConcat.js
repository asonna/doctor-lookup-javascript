var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctorsBio= function(medicalIssue, result) {
  console.log(result);
    $('.resultMessage').text("These are the bio of doctors that can address your " + medicalIssue + " issue. Their names are included:");

    var i = "";
    $('.showDoctors').empty();
    for(i=0; i<result.length; ++i) {
      $('.showDoctors').append('<li>' + result[i].profile.bio + '</li><br>');
    }

};

$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('.issueForm').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#medicalIssue').val();
    $('#medicalIssue').val();
    currentDoctorObject.getDoctorsBioByIssue(medicalIssue, displayDoctorsBio);
  });
});
