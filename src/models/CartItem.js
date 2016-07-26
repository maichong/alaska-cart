/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

import alaska from 'alaska';
import BALANCE from 'alaska-balance';

export default class CartItem extends alaska.Model {

  static label = 'Cart Item';
  static icon = 'shopping-cart';
  static defaultColumns = 'pic title user goods price sku createdAt';
  static defaultSort = '-sort';
  static noedit = true;
  static nocreate = true;
  static perPage = 100;

  static api = {
    list: 3,
    create: 3,
    remove: 3
  };

  static fields = {
    pic: {
      label: 'Picture',
      type: 'image'
    },
    title: {
      label: 'Title',
      type: String,
      required: true
    },
    goods: {
      label: 'Goods',
      ref: 'alaska-goods.Goods'
    },
    sku: {
      label: 'SKU',
      ref: 'alaska-goods.Sku'
    },
    skuDesc: {
      label: 'SKU Desc',
      type: String
    },
    user: {
      label: 'User',
      ref: 'alaska-user.User',
      index: true,
      private: true
    },
    currency: {
      label: 'Currency',
      type: 'select',
      options: BALANCE.currencies,
      default: BALANCE.defaultCurrency.value,
      group: 'price'
    },
    price: {
      label: 'Price',
      type: Number,
      default: 0,
      format: '0.00'
    },
    discount: {
      label: 'Discount',
      type: Number,
      default: 0,
      format: '0.00'
    },
    quantity: {
      label: 'Quantity',
      type: Number,
      default: 1
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
