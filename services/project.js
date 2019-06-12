const { size } = require('lodash')
const jsonwebtoken = require('jsonwebtoken')
const Config = require('../config')
const Sql = require(`../${Config.database.DBTYPE}-sql/sql/project`)
const Success = require('../lib/succeed')
const { AXIOS_SUCCESS } = require('../utils/const')


module.exports.getproject = async (info) => {
    let res = await Sql.getList(info)
    console.log(res)
    if (size(res) > 0) {
      return Success(AXIOS_SUCCESS, res)
    } else {
      return Success(AXIOS_SUCCESS, [])
    }
}
