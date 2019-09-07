(function () {
  let specialAtags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialAtags.length; i++) {
    specialAtags[i].classList.add('separate')
  }

  findClosestAndRemoveOffset()

  window.addEventListener('scroll', function () {
    findClosestAndRemoveOffset()
  })


  function findClosestAndRemoveOffset() {
    let specialAtags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialAtags.length; i++) {
      if (Math.abs(specialAtags[i].offsetTop - window.pageYOffset) < Math.abs(specialAtags[minIndex].offsetTop - window.pageYOffset)) {
        minIndex = i
      }
    }
    //minIndex就是离屏幕顶部最近的元素
    specialAtags[minIndex].classList.remove('separate')
    let id = specialAtags[minIndex].id
    let a = document.querySelector(`a[href="#${id}"]`)
    let li = a.parentElement
    let liBrothers = li.parentElement.children
    for (let i = 0; i < liBrothers.length; i++) {
      liBrothers[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}).call()