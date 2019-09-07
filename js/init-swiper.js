(function () {
  let view = document.querySelector('#slides')
  //下面使用了js来操纵类名为swiper-container的元素，这个js所操纵的元素就是view：即用户能够看到的东西。
  let mySwiper = new Swiper(view.querySelector('.swiper-container'), {
    // Optional parameters 是否是无缝的
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
}).call()
