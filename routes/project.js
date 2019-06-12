const router = require('koa-router')()
const config = require('../config')
const project = require('../services/project')
router.prefix('/methods/project')

router.post('/getList', async (ctx, next) => {
    let res = await project.getproject(ctx.request.body);
    ctx.response.type = 'application/json'
    ctx.body = res
})


module.exports = router