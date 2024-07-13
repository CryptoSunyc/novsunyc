var body = $response.body.replace(/isVip":"\d/g,'isVip":"2')
.replace(/vipType":null/g,'vipType":"2"')
.replace(/singleType":"0"/g,'singleType":null')

