/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = '947820902@qq.com';
// email 登陆密码
const emailPassword = 'Czm3.141592657';
// 接收者 邮箱
const toEmail = '947820902@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
    {
        'cookies': '__ckguid=uKe2U7pwaPOgFspQVQlSxf3; __jsluid=700d09c22741f17b25989cf0a69d0e62; device_id=3689835202152168952557670497248b94c76e80bb35050bd876cf1f3e; _ga=GA1.2.1696686290.1521689528; smzdm_user_source=4AEFEAEB94042044287DCA095FA40B46; td_cookie=952220286; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1526474393,1528870925; PHPSESSID=ac5649fe69c30534366b9f6b7ffca2d0; ad_date=13; zdm_qd=%7B%22utm_source%22%3A%22baidu%22%2C%22utm_medium%22%3A%22cpc%22%2C%22utm_campaign%22%3A%22PP-ZD%22%7D; _gid=GA1.2.136410822.1528870926; sess=NWQxNTZ8MTUzMjc1ODkzOHw5NDI4NDEyMjM1fDlkYWM0ZTg5OTZhOGMxZjcxYjM0YzQyZGI0YjUzNTky; user=user%3A9428412235%7C9428412235; smzdm_id=9428412235; userId=9428412235; ad_json_feed=%7B%7D; smzdm_user_view=FDDBDACB213644DF00437FA0A3CE23B7; wt3_sid=%3B999768690672041; wt3_eid=%3B999768690672041%7C2152168955100032373%232152887102200093566; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1528871174; _gat_UA-27058866-1=1; bannerCounter=%5B%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%5D'
    },
];


//回复列表 用于发表评论的内容
let commitList = [
    '这个价可以入手吗?',
    '这个价可以入手吗?',
    '这个价可以入手吗?',
];

module.exports = {
    emailName,
    emailPassword,
    toEmail,
    cookieListValKey,
    commitList
};