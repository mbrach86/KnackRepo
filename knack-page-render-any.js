/* DATEPICKER */
$(document).on('knack-page-render.any', function(event, scene) {
  $.datepicker.setDefaults({changeMonth: true, firstDay: 1, regional:'pl'});
});
