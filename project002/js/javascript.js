$(document).ready(function(){


// 배너 슬라이드



    $('.sec1 .btn li').click(function(){

        let i = $(this).index();
        // console.log(i)
        
        $('.sec1 .silde article').eq(i-1).css({'left':'0'}).stop().animate({'left':'-100%'})
        $('.sec1 .silde article').eq(i).css({'left':'100%'}).stop().animate({'left':'0'})
        

        $('.sec1 .btn li').removeClass('on')
        $('.sec1 .btn li').eq(i).addClass('on')
        });

        


        let a = 0
        setInterval(function(){
            a++;
            if(a==3)a=0;
            $('.sec1 .btn li').eq(a).trigger('click')
        },3000)









    
        // 연혁
        
        

        $('.num li').click(function(){

            let ii = $(this).index()
            // console.log(ii)

            $('.num li').removeClass('on')
            $(this).addClass('on')

            $('.imgBox li').removeClass('on')
            $('.imgBox li').eq(ii).addClass('on')

            $('.imgBox .txt').eq(ii).css({'right':'-100%'}).stop().animate({'right':'0'},600)
            
        })







// 이벤트


$('.sec6 .btn li').click(function(){

    let iii = $(this).index();
    // console.log(iii)
    
    $('.con_img li').css({'left':'0'}).stop().animate({'left':'-100%'})
    $('.con_img li').eq(iii).css({'left':'100%'}).stop().animate({'left':'0'})
    

    $('.con .btn ul li').removeClass('on')
    $('.con .btn ul li').eq(iii).addClass('on')
});

    let aa = 0;
    setInterval(function(){
    aa++;
    if(aa==3)aa=0;
    $('.sec6 .btn li').eq(aa).trigger('click')
        },3000)



// rev 스크롤

        

    $(window).scroll(function(){
        let sc = $(this).scrollTop(),
            con = $('.sec6 article').offset().top
            console.log(sc)
        
        if(sc>=con){
            $('.sec6 article .con').css({'top':sc-con})
        }
        if(sc>=con+450){
            $('.sec6 article .con').css({'top':450})
        }

        
        
    })
    





// 하단배너
    // $(window).scroll(function(){
    //     let sec7 = $('#warp section').eq(6).offset().top,
    //         sc = $(this).scrollTop()
    //     console.log(sc)

    
        



    // })











});