var body = $response.body.replace(/"vipInfos":\[\]/g,'"vipInfos":[{"setmealId": null,"vipEndTime": "2026-07-12 15:46:31","remainDays": 365,"type": 2,"vipType": 2,"singleType": "null","singleName": "超级会员","ableUpgrade": "1"}]')
$done({ body });
