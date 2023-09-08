let handlerError = null
export default {
  //foo(fn) {
  //  fn && fn()
  //}

  /*添加错误处理*/
  foo(fn) {
    //try {
    //  fn && fn()
    //} catch (e) {
    //  console.log(e)
    //}
    callWithErrorHandling(fn)
  },
  registerErrorHandler(fn) {
    handlerError = fn
  },
  bar(fn) {
    //try {
    //  fn && fn()
    //} catch (e) {
    //  console.log(e)
    //}
    callWithErrorHandling(fn)
  }
}

function callWithErrorHandling(fn) {
  try {
    fn && fn()
  } catch (e) {
    //console.log(e)
    // 将捕获到的错误传递给用户的错误处理函数
    handlerError(e)
  }
}
