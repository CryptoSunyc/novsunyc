var body = $response.body.replace(/isVip":"\d/g,'isVip":"2')
.replace(/vipType":null/g,'vipType":"2"')
.replace(/singleType":"0"/g,'singleType":null')
.replace(/vipEndTime":null/g,'vipEndTime":"2025-07-12 15:46:31"')
.replace(/"vipInfos":[]/g,'  "vipInfos":[{"setmealId": null,"vipEndTime": "2025-07-12 15:46:31","remainDays": 365,"type": 2,"vipType": 0,"singleType": "0","singleName": "超级会员","ableUpgrade": "1"}]')
.replace(/"studyGuide":"0"/g,'"studyGuide":"1"')
.replace(/isVip":0/g,'isVip":2')
.replace(/"mockTotal":\d/g,'"mockTotal":100')
.replace(/"trainTotal":\d/g,'"trainTotal":100')
$done({ body });

