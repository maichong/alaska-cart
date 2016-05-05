/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-03-30
 * @author Liang <liang@maichong.it>
 */

'use strict';

import alaska from 'alaska';

export default class CartService extends alaska.Service {
  constructor(options, alaska) {
    options = options || {};
    options.dir = options.dir || __dirname;
    options.id = options.id || 'alaska-cart';
    super(options, alaska);
  }
}
