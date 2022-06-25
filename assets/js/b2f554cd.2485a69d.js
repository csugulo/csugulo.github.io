"use strict";(self.webpackChunkcsugulo_github_io=self.webpackChunkcsugulo_github_io||[]).push([[477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"clickhouse-build-from-source","metadata":{"permalink":"/blog/clickhouse-build-from-source","editUrl":"https://github.com/csugulo/csugulo.github.io/tree/main/blog/2022/06/clickhouse-build-from-source.md","source":"@site/blog/2022/06/clickhouse-build-from-source.md","title":"\u4ece\u6e90\u7801\u7f16\u8bd1Clickhouse","description":"Ubuntu22.04\u4e0b\u4f7f\u7528cmake+ninja\u6784\u5efa\uff0cclang++\u7f16\u8bd1Clickhouse\u9879\u76ee","date":"2022-06-25T15:17:26.000Z","formattedDate":"June 25, 2022","tags":[{"label":"clickhouse","permalink":"/blog/tags/clickhouse"},{"label":"olap","permalink":"/blog/tags/olap"},{"label":"c++","permalink":"/blog/tags/c"}],"readingTime":0.99,"truncated":false,"authors":[],"frontMatter":{"slug":"clickhouse-build-from-source","title":"\u4ece\u6e90\u7801\u7f16\u8bd1Clickhouse","tags":["clickhouse","olap","c++"]}},"content":"Ubuntu22.04\u4e0b\u4f7f\u7528cmake+ninja\u6784\u5efa\uff0cclang++\u7f16\u8bd1Clickhouse\u9879\u76ee\\n\\n## \u5b89\u88c5\u4f9d\u8d56\\n\\n\\n\u5b89\u88c5\u6784\u5efa/\u7f16\u8bd1\u76f8\u5173\u7684\u4f9d\u8d56\\n\\n* `clang` - \u57fa\u4e8ellvm\u7684c/c++/objective-c\u7f16\u8bd1\u5668\\n* `cmake` - \u4e00\u4e2a\u5f00\u6e90\u8de8\u5e73\u53f0\u7684\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177\\n* `ninja` - \u4e00\u4e2a\u4e13\u6ce8\u4e8e\u901f\u5ea6\u7684\u5c0f\u578b\u6784\u5efa\u7cfb\u7edf\\n* `ccache` - \u7528\u4e8e\u52a0\u901f\u7f16\u8bd1\u7684\u5de5\u5177\\n\\n```sh\\nsudo apt update && \\\\\\nsudo apt install -y clang cmake ninja-build git ccache\\n```\\n\\n## \u7f16\u8bd1\\n\\n1. \u4e0b\u8f7d\u9879\u76ee\\n\\n```sh\\ngit clone --recursive git@github.com:ClickHouse/ClickHouse.git\\n```\\n\\nclickhouse\u4f9d\u8d56\u5e93\u975e\u5e38\u591a\uff0c\u8fd9\u4e00\u6b65\u901a\u5e38\u6bd4\u8f83\u8017\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e`http_proxy`, `https_proxy` \u73af\u5883\u53d8\u91cf\u4f7f\u7528\u4ee3\u7406\u670d\u52a1\uff0c\u52a0\u5165`--jobs N`\u5e76\u884c\u62c9\u53d6\u4f9d\u8d56\\n\\n2. \u4f7f\u7528cmake/ninja\u6784\u5efa\u9879\u76ee\\n```\\nmkdir build && cd build\\ncmake .. \\\\\\n    -DCMAKE_BUILD_TYPE=Release \\\\\\n    -DCMAKE_C_COMPILER=clang \\\\\\n    -DCMAKE_CXX_COMPILER=clang++ \\\\ \\n    -G Ninja\\n```\\n\\n3. \u7f16\u8bd1\u9879\u76ee\\n```\\nninja -j\\n```\\n\\n## \u8fd0\u884c\\n\\nserver:\\n\\n```sh\\n./build/programs/clickhouse-server\\n```\\n\\nclient:\\n\\n```sh\\n./build/programs/clickhouse-client\\n```"}]}')}}]);