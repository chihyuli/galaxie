(function ($) {
    $("body").append("<img id='goTopButton' style='display:none; z-index: 5; width:120px; height:120px; cursor:pointer; top:100px;right:100px; position:fixed;' title='回到頂端'/>");
    var img = "../img/LOGO.png",
        location = 3/4, //按鈕位置在螢幕的1/2處
        right = 15,
        opacity = 1,
        speed = 400, //捲動速度
        $button = $("#goTopButton"),
        $body = $(document),
        $win = $(window);
    $button.attr("src", img);
    window.goTopMove=function(){
      var scrollH = $body.scrollTop(),
        winH= $win.height(),
        css = { "top": winH * location +"px","position":"fixed","right":right,"opacity":opacity };
      if(scrollH > 20){
        $button.css(css);
        $button.fadeIn("slow");
      }
      else{
        css={"transform":"none","transition":"none"};
        $button.css(css);
        $button.fadeOut("slow");
      }
    };
      $win.on({
        scroll: function(){goTopMove();},
        resize: function(){goTopMove();}
      });
      $button.on({
        mouseover:function(){$button.css("opacity",.7);},
        mouseout:function(){$button.css("opacity",opacity);},
        click:function(){
          css={"transform":"scale(8,8)","transition":"transform 1s ease 0s"};
          $button.css(css);
          $("html,body").animate({scrollTop:0},speed);
          

        }
      });
    
  })(jQuery)