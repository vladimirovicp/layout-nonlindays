# layout-nonlindays

* npm init -y
* npm i -D webpack webpack-cli
* npm i -D html-webpack-plugin
* npm i -D webpack-dev-server
* npm i -D filemanager-webpack-plugin
* npm i -D pug pug-loader
* npm i -D sass-loader postcss-loader postcss-preset-env css-loader style-loader sass
* npm i -D mini-css-extract-plugin
* npm i -D cross-env
* npm i -D @babel/core @babel/preset-env babel-loader
* npm i -D clean-webpack-plugin
* npm i -D copy-webpack-plugin
* npm i -D gh-pages
* npm i -D html-loader
* npm i -D html-webpack-plugin
* npm start

### Useful links

* [Туториал по pug (на русском)](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228)

* [Макет](https://www.figma.com/file/YQ0I0RzLPy1EGsz3jy1qA8/%D0%9D%D0%B5%D0%BB%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BD%D0%B8?type=design&node-id=0-1&mode=design&t=4g4llrYUZxsiL4UZ-0)


### mixin svg

Подключение миксина
```
 +main-svg('', './img/svg/sprite.svg#' + soc.class)
```

Сам миксин
```
mixin main-svg(className, imgLink)
    svg(class=className)
        use(xlink:href=imgLink)
```

### Необходимый рефактор

- Заменить пути картинок в header
- Изменить в header after и before на один псевдоэлемент
