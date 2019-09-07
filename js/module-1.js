(function () {
    var person = {
        name: 'lb',
        age: 18
    }
    //ageGrow函数使用了该函数本身外面的变量就是闭包
    window.ageGrow = function () {
        person.age++
        return person.age
    }
}).call()