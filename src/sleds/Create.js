/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-27
 * @author Liang <liang@maichong.it>
 */

import CartItem from '../models/CartItem';
const Goods = service.model('goods.Goods');
const Sku = service.model('goods.Sku');

export default class Create extends service.Sled {

  /**
   * 加入购物车
   * @param data
   *        data.user 用户记录
   *        data.goodsId 商品ID
   *        [data.skuId] SKU ID
   *        [data.quantity] 数量
   */
  async exec(data) {
    let { user, goodsId, skuId, quantity } = data;
    let sku;
    let goods = await Goods.findCache(goodsId);
    if (!goods) service.error('goods is not found');
    let discountValid = goods.discountValid;
    let discount = discountValid ? goods.discount : 0;
    let filters = { user: user._id, goods: goodsId };
    if (skuId) {
      sku = await Sku.findCache(skuId);
      if (!sku) service.error('Can not find sku');
      if (sku.goods.toString() !== goodsId) service.error('goods id error');
      discount = discountValid ? sku.discount : 0;
      filters.sku = skuId;
    } else if (goods.skus && goods.skus.length) {
      service.error('Please select sku');
    }
    let record = await CartItem.findOne(filters);
    if (!record) {
      record = new CartItem(filters);
      record.quantity = 1;
    } else {
      record.quantity++;
    }
    if (quantity) {
      record.quantity = quantity;
    }
    record.pic = sku ? sku.pic : goods.pic;
    record.title = goods.title;
    record.currency = goods.currency;
    record.price = sku ? sku.price : goods.price;
    record.discount = discount;
    record.skuDesc = sku ? sku.desc : '';
    await record.save();
    return record.data('list');
  }
}
