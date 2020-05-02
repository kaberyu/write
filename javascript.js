$(function () {
  $('#header-menuid').click(function () {
    $('#menu-listid').show();
    $('#header-menuid').hide();
  });

  $('#menu-cross').click(function () {
    $('#menu-listid').hide();
    $('#header-menuid').show();
  });
});
