"use strict";(self.webpackChunkcsugulo_github_io=self.webpackChunkcsugulo_github_io||[]).push([[1477],{10:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"raspberry-pi-openwrt-bypass-router-with-clashx","metadata":{"permalink":"/blog/raspberry-pi-openwrt-bypass-router-with-clashx","editUrl":"https://github.com/csugulo/csugulo.github.io/tree/main/blog/2022/06/raspberry-pi-openwrt-bypass-router.md","source":"@site/blog/2022/06/raspberry-pi-openwrt-bypass-router.md","title":"\u6811\u8393\u6d3e+OpenWrt+ClashX\u5b9e\u73b0\u65c1\u8def\u7531\u79d1\u5b66\u4e0a\u7f51","description":"\u60f3\u5728\u7535\u89c6\u673a\u4e0a\u770b\u7f51\u98de\u8d2d\u5165\u4e86\u5c0f\u7c73\u76d2\u5b504\u6d77\u5916\u7248\uff0c\u5c0f\u7c73\u76d2\u5b50\u5fc5\u987b\u767b\u9646Google\u8d26\u53f7\u624d\u80fd\u4e0b\u8f7d\u5b89\u88c5\u5e94\u7528\uff0c\u5373\u4f7f\u4e0b\u8f7d\u4e86Netflix\u4e5f\u9700\u8981\u79d1\u5b66\u4e0a\u7f51\u624d\u80fd\u89c2\u770b\u3002\u6b63\u597d\u624b\u5934\u6709\u4e00\u53f0\u95f2\u7f6e\u7684\u6811\u8393\u6d3e4b\uff0c\u6253\u7b97\u7528\u6811\u8393\u6d3e\u8dd1\u4e00\u4e2a\u65c1\u8def\u7531\u4f9b\u7535\u89c6\u76d2\u5b50\u79d1\u5b66\u4e0a\u7f51\u3002","date":"2022-06-26T09:08:37.826Z","formattedDate":"June 26, 2022","tags":[{"label":"raspberry-pi","permalink":"/blog/tags/raspberry-pi"},{"label":"openwrt","permalink":"/blog/tags/openwrt"},{"label":"clashX","permalink":"/blog/tags/clash-x"}],"readingTime":6.325,"truncated":false,"authors":[],"frontMatter":{"slug":"raspberry-pi-openwrt-bypass-router-with-clashx","title":"\u6811\u8393\u6d3e+OpenWrt+ClashX\u5b9e\u73b0\u65c1\u8def\u7531\u79d1\u5b66\u4e0a\u7f51","tags":["raspberry-pi","openwrt","clashX"]},"nextItem":{"title":"\u4ece\u6e90\u7801\u7f16\u8bd1Clickhouse","permalink":"/blog/clickhouse-build-from-source"}},"content":"\u60f3\u5728\u7535\u89c6\u673a\u4e0a\u770b\u7f51\u98de\u8d2d\u5165\u4e86\u5c0f\u7c73\u76d2\u5b504\u6d77\u5916\u7248\uff0c\u5c0f\u7c73\u76d2\u5b50\u5fc5\u987b\u767b\u9646Google\u8d26\u53f7\u624d\u80fd\u4e0b\u8f7d\u5b89\u88c5\u5e94\u7528\uff0c\u5373\u4f7f\u4e0b\u8f7d\u4e86Netflix\u4e5f\u9700\u8981\u79d1\u5b66\u4e0a\u7f51\u624d\u80fd\u89c2\u770b\u3002\u6b63\u597d\u624b\u5934\u6709\u4e00\u53f0\u95f2\u7f6e\u7684\u6811\u8393\u6d3e4b\uff0c\u6253\u7b97\u7528\u6811\u8393\u6d3e\u8dd1\u4e00\u4e2a\u65c1\u8def\u7531\u4f9b\u7535\u89c6\u76d2\u5b50\u79d1\u5b66\u4e0a\u7f51\u3002\\n\\n---\\n\\n## \u51c6\u5907\\n\\n1. \u4e00\u53f0\u7528\u4e8e\u5237\u955c\u50cf&\u914d\u7f6e\u8f6f\u8def\u7531\u7684\u7535\u8111\\n2. \u4e00\u4e2a\u6811\u8393\u6d3e\\n3. \u4e00\u5f20micro sd\u5361&\u8bfb\u5361\u5668\\n4. \u4e00\u6761\u7528\u4e8e\u8fde\u63a5\u6811\u8393\u6d3e\u4e0e\u8def\u7531\u5668\u7684\u7f51\u7ebf\\n5. \u4e00\u4e2aClashX\u8ba2\u9605\u94fe\u63a5\\n6. \u7535\u8111\u5b89\u88c5[balenaEtcher](https://www.balena.io/etcher/)\u7528\u4e8e\u5237\u5165\u56fa\u4ef6\u5230SD\u5361\\n\\n---\\n\\n## \u5237\u5165\u56fa\u4ef6\\n\\n\u6bd4\u8f83\u4e86\u591a\u4e2aOpenWrt\u7684\u56fa\u4ef6\uff0c\u8003\u8651\u5bf9\u6811\u8393\u914d\u7684\u9002\u914d/\u81ea\u5e26\u63d2\u4ef6/\u4e2d\u6587\u652f\u6301\uff0c\u672c\u6587\u4f7f\u7528SuLingGG\u53d1\u5e03\u7684[OpenWrt-Rpi](https://github.com/SuLingGG/OpenWrt-Rpi) \u56fa\u4ef6\u3002\\n\\n**\u4ee5\u4e0b\u5185\u5bb9\u53c2\u8003\u81ea[OpenWrt-Rpi](https://doc.openwrt.cc/) \u6587\u6863**\\n\\n### 1. \u5237\u5165\u5b58\u50a8\u8fd8\u539f\u56fa\u4ef6\\n\\n\u5728[\u5b58\u50a8\u8fd8\u539f\u56fa\u4ef6\u4e0b\u8f7d\u9875\u9762](https://openwrt.cc/restore/)\u4e0b\u8f7d\u5b58\u50a8\u8fd8\u539f\u56fa\u4ef6\uff0c4G/2G\u968f\u4fbf\u9009\u4e00\u4e2a\u5c31\u884c\\n\\n![20220626-175311.jpg](../../../static/img/20220626-175311.jpg)\\n\\n\u5c06\u4e0b\u8f7d\u7684zip\u6587\u4ef6\u89e3\u538b\u5f97\u5230\u8fd8\u539f\u56fa\u4ef6\u7684\u955c\u50cf\u6587\u4ef6\\n\\n![20220626-180141.jpg](../../../static/img/20220626-180141.jpg)\\n\\n\u4f7f\u7528balenaEtcher\u5c06\u5b58\u50a8\u8fd8\u539f\u56fa\u4ef6\u5237\u5165SD\u5361\u4e2d\\n\\n![20220626-180352.jpg](../../../static/img/20220626-180352.jpg)\\n\\n### 2. \u5237\u5165OpenWrt\u56fa\u4ef6\\n\\n\u5728[\u56fa\u4ef6\u4e0b\u8f7d\u9875](https://doc.openwrt.cc/2-OpenWrt-Rpi/1-Download/)\u4e2d\u6839\u636e\u8bbe\u5907\u7c7b\u578b\u9009\u62e9\u5bf9\u5e94\u56fa\u4ef6\u3002\u6211\u4f7f\u7528\u7684\u8bbe\u5907\u4e3a\u6811\u8393\u6d3e4B\uff0c\u8fdb\u5165\u56fa\u4ef6\u4e0b\u8f7d\u9875\u9762\u4e0b\u8f7d\u5bf9\u5e94\u7684` immortal-xxx-xxx-xxx-factory.img.gz`\u3002\u4e0b\u8f7d\u9875\u4e2d\u63d0\u4f9b`ext4` \u4e0e `squashfs` \u4e24\u79cd\u6587\u4ef6\u7cfb\u7edf\u7684\u56fa\u4ef6\uff0c\u4e3a\u4e86\u4fbf\u4e8e\u6839\u76ee\u5f55\u6269\u5bb9\uff0c\u6211\u4f7f\u7528\u7684\u662f`ext4`\u7684\u56fa\u4ef6\u3002\\n\\n![20220626-181048.jpg](../../../static/img/20220626-181048.jpg)\\n\\n![20220626-181816.jpg](../../../static/img/20220626-181816.jpg)\\n\\n\u4e0e\u5237\u5165\u5b58\u50a8\u8fd8\u539f\u56fa\u4ef6\u7c7b\u4f3c\uff0c\u5c06OpenWrt\u56fa\u4ef6\u5199\u5165SD\u5361\u4e2d\\n\\n![20220626-182454.jpg](../../../static/img/20220626-182454.jpg)\\n\\n\\n### 3. \u4f7f\u7528gparted\u6269\u5bb9\u6839\u76ee\u5f55(\u53ef\u9009)\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0copenWrt\u53ea\u4f1a\u5c06750MiB\u7a7a\u95f4\u5206\u914d\u7ed9\u6839\u76ee\u5f55\uff0cSD\u5361\u4e2d\u5927\u91cf\u5b58\u50a8\u5bb9\u91cf\u88ab\u6d6a\u8d39\u3002\u53ef\u4ee5\u901a\u8fc7gparted\u5de5\u5177\u79fb\u52a8\u6269\u5bb9\u6839\u76ee\u5f55\u6240\u5728\u5206\u533a\u3002**\u6b64\u6b65\u9aa4\u9700\u8981\u4e00\u53f0\u8fd0\u884cUbuntu/Debian/Fedora\u64cd\u4f5c\u7cfb\u7edf\u7684\u8ba1\u7b97\u673a**, \u672c\u6587\u4f7f\u7528Ubuntu22.04\u3002\\n\\n1. \u5b89\u88c5gparted\\n\\n```sh\\nsudo apt install gparted\\n```\\n\\n2. \u5c06\u5237\u5165\u56fa\u4ef6\u7684SD\u5361\u63d2\u5165\u88c5\u6709gparted\u7684\u8ba1\u7b97\u673a\u4e2d\u5e76\u6253\u5f00gparted\uff0c\u53f3\u4e0a\u89d2\u7269\u7406\u78c1\u76d8\u5207\u6362\u81f3SD\u5361\\n\\n3. \u53f3\u952elabel\u4e3arootfs\u7684\u5206\u533a\uff0c\u9009\u62e9Resize/Move\\n\\n![Screenshot1.png](../../../static/img/Screenshot1.png)\\n\\n4. \u5728Resize/Move\u9875\u9762\u62d6\u52a8\u5206\u533a\u5230\u76ee\u6807\u4f4d\u7f6e\u4e0e\u5927\u5c0f\uff0c\u5efa\u8bae\u5728rootfs\u5206\u533a\u524d\u540e\u6bb5\u7559\u51fa\u5927\u4e8e4MiB\u7a7a\u95f4\\n\\n![Screenshot2.png](../../../static/img/Screenshot2.png)\\n\\n5. \u63d0\u4ea4\u6267\u884c\u540e\u5f39\u51faSD\u5361\\n\\n---\\n\\n## \u5c06\u6811\u8393\u6d3e\u914d\u7f6e\u4e3a\u65c1\u8def\u7531\\n\\n\u5c06SD\u5361\u5f39\u51fa\u540e\u63d2\u5165\u6811\u8393\u6d3e\u4e2d\uff0c\u63a5\u901a\u6811\u8393\u6d3e\u7535\u6e90(**\u6b64\u65f6\u4e0d\u8981\u8fde\u63a5\u8def\u7531\u5668LAN\u53e3**)\u3002\u53ef\u4ee5\u53d1\u73b0\u4e00\u4e2a\u540d\u4e3aOpenWrt\u7684Wifi\u7f51\u7edc\uff0c\u8fde\u63a5\u8be5\u7f51\u7edc\u540e\u6d4f\u89c8\u5668\u8f93\u5165192.168.1.1\u4fbf\u53ef\u8fdb\u5165OpenWrt\u7684\u914d\u7f6e\u9875\u9762\uff0c\u9ed8\u8ba4\u7528\u6237\u540d\u4e3a`root`\uff0c \u9ed8\u8ba4\u5bc6\u7801\u4e3a`password`\\n\\n### 1. \u914d\u7f6e\u8f6f\u8def\u7531\u7684\u7f51\u7edc\\n\\n\u5de6\u4fa7\u83dc\u5355\u7f51\u7edc->\u63a5\u53e3\u8fdb\u5165\u63a5\u53e3\u914d\u7f6e\uff0c\u63a5\u53e3\u5217\u8868\u70b9\u51fbLAN\u7f51\u7edc\u7684\u4fee\u6539\u3002\\n- \u8bbe\u7f6e\u4f20\u8f93\u534f\u8bae\u4e3a`\u9759\u6001\u5730\u5740`\\n- IPv4\u5730\u5740\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u4e3b\u8def\u7531\u7f51\u6bb5\u4e2d\u6ca1\u88ab\u4f7f\u7528\u7684\u5730\u5740(\u672c\u6587\u4e3b\u8def\u7531\u7f51\u7edc\u53f7\u4e3a192.168.0.0/24\uff0c\u8bbe\u7f6e\u4e3a192.168.0.106)\\n- IPv4\u5b50\u7f51\u63a9\u7801\u4e0e\u4e3b\u8def\u7531\u7f51\u7edc\u4fdd\u6301\u4e00\u81f4(\u672c\u6587\u4e3b\u8def\u7531\u7f51\u7edc\u53f7\u4e3a192.168.0.0/24\uff0c\u8bbe\u7f6e\u4e3a255.255.255.0)\\n- IPv4\u7f51\u5173\u8bbe\u7f6e\u4e3a\u4e3b\u8def\u7531\u7684IPv4\u7f51\u5173(\u672c\u6587\u4e2d\u4e3b\u8def\u7531IP\u4e3a192.168.0.1)\\n- \u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 DNS \u670d\u52a1\u5668\u8bbe\u7f6e\u4e3a`114.114.114.114`\\n- \u5176\u4ed6\u8bbe\u7f6e\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\\n\\n![20220626-185936.jpg](../../../static/img/20220626-185936.jpg)\\n\\n\u70b9\u51fb`\u4fdd\u5b58&\u5e94\u7528`\u540e\u4f7f\u7528\u7f51\u7ebf\u5c06\u6811\u8393\u6d3e\u8fde\u63a5\u5230\u4e3b\u8def\u7531\u7684LAN\u53e3\u4e0a\uff0c\u65ad\u5f00OpenWrt Wifi\uff0c\u8fde\u63a5\u4e3b\u8def\u7531\u5bf9\u5e94\u7f51\u7edc\u540e\u4fbf\u53ef\u901a\u8fc7\u4e0a\u9762\u914d\u7f6e\u7684IPv4\u5730\u5740\u8fdb\u5165\u8f6f\u8def\u7531\u914d\u7f6e\u9875\u9762\\n\\n\u8fdb\u5165\u4e3b\u8def\u7531\u7ba1\u7406\u9875\u9762\uff0c\u4e3a\u6811\u8393\u6d3e\u6dfb\u52a0IP\u4e0eMAC\u5730\u5740\u7ed1\u5b9a\\n\\n### 2. \u8f6f\u8def\u7531\u7684\u4e00\u4e9b\u5176\u4ed6\u914d\u7f6e\\n\\n#### \u8bbe\u7f6ewifi\u5bc6\u7801\\n\\n\u8fdb\u5165\u8f6f\u8def\u7531\u914d\u7f6e\u9875\u9762\uff0c\u5de6\u4fa7\u83dc\u5355\u7f51\u7edc->\u65e0\u7ebf\uff0c\u65e0\u7ebf\u7f51\u7edc\u5217\u8868\u4e2d\u70b9\u51fbOpenWrt\u7684\u4fee\u6539\u3002\\n\u63a5\u53e3\u914d\u7f6e-> \u65e0\u7ebf\u5b89\u5168\\n- \u52a0\u5bc6\u65b9\u5f0f\u8bbe\u7f6e\u4e3a `WPA2-PSK/WPA3-SAE Mixed Mode`\\n- \u8bbe\u7f6e\u5bc6\u7801\\n\\n\u70b9\u51fb`\u4fdd\u5b58&\u5e94\u7528`\\n\\n#### \u8bbe\u7f6e\u8f6f\u8def\u7531\u7ba1\u7406\u5458\u5bc6\u7801\\n\u8fdb\u5165\u8f6f\u8def\u7531\u914d\u7f6e\u9875\u9762\uff0c\u5de6\u4fa7\u83dc\u5355\u7cfb\u7edf->\u7ba1\u7406\u6743\uff0c\u8bbe\u7f6e\u7ba1\u7406\u5458\u5bc6\u7801\\n\\n## \u914d\u7f6eClashX\\n\\n\u4e00\u822c\u673a\u573a\u90fd\u4f1a\u63d0\u4f9bClashX\u8ba2\u9605\u94fe\u63a5\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u8bd5\u8bd5\u8fd9\u4e00\u5bb6[https://portal.meomiao.xyz/#/register?code=OX2WeBQg](https://portal.meomiao.xyz/#/register?code=OX2WeBQg)\\n\\n1. \u8fdb\u5165\u8f6f\u8def\u7531\u914d\u7f6e\u9875\u9762\uff0c\u5de6\u4fa7\u83dc\u5355->\u670d\u52a1->OpenClash->\u914d\u7f6e\u6587\u4ef6\u8ba2\u9605\u3002\u8bbe\u7f6e\u81ea\u52a8\u66f4\u65b0\u7b56\u7565\\n\\n![20220626-224256.jpg](../../../static/img/20220626-224256.jpg)\\n\\n2. \u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\u8ba2\u9605\u4fe1\u606f\uff0c\u586b\u5165ClashX\u8ba2\u9605\u94fe\u63a5\u4e0e\u914d\u7f6e\u6587\u4ef6\u540d\uff0c\u4fdd\u5b58\u914d\u7f6e\\n\\n![20220626-224509.jpg](../../../static/img/20220626-224509.jpg)\\n\\n1. \u5de6\u4fa7\u83dc\u5355->\u670d\u52a1->OpenClash \u542f\u52a8OpenClash\\n\\n2. curl\u4e00\u4e0bgoogle\u9a8c\u8bc1\u4ee3\u7406\u670d\u52a1\u662f\u5426\u751f\u6548\\n\\n```sh\\nhttps_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890 curl www.google.com\\n```\\n\\n---\\n\\n## \u8bbe\u5907\u901a\u8fc7\u65c1\u8def\u7531\u4e0a\u7f51\\n\\n\u8bbe\u5907\u8fde\u63a5\u4e0a\u8f6f\u8def\u7531Wifi\u540e\uff0cIP\u8bbe\u7f6e\u4e3a\u9759\u6001\\n- IP\u5730\u5740\u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u4e3b\u8def\u7531\u6240\u5728\u7f51\u7edc\u672a\u88ab\u4f7f\u7528\u7684\u5730\u5740\\n- \u7f51\u5173\u8bbe\u7f6e\u4e3a\u8f6f\u8def\u7531\u5bf9\u5e94\u7684IP\u5730\u5740(\u672c\u6587\u4e2d\u914d\u7f6e\u4e3a192.168.0.106)\\n- \u7f51\u7edc\u524d\u7f00\u957f\u5ea6/\u5b50\u7f51\u63a9\u7801\u4e0e\u4e3b\u8def\u7531\u6240\u5728\u7f51\u7edc\u4e00\u81f4(\u672c\u6587\u4e3a24/255.255.255.0)\\n- DNS\u5730\u5740\u8bbe\u7f6e\u4e3a\u8f6f\u8def\u7531\u5bf9\u5e94IP(\u672c\u6587\u4e2d\u914d\u7f6e\u4e3a192.168.0.106)"},{"id":"clickhouse-build-from-source","metadata":{"permalink":"/blog/clickhouse-build-from-source","editUrl":"https://github.com/csugulo/csugulo.github.io/tree/main/blog/2022/06/clickhouse-build-from-source.md","source":"@site/blog/2022/06/clickhouse-build-from-source.md","title":"\u4ece\u6e90\u7801\u7f16\u8bd1Clickhouse","description":"Ubuntu22.04\u4e0b\u4f7f\u7528cmake+ninja\u6784\u5efa\uff0cclang++\u7f16\u8bd1Clickhouse\u9879\u76ee","date":"2022-06-25T15:17:26.000Z","formattedDate":"June 25, 2022","tags":[{"label":"clickhouse","permalink":"/blog/tags/clickhouse"},{"label":"olap","permalink":"/blog/tags/olap"},{"label":"c++","permalink":"/blog/tags/c"}],"readingTime":0.99,"truncated":false,"authors":[],"frontMatter":{"slug":"clickhouse-build-from-source","title":"\u4ece\u6e90\u7801\u7f16\u8bd1Clickhouse","tags":["clickhouse","olap","c++"]},"prevItem":{"title":"\u6811\u8393\u6d3e+OpenWrt+ClashX\u5b9e\u73b0\u65c1\u8def\u7531\u79d1\u5b66\u4e0a\u7f51","permalink":"/blog/raspberry-pi-openwrt-bypass-router-with-clashx"}},"content":"Ubuntu22.04\u4e0b\u4f7f\u7528cmake+ninja\u6784\u5efa\uff0cclang++\u7f16\u8bd1Clickhouse\u9879\u76ee\\n\\n## \u5b89\u88c5\u4f9d\u8d56\\n\\n\\n\u5b89\u88c5\u6784\u5efa/\u7f16\u8bd1\u76f8\u5173\u7684\u4f9d\u8d56\\n\\n* `clang` - \u57fa\u4e8ellvm\u7684c/c++/objective-c\u7f16\u8bd1\u5668\\n* `cmake` - \u4e00\u4e2a\u5f00\u6e90\u8de8\u5e73\u53f0\u7684\u81ea\u52a8\u5316\u6784\u5efa\u5de5\u5177\\n* `ninja` - \u4e00\u4e2a\u4e13\u6ce8\u4e8e\u901f\u5ea6\u7684\u5c0f\u578b\u6784\u5efa\u7cfb\u7edf\\n* `ccache` - \u7528\u4e8e\u52a0\u901f\u7f16\u8bd1\u7684\u5de5\u5177\\n\\n```sh\\nsudo apt update && \\\\\\nsudo apt install -y clang cmake ninja-build git ccache\\n```\\n\\n## \u7f16\u8bd1\\n\\n1. \u4e0b\u8f7d\u9879\u76ee\\n\\n```sh\\ngit clone --recursive git@github.com:ClickHouse/ClickHouse.git\\n```\\n\\nclickhouse\u4f9d\u8d56\u5e93\u975e\u5e38\u591a\uff0c\u8fd9\u4e00\u6b65\u901a\u5e38\u6bd4\u8f83\u8017\u65f6\uff0c\u53ef\u4ee5\u8bbe\u7f6e`http_proxy`, `https_proxy` \u73af\u5883\u53d8\u91cf\u4f7f\u7528\u4ee3\u7406\u670d\u52a1\uff0c\u52a0\u5165`--jobs N`\u5e76\u884c\u62c9\u53d6\u4f9d\u8d56\\n\\n2. \u4f7f\u7528cmake/ninja\u6784\u5efa\u9879\u76ee\\n```\\nmkdir build && cd build\\ncmake .. \\\\\\n    -DCMAKE_BUILD_TYPE=Release \\\\\\n    -DCMAKE_C_COMPILER=clang \\\\\\n    -DCMAKE_CXX_COMPILER=clang++ \\\\ \\n    -G Ninja\\n```\\n\\n3. \u7f16\u8bd1\u9879\u76ee\\n```\\nninja -j\\n```\\n\\n## \u8fd0\u884c\\n\\nserver:\\n\\n```sh\\n./build/programs/clickhouse-server\\n```\\n\\nclient:\\n\\n```sh\\n./build/programs/clickhouse-client\\n```"}]}')}}]);