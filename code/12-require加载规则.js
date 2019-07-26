    /*
        优先从缓存中加载
        判断模块标识:
            核心模块
            第三方模块
            自定义模块

        如果是非路径形式的模块标识
        路径形式的模块:
            ./当前目录，不可省略
            ../上一级目录，不可省略
            /xxx几乎不用
            d:/a/foo.js几乎不用
            首位的/在这里表示的是当前文件模块所属磁盘根路径
            .js 后缀名可以省略
            require('.foo.js')



            核心模块的本质也是文件
            核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
            require('fs' )
            require( 'http')



            第三方模块
                凡是第三方模块都必须通过npm 来下载
                使用的时候就可以通过require('包名')的方式来进行加载才可以使用
                不可能有任何一个第三方包和核心模块的名字是一样的
                既不是核心模块、也不是路径形式的模块
                先找到当前文件所处目录中的node_ modules 目 录
                         node_ modules/art -template
                         node_ modules/art-template/package.json 文件
                         node_ modules/art-template/package.json 文件中的main 属性
                         main属性中就记录了art-template 的入口模块


                如果package.json文件不存在或者main指定的入口模块是也没有
                则node会自动找该目录下的index.js
                也就是说index.js 会作为一个默认备选项
                如果以上所有任何一个条件都不成立，则会进入上一级目录中的node modules
                        如果上一级还没有，则继续往上上一级查找
                        如果直到当前磁盘根目录还找不到，最后报错:
                        can not find module XXX

                        注意:我们一个项目有且只有一个node_ modules,一般放在项目根目录中
                        不会出现有多个node_ modules

     */
        // let main = require("../module/main.js");
        // require("../module/add.js");
        // let template=require("art-template");
        // console.log(template);