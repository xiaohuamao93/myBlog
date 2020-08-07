# nginx
## nginx的一些常用命令
查看端口是否开放
```
netstat -na|grep 8080
```

1.查看进程
```
ps aux|grep nginx
```
2.修改nginx配置文件
```
vim /usr/local/nginx/conf/nginx.conf
```
3.启动
```
/usr/local/nginx/sbin/nginx -s reload
```
4.停止
```
/usr/local/nginx/sbin/nginx -s stop
```
- 解决` nginx: [error] open() "/usr/local/nginx/logs/nginx.pid" failed (2: No such file or directory)`
```
/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
```
5. ssl证书配置
`登录您的Nginx服务器，在Nginx安装目录（默认Nginx安装目录为/usr/local/nginx/conf）下创建cert目录，并将下载的证书文件和密钥文件拷贝到cert目录中`
参考链接 [阿里云ssl](https://help.aliyun.com/document_detail/98728.html?spm=5176.2020520163.0.0.7b1c63fd63fdFS)
```
# 以下属性中以ssl开头的属性代表与证书配置有关，其他属性请根据自己的需要进行配置。
server {
    listen 443 ssl;   #SSL协议访问端口号为443。此处如未添加ssl，可能会造成Nginx无法启动。
    server_name localhost;  #将localhost修改为您证书绑定的域名，例如：www.example.com。
    root html;
    index index.html index.htm;
    ssl_certificate cert/domain name.pem;   #将domain name.pem替换成您证书的文件名。
    ssl_certificate_key cert/domain name.key;   #将domain name.key替换成您证书的密钥文件名。
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  #使用此加密套件。
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;   #使用该协议进行配置。
    ssl_prefer_server_ciphers on;   
    location / {
        root html;   #站点目录。
        index index.html index.htm;   
    }
}                   
```
