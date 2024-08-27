
    $(function(){
        $("#portfolio .btn").click(function(){
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
           
            
            if( $(this).text()=="All" ){
                $("#portfolio .portfolio").fadeIn();
            }
            else if( $(this).text()=="Website" ){
                $("#portfolio .portfolio").fadeOut(0);
                $("#portfolio .web").fadeIn();
            }
            else if( $(this).text()=="Branding" ){
                $("#portfolio .portfolio").fadeOut(0);
                $("#portfolio .branding").fadeIn();
            }
        });
    
    
        $(".accordion a").click(function(e){
            e.preventDefault();
    
            if( $(this).hasClass("active")==false ){
                $(".accordion a").removeClass("active");
                $(this).addClass("active");
                $(".accordion p").slideUp();
                $(this).next("p").slideDown();
               
            }
            // else{
            //     $(".accordion a").removeClass("active");
            //     $(".accordion p").slideUp();
            // }
        });
    
        $(".top").click(function(){
            
            $("html,body").animate({scrollTop:0});
        })
    
        $("header .menu").click(function(){
            $(".collapse").slideToggle();
            $(this).toggleClass("active");
        });
    
        if(screen.width<768){
            $(".collapse a, .signup").click(function(){
                 $(".collapse").slideUp();
                 $("header .menu").removeClass("active");
            });
    
        }
    
        $(".signup").click(function(){
            $("body").append(`<div class="overlay"></div>`);
            $("body").append(`<div class="popup"></div>`);
            $(".popup").append($(".hiddenform").html());
    
            $(window).keyup(function(e){
                if(e.which==27){
                    $(".overlay, .popup").remove();
                }
            });
    
            $(".popup .cross").click(function(){
                $(".overlay, .popup").remove();
            })
        });
    
        $(".slider").bxSlider({
            auto:true,
            controls:false,
            autoHover:true
        });
    
    });