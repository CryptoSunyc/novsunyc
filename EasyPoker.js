var body = $response.body
body=body.replace(/isVip":"\d/g,'isVip":"2')
.replace(/vipType":null/g,'vipType":"2"')
.replace(/singleType":"0"/g,'singleType":null')
.replace(/vipEndTime":null/g,'vipEndTime":"2025-07-12 15:46:31"')
var  obj  =  JSON.parse(body)
obj.data[0].isVip=2
var  obj  =  JSON.stringify(obj)
$done({ body });
