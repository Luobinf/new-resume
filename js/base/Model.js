window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'xSBCtRaJJdUe3qE2s2ab9Rle-9Nh9j0Va'
            var APP_KEY = 'JtK1aHzqHwHVRqV5juhhBmG4'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName)
            return query.find() //返回一个promsie对象
        },
        save: function (content, name) {
            let Message = AV.Object.extend(resourceName)
            let message = new Message()
            message.set('content', content)
            message.set('name', name)
            return message.save()     //还是返回了Promsie对象
        }
    }
}