/**
 * 小程序接口配置文件
 */
// 此处主机域名是腾讯云解决方案分配的域名

const envrironment = "DEV"// 设置当前环境变量 PRO ENV
const domain_dev = "gagent2.icpisp.com"
const domain_pro = "gbox.icpisp.com"
const host = getEnvDomain(envrironment)

const config = {
  appId: "wx3c8a36af866326ff", //小程序ID,通过微信公众平台获取

  index: `https://${host}/index`,// 首页
  uploadUrl: `https://${host}/upload`,// 上传到图片服务器
}

// 获取当前主机域名
function getEnvDomain(env) {
  if (env.toLocaleUpperCase() == "DEV") {
    return domain_dev
  }
  if (env.toLocaleUpperCase() == "PRO") {
    return domain_pro
  }
}
module.exports = config