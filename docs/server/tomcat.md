# tomcat
tomcat功能类似nginx,目前用来存储图片，120服务器上的图片都存储在tomcat
### 安装路径
```
/usr/local/tomcat9/bin
```
### 常用命令

1.修改配置信息
```vim conf/server.html```

2. 进入到bin目录下面进行关闭和启动命令

3. 关闭
```
./shutdown.sh
```
4.启动
```
./startup.sh
```
5.查看是否关闭
```
ps -ef|grep java
```
6. 查看tomcat的安装路径
```
sudo find / -name *tomcat*
```
