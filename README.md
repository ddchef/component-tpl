# 组建开发模板
> 一个通用的逐渐开发模板

## 管理方式
使用 pnpm-workspace 作为管理方式，所以包管理使用 pnpm。

## 使用方式

### 安装依赖
- 给每个 space 里面都安装依赖
```sh
pnpm -F "*" add webpack webpack-cli -D
```
- 给某个 space 安装依赖
```sh
pnpm -F "./packages/topo-view" add webpack webpack-cli -D
```

### 开发和发布
- 开发命令
```sh
pnpm run start
```
- 发布命令