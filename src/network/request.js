import axios from 'axios'

export function request(config) {
  // 1 配置基本文件

  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/',
    timeout: 3000
  });

  // 1.1 拦截这个实列
  instance.interceptors.request.use(//请求拦截
    config => {
      // console.log(config);
      return config
    }, error => {
      // console.log(error);
    });
  instance.interceptors.response.use(
    response => {
      // console.log(response);
      return response.data
    },
    reject => {
      // console.log(reject);
    }
  );

  //
  // instance(config.initConfig).then(data => {
  //   config.succeed(data)
  // }, error => {
  //   config.fault(error)
  // })
  // 2 用 promise分装
  // return new Promise((resolve, reject) => {
  //   const instance = axios.create({
  //     baseURL: 'http://123.207.32.32:8000/',
  //     timeout: 3000
  //   });
  //
  //   instance(config).then(data => {
  //     resolve(data)
  //   }, error => {
  //     reject(error)
  //   })
  // })

  //  3或者直接使用
  return instance(config)

}

export function mockData(config) {

  const instance = axios.create({
    baseURL: 'https://result.eolinker.com/',
    timeout: 3000,
    method: 'get'
  });
  return instance(config);
}



