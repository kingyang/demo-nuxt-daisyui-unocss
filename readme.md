## 项目结构

nuxt + unocss +daisyui
unocss-preset-daisyui https://github.com/LeekJay/unocss-preset-daisyui
unocss-preset-component https://github.com/LeekJay/unocss-preset-component

## 问题描述
在unocss系列是0.61.6版本以下时 下列结构是可以正常工作的.
在升级到0.61.7之后发现不能工作了, 主要是unocss-preset-daisyui不能正常工作

查看unocss主要是把unconfig 升级到了0.5.4

```json
"pnpm": {
    "overrides": {
      "unconfig": "^0.3.13"
    }
  },
```

研究了好久, 没找到解决方案, 还望大佬指点一下
