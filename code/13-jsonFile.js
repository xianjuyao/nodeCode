/*

    npm --save 将依赖信息加载到 package.json 中
    我们建议每一个项目都要有一个[ package. json]文件(包描述文件，就像产品的说明书一样)，给人踏实的感
    觉。
    这个文件可以通过 【  npm init 命令】的方式来自动初始化出来。
    对于咱们目前来讲，最有用的是那个dependencies选项，可以用来帮我们保存第三方包的依赖信息。

   如果你的node_ modules删除了也不用担心，我们只需要: npm install 就会自动把package. json中的
   dependencies中所有的依赖项都下载回来。

   npm常用命令
   ●npm init
    。npm init -y可以跳过向导，快速生成
   ●npm install
    。一次性把dependencies选项中的依赖项全部安装
    。npm i
   ●npm install包名
    。只下载
    。npm i包名
   ●npm install --save包名
    。下载并且保存依赖项(package.json 文件中的dependencies选项)
    。npm i -S 包名
    ●npm uninstall包名
    。只删除，如果有依赖项会依然保存
    。npm un 包名
    ●npm uninstall --save包名
    。删除的同时也会把依赖信息也去除
    。npm un -S  包名

    查看  npm 配置信息   npm list

    配置npm 信息
    npm config set register

 */