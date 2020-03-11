# Hello VuePress2!
`hello`

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |


[[toc]]

``` js {4}
export default {
  data () {
    return {
      msg: "Highlighted!"
    }
  }
}
```

[Home](/) <!-- 跳转到根部的 README.md -->
[footer](/footer/) <!-- 跳转到 footer 文件夹的 index.html -->
[foo heading](./#heading) <!-- 跳转到 foo/index.html 的特定标题位置 -->
[bar - three](../bar/three.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->
[bar - four](../bar/four.html) <!-- 也可以用 .html -->
