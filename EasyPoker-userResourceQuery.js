var body = $response.body.replace(/isVip":0/g,'isVip":2')
.replace(/"mockTotal":/g,'"mockTotal":100')
.replace(/"trainTotal":/g,'"trainTotal":100')
$done({ body });
