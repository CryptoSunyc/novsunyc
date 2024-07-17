var body = $response.body.replace(/nickname":".*?"/g,'nickname":"已解锁"')
$done({ body });
