## 目录信息
```
eduplan-pc/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

## 更新信息

## 模块信息
```
## 全局Loading
import Loading from 'common/loading'
render(){
    return (
    <Loading loading={true}/>
    )
}
Loading.defaultProps = {
    loading: true
}
```

## 配置信息
```
## 公共路劲别名
component: 'src/component'
util: 'src/utils'
$http: 'src/utils/axios.js'
common: 'src/common'
```

## 分支管理
```
主干分支：master
预发布分支：release
主开发分支：develop
开发分支：feature/name-work
```

## Available Scripts

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

打包文件

### `npm run eject`

释放webpack配置，目前已释放，慎重配置！