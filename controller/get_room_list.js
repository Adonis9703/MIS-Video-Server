const requester = require('../logic/do_request.js')
const auth = require('../logic/auth.js')

module.exports = async (ctx, next) => {
  console.log(`ctx 获取房间列表`, ctx)
  if (!auth.checkResult(ctx)) {
    return
  }

  if (!auth.checkParams(ctx, ['cnt', 'index'])) {
    return
  }

  await requester.doListRooms(ctx)
}
