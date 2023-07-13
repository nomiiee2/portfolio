$(document).ready(function(){

            $(window).scroll(function(){

                let sc = $(this).scrollTop()
                $('.bg').css({'top':-sc})
            })

            $('.listTitle li').click(function(){

// 변수만들기(순번찾기)
let a =$(this).index()
console.log(a)

$('.listBox ul').hide()
$('.listBox ul').eq(a).show()
})




// 오시는 길 

    $('.box5-3 .hover').mouseenter(function(){
        $('.hover').css({'opacity':'0'})
        $('.txt').css({'right':'-100%'}).stop().animate({'right':'0'},800)
    })

    $('.box5-3 .hover').mouseleave(function(){
        $('.hover').css({'opacity':'1'})
        $('.txt').css({'right':'0'}).stop().animate({'right':'-100%'},800)
    
    })

        })