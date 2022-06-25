---
slug: clickhouse-build-from-source
title: 从源码编译Clickhouse
tags: [clickhouse, olap, c++]
---

Ubuntu22.04下使用cmake+ninja构建，clang++编译Clickhouse项目

## 安装依赖


安装构建/编译相关的依赖

* `clang` - 基于llvm的c/c++/objective-c编译器
* `cmake` - 一个开源跨平台的自动化构建工具
* `ninja` - 一个专注于速度的小型构建系统
* `ccache` - 用于加速编译的工具

```sh
sudo apt update && \
sudo apt install -y clang cmake ninja-build git ccache
```

## 编译

1. 下载项目

```sh
git clone --recursive git@github.com:ClickHouse/ClickHouse.git
```

clickhouse依赖库非常多，这一步通常比较耗时，可以设置`http_proxy`, `https_proxy` 环境变量使用代理服务，加入`--jobs N`并行拉取依赖

2. 使用cmake/ninja构建项目
```
mkdir build && cd build
cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_C_COMPILER=clang \
    -DCMAKE_CXX_COMPILER=clang++ \ 
    -G Ninja
```

3. 编译项目
```
ninja -j
```

## 运行

server:

```sh
./build/programs/clickhouse-server
```

client:

```sh
./build/programs/clickhouse-client
```
