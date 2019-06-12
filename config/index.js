const signature = require('../lib/signature')
const { TOKEN_SINGED_KEYS } = require('../utils/const')
const config = {
    database: {
        DBTYPE: 'mysql',
        DATABASE: 'kydb', //数据库名称
        USERNAME: 'root', //mysql用户名
        PASSWORD: '123456', //mysql密码
        PORT: '3306', //mysql端口号
        HOST: 'localhost' //服务器ip

    },
    secret: {
        sign: signature.md5(TOKEN_SINGED_KEYS)
    }
}
module.exports = config 