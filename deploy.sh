###
 # @Descripttion: 
 # @version: v1.0
 # @Author: linda
 # @Date: 2022-03-05 18:44:45
 # @LastEditors: linda
 # @LastEditTime: 2022-03-05 18:57:20
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/sailyaa/component-lib-vue-demo.git master:gh-pages

cd -