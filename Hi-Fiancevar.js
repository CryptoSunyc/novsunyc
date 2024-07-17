var body = $response.body.replace(/istrial":"0"/g,'istrial": "1"')
.replace(/nickname":".*?"/g,'nickname":"已解锁"')
$done({ body });
