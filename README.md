# Road to Frontend
## 创建项目
- ### 先安装vue - npm install --global @vue/cli
    - 可以用vue --version来看有没有安装
- ### 然后创建一个项目: vue create frame
    - 选第二个自定义
        ```shell
        ❯ Default ([Vue 2] babel, eslint)
          Manually select features
        ```
    - 自定义选择
        ```shell
        ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
        ❯◉ Babel  // es6 转 es5
         ◯ TypeScript
         ◯ Progressive Web App (PWA) Support
         ◯ Router  // 管理路由
         ◯ Vuex
         ◯ CSS Pre-processors // CSS 预处理器，后面会提示你选择 less、sass、stylus 等
         ◉ Linter / Formatter  // 代码格式校验，ESLint 代码格式校验，约束代码格式
         ◯ Unit Testing
         ◯ E2E Testing
        ```
    - 兼容模式不太好, 不选
        ```shell
        Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n) 
        ```
    - css预处理器, 会用哪个选哪个, 这里选less
        ```shell
        ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
        ❯ Sass/SCSS (with dart-sass) 
          Sass/SCSS (with node-sass) 
          Less 
          Stylus 
        ```
    - 选第三个, 多数开发者用的多
        ```shell
        ? Pick a linter / formatter config: (Use arrow keys)
        ❯ ESLint with error prevention only 
          ESLint + Airbnb config 
          ESLint + Standard config 
          ESLint + Prettier 
        ```
    - 选择在什么时机下触发代码格式校验, 这里建议两个都选上, 更严谨
        ```shell
        ? Pick additional lint features: 
         ◉ Lint on save // 每当保存文件的时候
        ❯◉ Lint and fix on commit // 每当执行 git commit 提交的时候
        ```
    - Babel, ESLint 等工具会有一些额外的配置文件, 这里的意思是问你将这些工具相关的配置文件写到哪里, 这里建议选择第 1 个, 保存到单独的配置文件，这样方便我们做自定义配置。
        ```shell
        ? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
        ❯ In dedicated config files  // 分别保存到单独的配置文件
          In package.json // 保存到 package.json 文件中
        ```
    - 是否保存这些选择, 以方便下次在用, 选n
        ```shell
        ? Save this as a preset for future projects? (y/N) 
        ```
### Maybe a Newworld
