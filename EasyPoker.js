var body = $response.body
var obj = JSON.pares(body);
obj.isVip=1
$done({ body });
