$(document).ready(function(){



    // main 스크롤

$('.main').mousewheel(function(event,delta){
    // let sc = $(window).scrollTop()
    // console.log(sc)

    if(delta<0){
        $('.int').css('top','0').stop().animate({'top':'-100%'},1000)
        $('.menu').css('top','100%').stop().animate({'top':'0'},1000)

        $('.scr').css('opacity','0')
    }
    else if(delta>0){
        $('.int').css('top','-100%').stop().animate({'top':'0'},1000)
        $('.menu').css('top','0').stop().animate({'top':'100%'},1000)
        $('.scr').css('opacity','1')
    }
})



$('article').mousewheel(function(event,delta){
    // let sc = $(window).scrollTop()
    // console.log(sc)

    if(delta>0){
        $('.pro').css('top','0').stop().animate({'top':'100%'},800)
        $('.des').css('left','0').stop().animate({'left':'-100%'},800)
        $('.pub').css('left','0').stop().animate({'left':'100%'},800)
        $('.nav').removeClass('on')
        }
        
        
    })






// 메뉴

    $('.menu .txt li').eq(0).click(function(){
        

        $('.pro').css('top','100%').stop().animate({'top':'0'},800)
        $('.nav').addClass('on')
        $('.nav li').eq(0).css('color','#125E55')
    })


    $('.menu .txt li').eq(1).click(function(){
        

        $('.des').css('left','-100%').stop().animate({'left':'0'},800)
        $('.nav').addClass('on')
        $('.nav li').eq(1).css('color','#125E55')
    })



    $('.menu .txt li').eq(2).click(function(){
        

        $('.pub').css('left','100%').stop().animate({'left':'0'},800)
        $('.nav').addClass('on')
        $('.nav li').eq(2).css('color','#125E55')
    })



    





// nav

// $('.menu .txt li').click(function(){
//     $('.menu').css('top','0').stop().animate({'top':'-100%'},800)
// })

$('.nav li').eq(0).click(function(){


    $('.pro').css('top','100%').stop().animate({'top':'0'},800)
    $('.des').css('left','0').stop().animate({'left':'-100%'},800)
    $('.pub').css('left','0%').stop().animate({'left':'100%'},800)
    $('.pro').css('z-index','100')
    $('.nav').addClass('on')
    $('.nav li').css('color','#3D3D3D')
    $('.nav li').eq(0).css('color','#125E55')
    // $('article').css('left','0%').stop().animate({'left':'100%'},800)
    
})


$('.nav li').eq(1).click(function(){
    $('.des').css('left','-100%').stop().animate({'left':'0'},800)
    $('.pub').css('left','0%').stop().animate({'left':'100%'},800)
    $('article').css('z-index','1')
    $('.des').css('z-index','100')
    $('.nav').addClass('on')
    $('.nav li').css('color','#3D3D3D')
    $('.nav li').eq(1).css('color','#125E55')
})

$('.nav li').eq(2).click(function(){
    $('.pub').css('left','100%').stop().animate({'left':'0'},800)
    $('.des').css('left','0').stop().animate({'left':'-100%'},800)
    $('article').css('z-index','1')
    $('.pub').css('z-index','100')
    $('.nav').addClass('on')
    $('.nav li').css('color','#3D3D3D')
    $('.nav li').eq(2).css('color','#125E55')
})


    $('.nav .le').click(function(){
        // $('.int').css('z-index','999')
        $('.menu').css('top','-100%').stop().animate({'top':'0'},800)
        $('.nav').css('display','none')
    })














    // 디자인 con

    $('.con_m li').click(function(){

        let ci = $(this).index()

        $('.con_img li').removeClass('onn')
        $('.con_img li').eq(ci).addClass('onn')

        $('.con_m li').removeClass('onn')
        $('.con_m li').eq(ci).addClass('onn')


    })



    // $('.list li button').click(function(){
    //     let bi = $(this).index
    //     console.log(bi)
        
    // })



    $('.list li button').click(function(){
        let cii = $(this).parent().index()

        $('.con').css('top','100%').stop().animate({'top':'16%'},800)
        // $('.des list').css('opacity','1').stop().animate({'opacity':'0'},800)
        $('.des .list').fadeOut()

        $('.con_img li').removeClass('onn')
        $('.con_img li').eq(cii).addClass('onn')

        $('.con_m li').removeClass('onn')
        $('.con_m li').eq(cii).addClass('onn')
    })






    $('.con_m .le').click(function(){
        $('.con').css('top','16%').stop().animate({'top':'100%'},800)
        $('.des .list').fadeIn()
    })


































}); // 끗