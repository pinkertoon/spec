<?php
if (array_key_exists('messageC', $_POST)) {
   $to  = 'pk.specstroy@gmail.com' . ', '; // обратить внимание на запятую
   //$to  .= '#@mail.ru'; pk.specstroy@gmail.com
   //$from = '#@mail.ru';
   $subject = "Вопрос с сайта от ".$_POST['nameC'];
   $subject = "=?utf-8?b?". base64_encode($subject) ."?=";
   $headers = 'Content-type: text/plain; charset="utf-8"';
   $headers .= "MIME-Version: 1.0\r\n";
   $headers .= "Date: ". date('D, d M Y H:i:s O') ."\r\n";
   $headers = "From: СпецСтрой <noreply@pk.specstroy.ru>\n";
   $message = "Имя: ".$_POST['nameC']."\nEmail: ".$_POST['emailC']."\nСообщение: ".$_POST['messageC'];
   mail($to, $subject, $message, $headers);
   echo $_POST['nameC'];
}
?>
