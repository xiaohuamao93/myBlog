# 浏览器相关知识

## 浏览器缓存机制
expires   
cache-control
 * public 公共的
 * no-cache 
 * max-age 
last-modified
eTag

#### Expires 缺点：
  1.缓存过期以后，服务器不管 a.js有没有变化，都会再次读取 a.js文件，并返给浏览器。   
  2.过期控制不稳定，因为浏览器端可以随意修改时间，导致缓存使用不精准。
  
#### webpack哈希值
  hash: 跟整个构建项目有关，构建生产的文件hash值都是一样的，只要项目中有文件改动，整个项目构建的hash都会改变   
  chunkhash: 根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的hash值。   
  contenthash: 由文件内容产生的hash值，内容不同产生的contenthash值也不一样。
  
#### chrome 调试一闪而过的元素技巧
  鼠标先悬停至元素出现，然后点击右键，再将鼠标移到控制面板按N键，即可定位到当前元素

#### 国外地址换成国内地址(阿里)
npm config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.npm.taobao.org

#### 发布包的时候需要重新切回去
npm config set registry https://registry.npmjs.org
yarn config set registry https://registry.yarnpkg.com

#### 查看当前镜像地址工具
npm config get registry

#### nrm快速切换镜像地址工具
npm i nrm -g
nrm ls
nrm use yarn

  
