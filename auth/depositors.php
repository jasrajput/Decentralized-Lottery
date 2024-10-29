<html>

<?php
include 'head.php'
?>

<body>
    <div class="dk">
        <?php
        include 'header.php'
        ?>


        <?php
        include 'sidebar.php'
        ?>


        <!--主体-开始-->
        <div class="IndCon" style="padding-top: 0.44rem; padding-bottom: 0.01rem;">
            <?php
            include 'fixed.php'
            ?>

            <div class="madbck daRiz Huans">
                <div class="daRizT">
                    Latest Depositors
                    <!--{cn} 最新存款-->
                </div>
                <div class="daRizN flexC fl-bet">
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>

                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                    <a href="javascript:;" class="daRiza flexC fl-bet">
                        <div class="daRizaP latestDeposit">
                            Nill
                            <!--{cn} 无-->
                        </div>
                        <div class="daRizaW">...</div>
                        <div class="daRizaS flexC">
                            <img src="images/icon/usdt.svg">
                            <p class="latestAmount">$0.00</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <!--弹出 存款-->
        <div class="TcB"></div>
    </div>

    <script src="js/abis/erc20_abi.js"></script>
    <script src="js/abis/bsg_abi.js"></script>
    <script src="js/jquery1.8.3.min.js"></script>
    <script src="js/layer/layer.js"></script>
    <script src="js/translater.js"></script>
    <script src="js/lang.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js" integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ==" crossorigin="anonymous"></script>
    <script src="js/common.js?ver=3.9"></script>
    <script src="js/depositors.js?3.9"></script>

    <script language="JavaScript" type="text/JavaScript">
        jQuery(document).ready(function($) {
            $('.IndCon').css('padding-top',"0.44rem");
            $('.IndCon').css('padding-bottom',"0.01rem");
            //wap下拉菜单
            $('.wapNav').click(function(){	  
              if(!$(this).hasClass('wapNavO')){
                $(this).addClass('wapNavO');
                $('.wapMenu').addClass("wapMenuO");
                //$('.wapMenu').slideDown(200);
              }else{
                $(this).removeClass('wapNavO');
                $('.wapMenu').removeClass("wapMenuO");  
                 // $('.wapMenu').slideUp(200);
              }
            });
            //弹出-租能量
            // $('.dasTckA4').click(function(){
            // 	$('.TcB').fadeIn(100);
            // 	$('.Tc-tjr').slideDown(200);
            // });
            $('.close').click(function(){$('.TcB').fadeOut(100);$('.TcN').slideUp(200);});
        
            $(".levelCircle").on("click", function(){
                if($(".levelHint").hasClass("on")){
                    $(".levelHint").slideUp(400);
                    $(".levelHint").removeClass('on');
                }else{
                    $(".levelHint").slideDown(400);
                    $(".levelHint").addClass("on");
                }
            });
        
            $(".luckCircle").on("click", function(){
                if($(".luckHint").hasClass("on")){
                    $(".luckHint").slideUp(400);
                    $(".luckHint").removeClass('on');
                }else{
                    $(".luckHint").slideDown(400);
                    $(".luckHint").addClass("on");
                }
            });
        
            $(".topCircle").on("click", function(){
                if($(".topHint").hasClass("on")){
                    $(".topHint").slideUp(400);
                    $(".topHint").removeClass('on');
                }else{
                    $(".topHint").slideDown(400);
                    $(".topHint").addClass("on");
                }
            });
        
            $(".starCircle").on("click", function(){
                if($(".starHint").hasClass("on")){
                    $(".starHint").slideUp(400);
                    $(".starHint").removeClass('on');
                }else{
                    $(".starHint").slideDown(400);
                    $(".starHint").addClass("on");
                }
            });
        })
        
    </script>


</body>

</html>