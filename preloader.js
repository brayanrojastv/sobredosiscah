$('#video1').on('loadstart', function (event) {
  $(this).addClass('background');
  $(this).attr("poster", "/your/loading.gif");
});

$('#video1').on('canplay', function (event) {
  $(this).removeClass('background');
  $(this).removeAttr("poster");
});