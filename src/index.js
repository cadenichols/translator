import $ from 'jquery';
import * as translate from './translate';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

$(() => {
  $('button#encode').click(encodeText);
  // $('.decode').click(decodeOther);
});

function encodeText() {
  const text = $('#text').val();

  $('#binary').val(translate.toBinary(text));
  $('#octal').val(translate.toOctal(text));
  $('#decimal').val(translate.toDecimal(text));
  $('#hex').val(translate.toHex(text));
  $('#base32').val(translate.toBase32(text));
  $('#base64').val(translate.toBase64(text));
  $('#ascii85').val(translate.toAscii85(text));
  $('#md5').val(translate.toMd5(text));
  $('#sha256').val(translate.toSHA256(text));
  $('#sha512').val(translate.toSHA512(text));
}

// function decodeOther() {
//   const $textarea = $(this).siblings('textarea');
//   const otherText = $textarea.val();
//   const textType = $textarea.attr('id');

//   switch (textType) {
//     case 'binary': 
//     case 'octal': 
//     case 'hex': 
//     case 'base32': 
//     case 'base64': 
//     case 'ascii85': 
//     case 'decimal': 
//   }
// }
