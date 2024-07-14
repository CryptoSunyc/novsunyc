var body = $response.body.replace(/"integral":0/g,'"integral":1000000')
$done({ body });
