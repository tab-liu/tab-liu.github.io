Object.assign(window.search, {"doc_urls":["index.html#说明","index.html#手绘风格画图工具-excalidraw","grocery_store/my_blog.html#我的博客搭建","grocery_store/my_blog.html#简介","grocery_store/my_blog.html#思路","grocery_store/my_blog.html#github-actions","grocery_store/my_blog.html#设置"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":0,"title":0},"1":{"body":3,"breadcrumbs":1,"title":1},"2":{"body":0,"breadcrumbs":0,"title":0},"3":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":5,"breadcrumbs":0,"title":0},"5":{"body":67,"breadcrumbs":2,"title":2},"6":{"body":6,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"主要用于记录个人学习笔记及日常。","breadcrumbs":"说明 » 说明","id":"0","title":"说明"},"1":{"body":"官方版本 : 不支持中文手写字体 我的fork版本 : 改用了中文手写字体 另一本书 tab-liu","breadcrumbs":"说明 » 手绘风格画图工具 excalidraw","id":"1","title":"手绘风格画图工具 excalidraw"},"2":{"body":"","breadcrumbs":"我的博客搭建 » 我的博客搭建","id":"2","title":"我的博客搭建"},"3":{"body":"关注内容，不花哨，不折腾。 可以像写书一样成体系，分章节。 渲染为网页展示的同时，也要对源码进行管理。","breadcrumbs":"我的博客搭建 » 简介","id":"3","title":"简介"},"4":{"body":"使用 mdbook + github pages repo的main分支用于书籍源码管理，gh-pages分支为生成的网页。 在github上创建用户站点，做为博客入口，展示并链接其它项目站点的文章。 另创建其它项目站点，用于写一些专题，可在用户站点的首页进行引导。","breadcrumbs":"我的博客搭建 » 思路","id":"4","title":"思路"},"5":{"body":"在仓库中添加.github/workflows目录，则github会在其中查找*.yml文件自动处理CI/CD。 这里我们添加个ci.yml文件，内容如下： name: GitHub Pages\non: push: branches: - main pull_request:\njobs: deploy: runs-on: ubuntu-latest permissions: contents: write concurrency: group: ${{ github.workflow }}-${{ github.ref }} steps: - uses: actions/checkout@v3 - name: Setup mdBook uses: peaceiris/actions-mdbook@v1 with: mdbook-version: \"latest\" # mdbook-version: \"0.4.8\" - run: mdbook build - name: Deploy uses: peaceiris/actions-gh-pages@v3 if: ${{ github.ref == 'refs/heads/main' }} with: github_token: ${{ secrets.GITHUB_TOKEN }} publish_dir: ./book 则每次对main分支进行提交时，自动把书籍build到gh-pages分支下。 注意的是，如果有私有域名，在 用户站点 的配置中添加cname的选项： - name: Deploy uses: peaceiris/actions-gh-pages@v3 if: ${{ github.ref == 'refs/heads/main' }} with: github_token: ${{ secrets.GITHUB_TOKEN }} publish_dir: ./book # 仅在用户站点下添加下面的配置 cname: blog.tabliu.top 更多设置参考 这里","breadcrumbs":"我的博客搭建 » github actions","id":"5","title":"github actions"},"6":{"body":"在github仓库中找到 Settings->Pages , 选择站点使用的分支与路径，由于上面默认生成站点到gh-pages分支，这里选择gh-pages分支的根目录并保存。","breadcrumbs":"我的博客搭建 » 设置","id":"6","title":"设置"}},"length":7,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{".":{"4":{".":{"8":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}},"s":{"/":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"@":{"df":0,"docs":{},"v":{"3":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}},"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}},"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"j":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}},"分":{"df":0,"docs":{},"支":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"提":{"df":0,"docs":{},"交":{"df":0,"docs":{},"时":{"df":0,"docs":{},"，":{"df":0,"docs":{},"自":{"df":0,"docs":{},"动":{"df":0,"docs":{},"把":{"df":0,"docs":{},"书":{"df":0,"docs":{},"籍":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"到":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"@":{"df":0,"docs":{},"v":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":2.0}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}},"s":{"@":{"df":0,"docs":{},"v":{"3":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"分":{"df":0,"docs":{},"支":{"df":0,"docs":{},"，":{"df":0,"docs":{},"这":{"df":0,"docs":{},"里":{"df":0,"docs":{},"选":{"df":0,"docs":{},"择":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"/":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"的":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"分":{"df":0,"docs":{},"支":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"书":{"df":0,"docs":{},"籍":{"df":0,"docs":{},"源":{"df":0,"docs":{},"码":{"df":0,"docs":{},"管":{"df":0,"docs":{},"理":{"df":0,"docs":{},"，":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"t":{"a":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":2.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}}},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"0":{".":{"4":{".":{"8":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}},"s":{"/":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"@":{"df":0,"docs":{},"v":{"3":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{".":{"df":0,"docs":{},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"r":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"i":{".":{"df":0,"docs":{},"y":{"df":0,"docs":{},"m":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"h":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}},"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}},"df":3,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772},"6":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"j":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}},"分":{"df":0,"docs":{},"支":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"提":{"df":0,"docs":{},"交":{"df":0,"docs":{},"时":{"df":0,"docs":{},"，":{"df":0,"docs":{},"自":{"df":0,"docs":{},"动":{"df":0,"docs":{},"把":{"df":0,"docs":{},"书":{"df":0,"docs":{},"籍":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"到":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}},"d":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"@":{"df":0,"docs":{},"v":{"1":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"n":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":2.0}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":3,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951}},"s":{"@":{"df":0,"docs":{},"v":{"3":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{},"分":{"df":0,"docs":{},"支":{"df":0,"docs":{},"，":{"df":0,"docs":{},"这":{"df":0,"docs":{},"里":{"df":0,"docs":{},"选":{"df":0,"docs":{},"择":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}}}}}}}}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"/":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"u":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"_":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"的":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"分":{"df":0,"docs":{},"支":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"书":{"df":0,"docs":{},"籍":{"df":0,"docs":{},"源":{"df":0,"docs":{},"码":{"df":0,"docs":{},"管":{"df":0,"docs":{},"理":{"df":0,"docs":{},"，":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"u":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"_":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}},"u":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"t":{"a":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{},"s":{"df":1,"docs":{"5":{"tf":2.0}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}}}},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"title":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});