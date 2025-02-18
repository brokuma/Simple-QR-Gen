//declare txtqr
var txtqr = '';


$('.txtQR').keyup(function () {
  txtqr = $('.txtQR').val();

  if (txtqr !== '' && txtqr.length >= 3) {
    $('.qr-btn').prop('disabled', false);
  } else {
    $('.qr-btn').prop('disabled', true);
  }
});

$('.qr-btn').click(function () {
  $('.qr-demo').html('');
  $('.qr-demo').qrcode({
    width: 100,
    height: 100,
    text: txtqr
  });

  $('.textValue').html('<p>' + txtqr + ':</p>');
  $('.qr-demo').css('display', '');
  $('.textValue').css('display', '');
  $('.reload-btn').css('display', '');
  $('.qr-btn').prop('disabled', true);
  Swal.fire("its your QR Code below");

  clearTxt();
});

function clearTxt(){
  $('.txtQR').val('');
}

$('.reload-btn').click(function(){
  location.reload();
});