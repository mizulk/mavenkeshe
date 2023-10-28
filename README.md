# mavenkeshe
2023软件管理配置前端项目

## 克隆方法
1. 打开一个文件夹（推荐放在路径没有中文和空格的地方）
2. 打开git bash 输入`git clone git@github.com:mizulk/mavenkeshe.git`
3. 打开cmd输入`npm install`或者使用`pnpm install`(推荐)
4. 使用`pnpm dev`来运行

## `pnpm`安装方法
1. 用管理员权限打开cmd
2. 输入`npm install -g pnpm`

## 运行方法
### 运行环境
使用[nginx](https://nginx.org/en/)部署运行，服务器地址为localhost:8080
### 配置nginx
将打包好的代码文件夹放入nginx的目录下面在打开conf文件夹找到并编辑nginx.conf文件。在server中配置端口号和location为打包号的代码文件夹名称即可  
例如：
```conf
server {
	listen       8088;
    server_name  localhost;


    location / {
    	root   mavenkeshe;
        index  index.html index.htm;
    }

	# ...
}
```