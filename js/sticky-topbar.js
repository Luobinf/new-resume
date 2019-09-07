(function () {
    let view = document.querySelector('#topNavBar')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            let view = this.view
            let that = this
            window.addEventListener('scroll', function () {
                // console.log(window.pageYOffset)
                // console.log(window.scrollY) //滚动距离这个也可以获取,建议用上面那个
                if (window.scrollY > 0) {
                   that.active()
                } else {
                    that.deactive()
                }
            })
            //以上如果不使用that先将this的值存下来，那么使用箭头函数也可以，箭头函数没有this，它会寻找
            //离它最近的那个this值，那个this是多少，那么箭头函数内部的this也为多少。
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }

    }
    controller.init(view)
    //controller.init.call(controller,view)
}).call()
