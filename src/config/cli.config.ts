export default {
  // 开发以及部署时的URL
  // hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"
  // history模式默认使用"/"或者"/二级目录/"，记住只有hash时publicPath可以为空！！！
  base: '/',
  // 生产环境构建文件的目录名
  outDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境端口号
  devPort: 15022,
  //启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
  reportCompressedSize: true,

  // ----------------以下配置未使用---------------------------------------------------------
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: [],
  // 需要自动注入并加载的模块
  providePlugin: {},
  // npm run build时是否自动生成7z压缩包
  build7z: false,
  // npm run build时是否生成gzip
  buildGzip: false,
  // npm run build时是否开启图片压缩，由于国内网路原因image-webpack-loader必须使用cnpm安装，如无法使用cnpm，请配置false
  imageCompression: false,
  // pwa
  pwa: true,
  // 打包优化，如需实现服务器快速部署请配置false，如需提升网页加载速度请配置true
  buildOptimize: false,
  // 禁止在生产环境下使用调试
  noDebugger: true,
}
