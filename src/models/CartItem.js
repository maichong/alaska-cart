/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

export default class CartItem extends service.Model {

  static label = 'Cart Item';
  static defaultColumns = 'title,user,goods,sku,createdAt';
  static defaultSort = '-sort';

  static fields = {
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

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}
