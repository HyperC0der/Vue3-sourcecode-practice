import utils from "./utils";


utils.registerErrorHandler((e) => {
  console.log(e)
})

utils.foo(() => {
  console.log('xxx')
})
utils.bar(() => {
  console.log('xxx')
})
