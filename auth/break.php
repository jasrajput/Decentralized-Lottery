<html>

<?php
include 'head.php'
?>


<body>
    <div class="dk">
        <!--头-开始-->
        <header class="header">
            <a href="javascript:;" class="hd_left"><img src="images/icon/Return1.png"></a>
            <div class="HdCon">
                Split Account
                <!--{cn} 拆分账户-->
            </div>
        </header>
        <!--头-结束-->

        <!--主体-开始-->
        <div class="IndCon" style="padding-top: 0.44rem;">
            <!--取款-开始-->
            <div class="envBK " style="background-color: #25064c;">
                <div class="envBD">
                    <div class="envBDH">USDT</div>
                    <input type="text" placeholder="" readonly="true" value="0" class="envBDI Huans freezingAmt">
                </div>
                <div class="envBD">
                    <div class="envBDH">
                        Amount
                        <!--{cn} 金额-->
                    </div>
                    <div class="envBDS flexC fl-bet">
                        <input type="text" placeholder="50" value="" class="envBDSI Huans tAmount">

                    </div>
                    <div class="envBDP">
                        The ratio of 50
                        <!--{cn} 请输入50的倍数-->
                    </div>
                </div>
                <div class="envBD">
                    <div class="envBDH">
                        Receiver address
                        <!--{cn} 收款地址-->
                    </div>
                    <input type="text" placeholder="" value="" class="envBDI Huans receiver">
                </div>
                <div class="envBmz flexC fl-bet">
                    <a href="JavaScript:;" class="envBza envBza1 depositFreezing" style="background: #17181c66;">
                        Deposit
                    </a>
                    <a href="JavaScript:;" class="envBza envBza2 transferFreezing">
                        Transfer
                    </a>
                </div>
            </div>

            <!--取款-结束-->
        </div>
        <!--主体-结束-->
    </div>

    <script src="js/abis/erc20_abi.js"></script>
    <script src="js/abis/bsg_abi.js"></script>
    <script src="js/jquery1.8.3.min.js"></script>
    <script src="js/translater.js"></script>
    <script src="js/lang.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js" integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ==" crossorigin="anonymous"></script>
    <script src="js/common.js?ver=11"></script>
    <script src="js/split.js?ver=11"></script>
    <script language="JavaScript" type="text/JavaScript">
        jQuery(document).ready(function($) {
            $('.IndCon').css('padding-top',"0.44rem");
        })
    </script>
</body>

</html>