// 多语言
$('.hdREna').click(function(){	  
    if(!$(this).hasClass('on')){
        $('.hdREna').addClass('on');
      $('.hdREnK').slideDown(0);
    }else{
      $('.hdREna').removeClass('on');
       $('.hdREnK').slideUp(0);
    }
});

var lang = getQueryVariable("lang")
if(lang != 'cn'){
    lang = "default";
}
var trans = new Translater();
var imgSrc = "images/pic/"+lang+".png"

if(lang == "default"){
    imgSrc = "images/pic/en.png"
    $(".langAbbr").text("EN")
}else{
    $(".langAbbr").text(lang.toUpperCase())
}

$(".flagImg").attr("src", imgSrc)

$(".hdREns").click(function(e) { 
    $('.hdREna').removeClass('on');
    $('.hdREnK').slideUp(100);
    var classes = $(this).attr('class').split(" ").toString(); 
    lang = classes.substr(classes.length - 2);
    imgSrc = "images/pic/"+lang+".png"
    $(".flagImg").attr("src", imgSrc)
    $(".langAbbr").text(lang.toUpperCase())
    if (lang.match(/^[a-z]{2}$/)) { 
        console.log(lang)
        if(lang == 'en'){
            lang = "default";
        }
        trans.setLang(lang);
    } 
});

var ref = getQueryVariable("ref")
if(!ref){
    ref = ''
}

$(".IndZhua").click(function(e) {
    window.location.href="./dashboard.php?ref="+ref+"&lang="+lang
})

$(".wapMenuA").eq(0).click(function(e) {
    window.location.href="./dashboard.php?ref="+ref+"&lang="+lang
})

$(".wapMenuA").eq(1).click(function(e) {
    window.location.href="./depositors.php?ref="+ref+"&lang="+lang
})
// $(".wapMenuA").eq(2).click(function(e) {
//     window.location.href="./reward.php?ref="+ref+"&lang="+lang
// })


$(".wapMenuA").eq(2).click(function(e) {
    window.location.href="./myteam.php?ref="+ref+"&lang="+lang
})

$(".wapMenuA").eq(3).click(function(e) {
    window.location.href="./depositdet.php?ref="+ref+"&lang="+lang
})

$(".hdlogo").on("click", function(){
    window.location.href="../index.php?ref="+ref+"&lang="+lang
})

$(".dasTckNA").eq(0).click(function(){
    window.location.href="./deposit.php?ref="+ref+"&lang="+lang
})

$(".dasTckNA").eq(1).click(function(){
    window.location.href="./withdrawal.php?ref="+ref+"&lang="+lang
})

$(".dasTckNA").eq(2).click(function(){
    window.location.href="./break.php?ref="+ref+"&lang="+lang
})

$(".dasTckNA").eq(3).click(function(){
    window.location.href="https://polygonscan.com/"
})
$(".hd_left").on('click', function(){
    window.location.href="./dashboard.php?ref="+ref+"&lang="+lang
})

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}