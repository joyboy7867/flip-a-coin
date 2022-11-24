var head=1
var tail=1
$(".btn").click(function(){
    var randomno=Math.floor(Math.random()*2)+1
    console.log(randomno)
    var imghead="images/head.png"
    var imgtail="images/tail.png"
    var audio=new Audio("sound/coin-drop-39914.mp3")
    if(randomno===1){
        audio.play()        
        $("img").attr("src",imghead)
        
        $("h1").text("HEADS...")
        $(".h").text("Head ="+head++)
    }
    else{
        audio.play()
        $("img").attr("src",imgtail)
        
        $("h1").text("TAILS...")
        $(".t").text("Tail ="+tail++)
    }
});

