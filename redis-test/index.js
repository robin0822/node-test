/*
 * @Author: robin0822 125346665@qq.com
 * @Date: 2023-02-22 13:45:56
 * @LastEditors: robin0822 125346665@qq.com
<<<<<<< HEAD
 * @LastEditTime: 2023-02-22 17:02:27
=======
 * @LastEditTime: 2023-02-22 14:23:13
>>>>>>> parent of 25de09d (增加注释)
 * @FilePath: /node-blog/redis-test/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const redis = require('redis');

const redisClient = redis.createClient(6379,'127.0.0.1');

redisClient.on('error',err=>{
console.log(err);
});

console.log('启动');

redisClient.connect().then(()=>{

    console.log('链接成功');

    redisClient.set('myname','zhangsan').then(value=>{
       console.log('设置成功',value);

       redisClient.get('myname22').then(value1=>{
        console.log('获取成功',value1);
        redisClient.disconnect();
       }).catch(err=>{
        console.log(err);
       });
    });

   
});




console.log('test2222');


