import $ from "jquery";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import BikeStats from './bikes.js';

$(document).ready(function() {
  $("form#bikes").submit(function(event) {
    event.preventDefault();
    const manufacturer = $("#manufacturer").val();
    $("#manufacturer").val("");
    const color = $("#color").val();
    $("#color").val("");
    const location = $("#location").val();
    $("#location").val("");
    const distance = $("#distance").val();
    $("#distance").val("");
    let promise = BikeStats.getInfo(manufacturer, color, location, distance);
    
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.bikesStolen').text(`There have been ${body.proximity} bikes stolen near you`);
    })
  });
});


