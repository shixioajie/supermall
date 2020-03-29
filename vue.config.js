module.exports = {
  configureWebpack: {//配置路径代替符
    resolve: {
      alias: {
        'assets': '@/assets',//脚手架3|4可以这么写 @:src;
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
};
