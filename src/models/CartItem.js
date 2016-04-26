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
      required: true
    },
    goods: {
      label: 'Goods',
      type: ['goods.Goods']
    },
    sku: {
      label: 'SKU',
      type: ['goods.Sku']
    },
    skuName:{
      label:'SKU name',
      type:String
    },
    user: {
      label: 'User',
      type: ['user.User'],
      index: true
    },
    pic: {
      label: 'Main image',
      type: String
    },
    price: {
      label: 'Price',
      type: Number,
      default: 0,
      format: '0.00'
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
