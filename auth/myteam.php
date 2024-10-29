<html>

<?php
	include 'head.php'
?>


<body>
    <div class="dk">
        <!--头-开始-->
        <?php
	include 'header.php'
?>

        <!--头-结束-->

        <!--导航-开始-->
        <?php
	include 'sidebar.php'
?>

        <!--导航-结束-->

        <!--主体-开始-->
        <div class="IndCon" style="padding-top: 0.44rem; padding-bottom: 0.01rem;">
        <?php
	include 'fixed.php'
?>

            <div class="madbck teaBR Huans">
                <div class="teaBRF flex fl-bet">
                    <a href="javascript:;" class="teaBRFa flexC">
                        <img src="images/pic/team01.png">
                        <div class="teaBRFp">
                            <p>
                                Sales
                                <!--{cn} 总业绩-->
                            </p>
                            <h3 class="DepC4 totalTeamDeposit">0.00</h3>
                        </div>
                    </a>
                    <a href="javascript:;" class="teaBRFa flexC">
                        <img src="images/pic/team02.png">
                        <div class="teaBRFp">
                            <p>
                                Downline
                                <!--{cn} 邀请用户-->
                            </p>
                            <h3 class="DepC1 totalInvited">0</h3>
                        </div>
                    </a>
                    <a href="javascript:;" class="teaBRFa flexC">
                        <img src="images/pic/team03.png">
                        <div class="teaBRFp">
                            <p>
                                Performance A area
                            </p>
                            <h3 style="color:#FA2256" class="maxDirectDeposit">0.00</h3>
                        </div>
                    </a>

                    <a href="javascript:;" class="teaBRFa flexC">
                        <img src="images/pic/team05.png">
                        <div class="teaBRFp">
                            <p>
                            Performance B area
                            </p>
                            <h3 class="DepC2 otherDirectDeposit">0.00</h3>
                        </div>
                    </a>

                </div>
            </div>
        </div>
        <!--主体-结束-->

    </div>

    <script src="js/abis/erc20_abi.js"></script>
    <script src="js/abis/bsg_abi.js"></script>
    <script src="js/jquery1.8.3.min.js"></script>
    <script src="js/translater.js"></script>
    <script src="js/echarts.js"></script>
    <script src="js/lang.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js" integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ==" crossorigin="anonymous"></script>
    <script src="js/common.js?ver=11"></script>
    <script src="js/myteam.js?ver=11"></script>
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
            $('.close').click(function(){$('.TcB').fadeOut(100);$('.TcN').slideUp(200);});
        });
    </script>


</body>

</html>