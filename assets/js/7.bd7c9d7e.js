(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(t,v,_){"use strict";_.r(v);var e=_(28),i=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),_("p",[t._v("Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。\nGit 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。\nGit 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。")]),t._v(" "),_("h2",{attrs:{id:"常用命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),_("ul",[_("li",[t._v("git init : 本地项目初始化")]),t._v(" "),_("li",[t._v("git add : 编辑区添加到暂存区")]),t._v(" "),_("li",[t._v("git commit : 暂存区提交到分支")]),t._v(" "),_("li",[t._v("git push : 同步到远程仓库")]),t._v(" "),_("li",[t._v("git remote : 创建远程主机名")]),t._v(" "),_("li",[t._v("git clone : 克隆项目到本地")]),t._v(" "),_("li",[t._v("git pull : 拉取项目代码")]),t._v(" "),_("li",[t._v("git branch : 查看分支")]),t._v(" "),_("li",[t._v("git branch name : 创建分支")]),t._v(" "),_("li",[t._v("git checkout : 切换分支")]),t._v(" "),_("li",[t._v("git merge : 合并分支")]),t._v(" "),_("li",[t._v("git log : 查看历史记录")]),t._v(" "),_("li",[t._v("git reset : 恢复版本")]),t._v(" "),_("li",[t._v("git reflog : 查看命令记录")]),t._v(" "),_("li",[t._v("git gui : 查看改动")]),t._v(" "),_("li",[t._v("git diff: 查看改动")]),t._v(" "),_("li",[t._v("gitk: 查看所有提交信息")])]),t._v(" "),_("h2",{attrs:{id:"日常积累"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日常积累"}},[t._v("#")]),t._v(" 日常积累")]),t._v(" "),_("h4",{attrs:{id:"git-配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#git-配置"}},[t._v("#")]),t._v(" git 配置")]),t._v(" "),_("ul",[_("li",[t._v("git 配置基本信息"),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("配置用户名: ")]),_("code",[t._v('git config --global user.name "xiaohuamao"')]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("配置邮箱: ")]),_("code",[t._v('git config --global user.email "xiaohuamao93@163.com"')]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("查看配置信息：")]),t._v(" "),_("code",[t._v("git config --global --list")])],1),t._v(" "),_("li",[t._v("生成ssh"),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("cd ~/.ssh \nssh-keygen -o  \ncat ~/.ssh/id_rsa.pub\n")])])])]),t._v(" "),_("li",[t._v("暂存"),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("在原文件上修改")]),t._v(" "),_("code",[t._v('git stash save "message"')]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("有新文件")]),t._v(" "),_("code",[t._v("git stash -u")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("查看stash了哪些存储")]),t._v(" "),_("code",[t._v("git stash list")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("应用第一个缓存")]),t._v(" "),_("code",[t._v("git stash apply")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("应用第n个缓存")]),t._v(" "),_("code",[t._v("git stash apply stash@{n}")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("清除缓存")]),t._v(" "),_("code",[t._v("git stash clear")])],1),t._v(" "),_("li",[t._v("丢弃修改"),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("丢弃本地某个文件修改")]),t._v(" "),_("code",[t._v("git checkout --a.txt")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("丢弃本地的修改")]),t._v(" "),_("code",[t._v("git checkout .")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("丢弃暂存的修改")]),t._v(" "),_("code",[t._v("git reset HEAD^")])],1),t._v(" "),_("li",[t._v("回退"),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("回退到上一个版本")]),t._v(" "),_("code",[t._v("git reset --hard HEAD^")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("回退到上10个版本")]),t._v(" "),_("code",[t._v("git reset --hard HEAD^10")]),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("回退到某个版本")]),t._v(" "),_("code",[t._v("git reset commitId")])],1),t._v(" "),_("li",[t._v("冲突"),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("1."),_("code",[t._v("git pull")]),t._v("出现冲突后,先"),_("code",[t._v("git mergetool")]),t._v("合并冲突,\n合并完后 "),_("code",[t._v("git add.")]),t._v(" "),_("code",[t._v("git commit -m")]),t._v("  提交冲突  "),_("code",[t._v("git rebase --continue")]),t._v("\n本地为空，再合并"),_("code",[t._v("git mergetool")])])],1),t._v(" "),_("li",[t._v("代码提交"),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('git add .\ngit commit -m "message"\ngit push origin master\n')])])])]),t._v(" "),_("li",[t._v("以master为基础，将dev分支上的修改添加到master上，并生成新的版本"),_("br"),t._v(" "),_("code",[t._v("git(dev): git rebase master")])]),t._v(" "),_("li",[t._v("从REBASE版本回退到master分支上"),_("br"),t._v(" "),_("code",[t._v("git rebase --continue")])]),t._v(" "),_("li",[t._v("回退远程分支版本的方法\n"),_("ol",[_("li",[t._v("该方法会有问题，pull 下来还是有"),_("br"),t._v(" "),_("code",[t._v("git reset --hard HEAD~1")]),_("br"),t._v(" "),_("code",[t._v("git push --force")])]),t._v(" "),_("li",[t._v("推荐用下面这种方法"),_("br"),t._v(" "),_("code",[t._v("git reset + commit号")]),_("br"),t._v(" "),_("code",[t._v("git push -f")])])])])]),t._v(" "),_("h4",{attrs:{id:"分支相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分支相关"}},[t._v("#")]),t._v(" 分支相关")]),t._v(" "),_("ul",[_("li",[t._v("本地创建分支  "),_("code",[t._v("git checkout dev")])]),t._v(" "),_("li",[t._v("本地创建并切换分支 "),_("code",[t._v("git checkout dev -b")])]),t._v(" "),_("li",[t._v("本地创建并关联远程分支： "),_("code",[t._v("git checkout -b dev origin/dev")])]),t._v(" "),_("li",[t._v("推送到远程分支,远程没有的话会创建dev  "),_("code",[t._v("git push origin dev:dev")])]),t._v(" "),_("li",[t._v("删除本地分支  "),_("code",[t._v("git branch -d dev")])]),t._v(" "),_("li",[t._v("合并分支\n"),_("code",[t._v("git merge dev")])])]),t._v(" "),_("h2",{attrs:{id:"插件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[t._v("#")]),t._v(" 插件")]),t._v(" "),_("ol",[_("li",[t._v("git下载地址"),_("a",{attrs:{href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),_("OutboundLink")],1),_("br")]),t._v(" "),_("li",[t._v("git 合并工具 kdiff3 ,"),_("a",{attrs:{href:"https://sourceforge.net/projects/kdiff3/files/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载链接"),_("OutboundLink")],1),_("br"),t._v(" "),_("font",{attrs:{size:"2"}},[t._v("语法")]),t._v("："),_("code",[t._v("git mergetool")])],1)]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")])])}),[],!1,null,null,null);v.default=i.exports}}]);