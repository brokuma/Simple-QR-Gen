//declare txtqr
var txtqr = '';

//validation to activate btn if there is input in the fieldtext and length more than 2
$('.txtQR').keyup(function () {
  txtqr = $('.txtQR').val();

  if (txtqr !== '' && txtqr.length >= 3) {
    $('.qr-btn').prop('disabled', false);
  } else {
    $('.qr-btn').prop('disabled', true);
  }
});

//function when btn is clicked
$('.qr-btn').click(function () {
  $('.qr-demo').html('');
  $('.qr-demo').qrcode({
    width: 100,
    height: 100,
    text: txtqr,
  });
  //get text from input and show it as paragraph
  $('.textValue').html('<p>' + txtqr + ':</p>');
  //unset some class display from none
  $('.qr-demo').css('display', '');
  $('.textValue').css('display', '');
  //clear textfield after showing QR
  $('.txtQR').val('');
});
