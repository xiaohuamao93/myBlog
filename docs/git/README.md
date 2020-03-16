# git
## 介绍
Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。
## 常用命令
- git init : 本地项目初始化
- git add : 编辑区添加到暂存区
- git commit : 暂存区提交到分支
- git push : 同步到远程仓库
- git remote : 创建远程主机名
- git clone : 克隆项目到本地
- git pull : 拉取项目代码
- git branch : 查看分支
- git branch name : 创建分支
- git checkout : 切换分支
- git merge : 合并分支
- git log : 查看历史记录
- git reset : 恢复版本
- git reflog : 查看命令记录
- git gui : 查看改动
- git diff: 查看改动
- gitk: 查看所有提交信息

## 日常积累
#### git 配置
- git 配置基本信息  
    <font size=2>配置用户名: </font>`git config --global user.name "xiaohuamao"`  
    <font size=2>配置邮箱: </font>`git config --global user.email "xiaohuamao93@163.com"`  
    <font size=2>查看配置信息：</font> `git config --global --list`  
- 生成ssh 
    ```
    cd ~/.ssh 
    ssh-keygen -o  
    cat ~/.ssh/id_rsa.pub
    ```
- 暂存  
    <font size=2>在原文件上修改</font> `git stash save "message"`  
    <font size=2>有新文件</font> `git stash -u`  
    <font size=2>查看stash了哪些存储</font> `git stash list`  
    <font size=2>应用第一个缓存</font> `git stash apply`  
    <font size=2>应用第n个缓存</font> `git stash apply stash@{n} `  
    <font size=2>清除缓存</font> `git stash clear `
- 丢弃修改  
    <font size=2>丢弃本地某个文件修改</font> `git checkout --a.txt`  
    <font size=2>丢弃本地的修改</font> `git checkout .`  
    <font size=2>丢弃暂存的修改</font> `git reset HEAD^`
- 回退  
    <font size=2>回退到上一个版本</font> `git reset --hard HEAD^`  
    <font size=2>回退到上10个版本</font> `git reset --hard HEAD^10`  
    <font size=2>回退到某个版本</font> `git reset commitId`
- 冲突  
    <font size=2>1.`git pull`出现冲突后,先`git mergetool`合并冲突,
    合并完后 `git add. ` `git commit -m`  提交冲突  `git rebase --continue`
    本地为空，再合并`git mergetool` </font> 
- 代码提交
    ```
    git add .
    git commit -m "message"
    git push origin master
    ```
- 以master为基础，将dev分支上的修改添加到master上，并生成新的版本  
    `git(dev):  git rebase master`
- 从REBASE版本回退到master分支上  
    `git rebase --continue`
- 回退远程分支版本的方法  
    1. 该方法会有问题，pull 下来还是有  
        `git reset --hard HEAD~1`  
        `git push --force`
    2. 推荐用下面这种方法  
        `git reset + commit号`  
        `git push -f`
#### 分支相关
- 本地创建分支  `git checkout dev`
- 本地创建并切换分支 `git checkout dev -b`
- 本地创建并关联远程分支： `git checkout -b dev origin/dev`
- 推送到远程分支,远程没有的话会创建dev  `git push origin dev:dev`
- 删除本地分支  `git branch -d dev`
- 合并分支
    `git  merge dev`

## 插件
1. git下载地址[下载链接](https://git-scm.com/download/win)<br/>
2. git 合并工具 kdiff3 ,[下载链接](https://sourceforge.net/projects/kdiff3/files/)  
<font size=2>语法</font>：`git mergetool`
## 参考资料
