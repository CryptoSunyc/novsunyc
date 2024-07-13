var body = $response.body.replace(/isVip":0/g,'isVip":2')
.replace(/"mockTotal":\d/g,'"mockTotal":100')
.replace(/"trainTotal":\d/g,'"trainTotal":100')
$done({ body });
