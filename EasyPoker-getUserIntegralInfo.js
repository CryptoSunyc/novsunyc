var body = $response.body.replace(/"integral":/\d+/g,'"integral":1000000')
$done({ body });
