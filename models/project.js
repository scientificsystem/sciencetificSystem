'use strict'
const { get } = require('lodash');
const Signature = require(`../lib/signature`)

class Project {

    constructor(info) {
        console.log(info, get(info, 'username'))
        this.name = get(info, 'name')                   //用户账号
        this.pageRow = get(info, 'pageRow')                       //密码
        this.pageSize = get(info, 'pageSize')
        this.card = get(info, 'card')                     //年龄

    }

}
module.exports = Project