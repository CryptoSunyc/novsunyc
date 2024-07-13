var body = $response.body.replace(/isVip":"\d/g,'isVip":"2')
.replace(/vipType":null/g,'vipType":"2"')
.replace(/singleType":"0"/g,'singleType":null')
.replace(/vipEndTime":null/g,'vipEndTime":"2025-07-12 15:46:31"')
$done({ body });
