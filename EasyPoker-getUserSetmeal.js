var body = $response.body.replace(/"vipInfos":\[\]/g,'"vipInfos":[{"setmealId": 6,"vipEndTime": "2025-07-12 15:46:31","remainDays": 365,"type": 2,"vipType": 2,"singleType": "null","singleName": "超级会员","ableUpgrade": "0"}]')
$done({ body });
