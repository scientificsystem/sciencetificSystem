const { forOwn, trimStart, size } = require('lodash');
const { query } = require('../config')
const TableName = 'project'

const getList = () => {
    return query(`select * from ${TableName}`, '')
}

const addProject = (info) => {
    let values = '', keys = '';
    forOwn(info, (value, key) => {
        values += `,'${value}'`
        keys += `,${key}`
    })
    return query(`insert into ${TableName} (${trimStart(keys, ',')}) value(${trimStart(values, ',')})`, info)
}

module.exports = {
    getList,
    addProject
}