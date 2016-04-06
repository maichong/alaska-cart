/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

export default{
  prefix: '/cart',
  controllers: false,
  middlewares: false,
  services: [
    { id: 'alaska-user', alias: 'user' },
    { id: 'alaska-goods', alias: 'goods' },
  ]
};
