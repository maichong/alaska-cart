'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

class CartItem extends service.Model {

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}
exports.default = CartItem;
CartItem.label = 'Cart Item';
CartItem.defaultColumns = 'title,user,goods,sku,createdAt';
CartItem.defaultSort = '-sort';
CartItem.fields = {
  title: {
    label: 'Title',
    type: String,
    require: true
  },
  goods: {
    label: 'Goods',
    type: ['goods.Goods']
  },
  sku: {
    label: 'SKU',
    type: ['goods.Sku']
  },
  user: {
    label: 'User',
    type: ['user.User'],
    index: true
  },
  quantity: {
    label: 'Quantity',
    type: Number
  },
  createdAt: {
    label: 'Created At',
    type: Date
  }
};