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
                Deposit
                <!--{cn} 存款-->
            </div>
        </header>
        <!--头-结束-->

        <!--主体-开始-->
        <div class="IndCon" style="padding-top: 0.44rem;">
            <!--取款-开始-->
            <div class="envBK" style="background-color: #25064c;">
                <div class="envBD">
                    <div class="envBDS flexC fl-bet">
                    <div class="envBDH">USDT Balance</div>
                    
                        <input type="text" placeholder="0" value="" class="envBDSI Huans usdtBal" readonly>
                    </div>
                    <div class="envBDS flexC fl-bet" style="margin-top: 10px;">
                    <div class="envBDH">Amount</div>
                        <input type="text" placeholder="50" value="" class="envBDSI Huans inputAmount">
                    </div>
                    <div class="envBDP">
                        Minimum deposit 50 USDT. A ratio of 50 max 2000 <span class='hdFSNp'>(We accept only USDT(POLYGON))</span>
                        <!--{cn} 最低存款50USDT，请输入50的倍数-->
                    </div>
                    
                </div>

                <div class="recDS Huans">
                    <div class="recDfc">
                        <div class="Tc-czDfcB flexC fl-bet">
                            <h3><span class="depositAmount">50</span><span>USDT</span></h3>
                            <p>+</p>
                            <h3><span class='percent'>18</span><span>%</span></h3>
                            <p>=</p>
                            <h3><span class="total">59</span><span>USDT</span></h3>
                        </div>
                        <div class="recDfcP flexC fl-bet">
                            <p>
                                Deposit
                                <!--{cn} 存款-->
                            </p>
                            
                            <!--<p>-->
                            <!--    Each cycle-->
                                <!--{cn} 一周期收益率-->
                            <!--</p>-->
                            <p>
                                Deposit and interest
                                <!--{cn} 存款和收益-->
                            </p>
                        </div>
                    </div>
                    <div class="recDSp">
                        <p>
                        10 days cycle

                            <!--{cn} 15天为一周期，每周期收益20%-->
                        </p>
                        <p>
                        You will have to redeposit every time after each cycle. It will have to be either the same amount or bigger amount.
                            <!--{cn} 一周期存款到期后，需继续存款下一周期，且金额大于或等于前一周期存款金额才可以提取，每存款2次增加1天冻结期，不增加收益，最大增加45天不再增加-->
                        </p>
                    </div>
                </div>
                <a href="JavaScript:;" class="Indbut envBut flexC fl-cen depositBut">
                Confirm
                <!--{cn} 确定-->
            </a>
            </div>
            

            <!--取款-结束-->
        </div>
        <!--主体-结束-->
    </div>

    <script src="js/abis/erc20_abi.js"></script>
    <script src="js/abis/bsg_abi.js"></script>
    <script src="js/jquery1.8.3.min.js"></script>
    <script src="js/layer/layer.js"></script>
    <script src="js/translater.js"></script>
    <script src="js/lang.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js"
        integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ=="
        crossorigin="anonymous"></script>
    <script src="js/common.js?ver=11"></script>
    <script src="js/deposit.js?ver=11.2"></script>

    <script language="JavaScript" type="text/JavaScript">
        jQuery(document).ready(function($) {
            $('.IndCon').css('padding-top',"0.44rem");		
        })
    </script>


</body>

</html>