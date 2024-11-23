<?

$data = [];
$json = '';

$json = file_get_contents('php://input');
if ($json === false) {
    http_response_code(400);
    die;
}

$data = json_decode($json, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    die;
}

$fountain = isset($data['fountain'])? $data['fountain']:'';
$count = isset($data['count'])? $data['count']:'';
$name = isset($data['name'])? $data['name']:'';
$phone = isset($data['phone'])? $data['phone']:'';
$email = isset($data['email'])? $data['email']:'';

$token = "7509910704:AAFiAzx7IQLvwCpxGEwGNSqCcZoGQZZi0qE";
$chat_id = "-1002495364336";

$txt = urlencode("<b>&#10071; Новая заявка &#10071;</b> \n<b>$fountain</b> \n<b>Количество:</b> $count \n<b>Имя:</b> $name \n<b>Телефон:</b> $phone \n <b>Почта:</b> $email");

$request = "https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}";
$sendToTelegram = fopen($request,"r");

?>