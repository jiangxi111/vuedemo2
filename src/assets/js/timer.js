$(function(){
    var timer = $('.timer'),
        em = timer.find('em'),
        url = timer.data('url'),
        second = 5
    window.count = function(){
        if(second == 0){
            location.href = url
        }
        em.html(second)
        second--
    }
    count()
    setInterval("window.count();",1000)
})