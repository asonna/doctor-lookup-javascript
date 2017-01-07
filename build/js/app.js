(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = '1e527ec756882712d7b1ab7548f7c28f';

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor() {

}

Doctor.prototype.getDoctorsBioByIssue = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    console.log(response);
    displayFunction(medicalIssue, response.data);
  }).fail(function(error) {
    $('.showDoctors').append(error.responseJSON);
  });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
