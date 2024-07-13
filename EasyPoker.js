.replace(/"vipInfos":[]/g,'  "vipInfos":[{"setmealId": null,"vipEndTime": "2025-07-12 15:46:31","remainDays": 365,"type": 2,"vipType": 0,"singleType": "0","singleName": "超级会员","ableUpgrade": "1"}]')
.replace(/"studyGuide":"0"/g,'"studyGuide":"1"')
.replace(/isVip":0/g,'isVip":2')
.replace(/"mockTotal":\d/g,'"mockTotal":100')
.replace(/"trainTotal":\d/g,'"trainTotal":100')
$done({ body });
var  obj  =  JSON.pares(body)
obj.vipInfos[0].isVip=2
var  obj  =  JSON.stringify(obj)
$done({ body });
