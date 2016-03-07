/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-07
 * @author Liang <liang@maichong.it>
 */

const service = __service;

export default class Cart extends service.Model {

  static label = 'Cart';
  static defaultColumns = 'title,user,item,createdAt';
  static defaultSort = '-sort';

  static fields = {
    title: {
      label: '标题',
      type: String,
      require: true
    },
    goods: {
      label: '商品',
      type: 'relationship',
      ref: 'Goods'
    },
    sku: {
      label: 'SKU',
      type: 'relationship',
      ref: 'Sku'
    },
    user: {
      label: '用户',
      type: 'relationship',
      ref: 'User'
    },
    quantity: {
      label: '数量',
      type: Number
    },
    createdAt: {
      label: '添加时间',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}