var body = $response.body.replace(/"data":\[0-9\]/g,'"data":1000000')
$done({ body });
