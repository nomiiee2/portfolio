$(document).ready(function(){


// 2번째 section 의 .box p 을 클릭하면 2번째 section이 사라져라 


$('.sec2 .come .in').click(function(){
    // $('.sec2').stop().css({'left':'0'}).animate({'left':'-100%'},1000)
    $('.sec2').fadeOut(800)
})





// logo에 마우스가 올라가면 box가 보여라

$('.sec2 .po').mouseenter(function(){
    $('.sec2 .come .box').addClass('on')
    // $('sec2 .logo').css({'width':'100%','height':'100%'})
    $('.sec2 .in').addClass('onn')
})


// $('.sec2 .po').mouseleave(function(){

//     $('.sec2 .come .box').removeClass('on')
//     $('.sec2 .in').removeClass('onn')
// })











    
// .story 스크롤하면 가로로 이동

let numAc = $('.st article').size()
    // console.log(numAc)
let widAc = $('.st article').width()
    // console.log(widAc)



$('.story').height((widAc*numAc)-980)



$('.main').scroll(function(){
    let scc = $(this).scrollTop()
        
    $('.st').css({'left':-scc})
    });








    $('.st .beth').mousewheel(function(event,delta){
        if(delta<0){
            $('html,body').stop().animate({scrollTop:1920},1000)
            $('.beth .vid1 video').get(0).pause()
            $('.sim .vid2 video').get(0).play()
            $('.var .red').addClass('o1')
            $('.var .knife').addClass('o11')
        }
        
    })

    $('.st .sim').mousewheel(function(event,delta){
        if(delta>0){
            $('html,body').stop().animate({scrollTop:0},1000)
            $('.sim .vid2 video').get(0).pause()
            $('.beth .vid1 video').get(0).play()
            $('.var .red').removeClass('o1')
            $('.var .knife').removeClass('o11')
        }
        if(delta<0){
            $('html,body').stop().animate({scrollTop:3840},1000)
            $('.sim .vid2 video').get(0).pause()
            $('.tay .vid3 video').get(0).play()
            $('.var .red').addClass('o111')
            $('.var .knife').addClass('o1111')
        }
        
    })


    $('.st .tay').mousewheel(function(event,delta){
        if(delta>0){
            $('html,body').stop().animate({scrollTop:1920},1000)
            $('.tay .vid3 video').get(0).pause()
            $('.sim .vid2 video').get(0).play()
            $('.var .red').removeClass('o111')
            $('.var .knife').removeClass('o1111')
            $('.var .red').addClass('o1')
            $('.var .knife').addClass('o11')
        }
    })






// .wmain의 div 클릭하면 scrollTop의 위치가 이동함


$(window).scroll(function(){
    let sc = $(window).scrollTop()
    // console.log(sc) //937

    let ht = $(window).height()
})


$('.wmain .3t').click(function(e){
    e.preventDefault()  

    let i = $(this).index()
    let ht = $(window).height()

    $('html,body').stop().animate({scrollTop:ht*(i+3)},1400)
});

$('.wmain .2s').click(function(e){
    e.preventDefault()  

    let ii = $(this).index()
    let ht = $(window).height()

    $('html,body').stop().animate({scrollTop:ht*(ii+1)},1400)
});

$('.wmain .1b').click(function(e){
    e.preventDefault()  

    let iii = $(this).index()
    let ht = $(window).height()

    $('html,body').stop().animate({scrollTop:ht*(iii-1)},1400)
});







$('.women .mn .top').click(function(){
    $('html,body').stop().animate({scrollTop:'0'},1000)
})




$('.women article').mousewheel(function(event,delta){
    if(delta>0){
        let prev = $(this).prev().offset().top
        $('html,body').stop().animate({scrollTop:prev},1400)
    }
    else if(delta<0){
        let next = $(this).next().offset().top
        $('html,body').stop().animate({scrollTop:next},1400)
    }
})














// .slide 의li를 클릭했을때 .fade의 p가 바뀜

$('.slide li').click(function(){


	let i = $(this).index();

	// console.log(i);
	$('.fade p').stop().animate({'opacity':0},600)
	$('.fade p').eq(i).stop().animate({'opacity':1},600)
});




let tt = 0;
setInterval(function(){
    if(tt<10) tt++;

    if(tt==10)tt=0;

    $('.slide li').eq(tt).trigger('click')
},2120)










}); //끝