<html>

<?php
include 'head.php'
?>

<body>
    <div class="">
        <?php
        include 'header.php'
        ?>


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


            <div class="depDK">
                <div class="depDKzN">
                    <div class="depTit Huans flex fl-bet">
                        <div class="">
                            <div class="depTitH">
                                Deposit details
                                <!--{cn} 存款详情-->
                            </div>

                        </div>
                    </div>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="DepTab">
                        <tbody>
                            <tr>
                                <th scope="col">
                                    Amount
                                    <!--{cn} 存款金额-->
                                </th>
                                <th scope="col">
                                    Deposit Date
                                    <!--{cn} 存款日期-->
                                </th>
                                <th scope="col">
                                    Unlock Time
                                    <!--{cn} 解冻日期-->
                                </th>
                                <th scope="col">
                                    Reward
                                    <!--{cn} 周期收益-->
                                </th>

                                <th scope="col" class="DepTabB fl-cen flexC">
                                    Order Status
                                    <!--{cn} 订单状态-->
                                     <a href="javascript:;" class="dasDenLhp"><img src="images/icon/help-circle.png"></a>
                                    <div class="DepTabBN">
                                        <p class="DepC1">
                                            * Freezing: Unmaturity of deposit
                                            <!--{cn} * 未解冻: 存款未到期-->
                                        </p>
                                        <p class="DepC3">
                                            * Completed: unfreeze and withdrawal completed
                                            <!--{cn} * 待关联：存款到期尚未关联-->
                                        </p>
                                        <p class="DepC6">
                                            * Available withdraw: Withdrawable
                                            <!--{cn} * 已完成：取款完成-->
                                        </p>
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!--主体-结束-->

    </div>

    <script src="js/abis/erc20_abi.js"></script>
    <script src="js/abis/bsg_abi.js"></script>
    <script src="js/jquery1.8.3.min.js"></script>
    <script src="js/translater.js"></script>
    <script src="js/echarts.jss"></script>
    <script src="js/lang.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js" integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ==" crossorigin="anonymous"></script>
    <script src="js/common.js?ver=11"></script>
    <script src="js/depositdet.js?ver=11"></script>
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
            $('.dasTckA4').click(function(){
                $('.TcB').fadeIn(100);
                $('.Tc-tjr').slideDown(200);
            });
            $('.close').click(function(){$('.TcB').fadeOut(100);$('.TcN').slideUp(200);});
        
            $(".dasDenLhp").on("click", function(){
                if($(".DepTabBN").hasClass("on")){
                    $(".DepTabBN").slideUp(400);
                    $(".DepTabBN").removeClass('on');
                }else{
                    $(".DepTabBN").slideDown(400);
                    $(".DepTabBN").addClass("on");
                }
            });
        })
    </script>

</body>

</html>