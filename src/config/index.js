// 接口基准地址
export default {
  mockEnv: 'test', // 初始环境
  deviceType: 'pc',
  host: '', // 初始地址
  // 基准地址表
  hostServe: {
    test: 'http://test.com/v4',
    uat: 'http://uat.com/v4',
    pre: '/v4',
    prod: '/v4'
  },
}
