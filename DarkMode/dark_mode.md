# Dark Mode

## 1. 一から作成する場合

### ダークモード時のスタイルの宣言
```css
:root {
  --main-text: #333;
  --main-bg: #fff;
}
@media (prefers-color-scheme: dark) {
  :root {
    --main-text: #ddd;
    --main-bg: #000;
  }
}

body {
  color: var(--main-text);
  background-color: var(--main-bg);
  transition: .5s;
}
```

* `transition: .5s;` で、ゆっくりと変化させる

### ダークモードの場合のスタイルの適用 
```js
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;

darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) { // Dark
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else { // Light
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
});
```


### 切り替えボタンの配置
* HTML
```html
<input id="btn-mode" type="checkbox"> ダークモード
```

* CSS
```css
.light-theme {
  background: #fff;
  color: #333;
}
.dark-theme {
  background: #000;
  color: #ddd
}
```

* JavaScript
```javascript
// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// チェックした時の挙動
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
});
```

## 2. Darkmode.jsを使う方法
```html
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.4.0/lib/darkmode-js.min.js"></script>
<script>
  new Darkmode().showWidget();
</script>
```


## Reference
* [Webサイトをダークモードに対応させよう](https://www.webcreatorbox.com/tech/dark-mode)


