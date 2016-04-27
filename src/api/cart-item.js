/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-27
 * @author Liang <liang@maichong.it>
 */

export async function create(ctx) {
  if (!ctx.user) service.error(403);
  let data = ctx.state.data || ctx.request.body;
  let goodsId = data.goods;
  if (!goodsId) service.error(400);
  let skuId = data.sku;
  let quantity = data.quantity;
  ctx.body = await service.run('Create', { user: ctx.user, goodsId, skuId, quantity });
}
