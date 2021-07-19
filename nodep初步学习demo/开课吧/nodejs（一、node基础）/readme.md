## 发布自己的npm包
- 第一步，初始化包-----发布前必须有package.json,因此需要先初始化 `npm init -y`
- 第二步，写自己的包
- 第三步，发布之前检测package.json中的name在npm官网中(https://www.npmjs.com/)是否已经存在(这里的name即包名)，若存在则修改；
- 第四步，发布，如果没有账号，请先注册npm账号，之后发布 --- `npm publish`

## 删除自己发布的npm包
- 进入包所在的目录
- `npm unpublish --force`