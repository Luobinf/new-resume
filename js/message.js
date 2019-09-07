
//MVC思想
(function () {

    let view = document.querySelector('section.message')

    let model = Model({resourceName: 'Message'})
    let controller = {
        view: null,
        model:null,
        messageList: null,
        myForm: null,
        init: function (view,model) {
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.myForm = document.querySelector('#postMessageForm')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        initAV: function () {
            var APP_ID = 'xSBCtRaJJdUe3qE2s2ab9Rle-9Nh9j0Va'
            var APP_KEY = 'JtK1aHzqHwHVRqV5juhhBmG4'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        loadMessages: function () {
            //加载时获取留言数据
            this.model.fetch().then((messages) => {
                let arr = messages.map((item) => {
                    return item.attributes
                })
                arr.forEach((item) => {
                    let li = document.createElement('li')
                    li.textContent = `${item.name}: ${item.content}`
                    this.messageList.append(li)
                })
            })
        },
        bindEvents: function () {
            let myForm = this.myForm
            myForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let content = this.myForm.querySelector('input[name=content]').value
            let name = this.myForm.querySelector('input[name=name]').value
            this.model.save(content,name).then((object) => {
                let li = document.createElement('li')
                li.textContent = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.append(li)
                this.myForm.querySelector('input[name=content]').value = ''
            })
        }
    }
    controller.init(view, model)
})()

//特别注意以上: 为什么不监听按钮，而是直接监听form表单的submit事件，因为用户有可能会按回车键，按回车也会提交数据。

//2.测试代码
//先创建TestObject表，在表中创建一行数据，数据内容是 words:'Hello world!';
//如果保存成功，则运行then里面的代码。
// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.set('words', 'Hello world!');
// testObject.save().then(function (testObject) {
//     console.log('保存成功。')
// })