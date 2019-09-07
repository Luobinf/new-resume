//使用立即执行函数避免var声明的变量自动变成全局变量
(function () {
  let view = document.querySelector('nav')
  let liTags = view.querySelectorAll('ul > li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (event) {
      event.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (event) {
      event.currentTarget.classList.remove('active')
    }
  }

  //点击顶部导航栏滚动到相应的章节部分
  let aTags = document.querySelectorAll('nav > ul > li > a')
  for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
      event.preventDefault()
      let a = event.currentTarget
      // console.log(a.href) 注意href是带有http协议的(被浏览器处理过的),用getAttribute
      // console.log(a.getAttribute('href'))  //'#siteAbout'
      let href = a.getAttribute('href')
      let element = document.querySelector(href)
      //element.getBoundingClientRect()获取元素相对于浏览器视口的位置
      let coords = element.getBoundingClientRect()
      //那么要获取相对于页面的位置应该如何获取，只要加上滚动出去的距离即可
      // console.log(coords.left + window.pageXOffset,coords.top + window.pageYOffset)
      // let left = coords.left + window.pageXOffset
      let top = coords.top + window.pageYOffset //下面那一句也可以
      // let top = element.offsetTop
      window.scrollTo(0, top - 70)
    }
  }
}).call()