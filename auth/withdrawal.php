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
                Withdraw
                <!--{cn} 取款-->
            </div>
        </header>
        <!--头-结束-->

        <!--主体-开始-->
        <div class="IndCon" style="padding-top: 0.44rem;">
            <!--取款-开始-->
            <div class="envDK">
                <div class="envNz flexC fl-bet">
                    <div class="envNH">
                        Unlock principal
                        <!--{cn} 解冻存款-->
                    </div>
                    <div class="envNS"><span class="unfreezed">0.00</span> USDT</div>
                </div>
                <div class="envNz flexC fl-bet">
                    <div class="envNH">
                        Cycle reward
                        <!--{cn} 周期收益-->
                    </div>
                    <div class="envNS"><span class="staticReward">0.00</span> USDT</div>
                </div>
            <div class="envNz flexC fl-bet">
				<div class="envNH">
					Level Income
					<!--{cn} 1层收益-->
				</div>
				<div class="envNS"><span class="matchBonus">0.00</span> USDT</div>
			</div>
			
   <!--         <div class="envNz flexC fl-bet">-->
			<!--	<div class="envNH">-->
			<!--		2-5 level-->
					<!--{cn} 2~5层收益-->
			<!--	</div>-->
			<!--	<div class="envNS"><span class="level4Reward">0.00</span> USDT</div>-->
			<!--</div>-->
   <!--         <div class="envNz flexC fl-bet">-->
			<!--	<div class="envNH">-->
			<!--		6-20 level-->
					<!--{cn} 6~20层收益-->
			<!--	</div>-->
			<!--	<div class="envNS"><span class="level5Reward">0.00</span> USDT</div>-->
			<!--</div>-->
   <!--         <div class="envNz flexC fl-bet" style="font-size: 0.12rem; margin-left: 0.1rem; height: 0.2rem;">-->
			<!--	<div class="envNH">-->
			<!--		Freezing-->
					<!--{cn} 冻结-->
			<!--	</div>-->
			<!--	<div class="envNS"><span class="level5Freezed">0.00</span> USDT</div>-->
			<!--</div>-->
                
                <div class="envNz flexC fl-bet">
                    <div class="envNH">
                    
                    Platinum
                        <!--{cn} TOP奖-->
                    </div>
                    <div class="envNS"><span class="starReward">0.00</span> USDT</div>
                </div>
                <div class="envNz flexC fl-bet">
                    <div class="envNH">
                    Diamond
                        <!--{cn} 四星奖-->
                    </div>
                    <div class="envNS"><span class="luckReward">0.00</span> USDT</div>
                </div>
                                
                

                <div class="envNz flexC fl-bet">
                    <div class="envNH">
                    Double Diamond
                        <!--{cn} 幸运奖-->
                    </div>
                    <div class="envNS"><span class="topReward">0.00</span> USDT</div>
                </div>
                
                <!--<div class="envNz flexC fl-bet">-->
                <!--    <div class="envNH">-->
                <!--    Top player reward-->
                        <!--{cn} 幸运奖-->
                <!--    </div>-->
                <!--    <div class="envNS"><span class="topReward">0.00</span> USDT</div>-->
                <!--</div>-->

                <div class="envNF flexC fl-bet">
                <div class="envNH">
                    Available withdrawal
                    <!--{cn} 可取款金额-->
                </div>
                <div class="envNS"><span class="totalReward">0.00</span> USDT</div>
            </div>
            <a href="JavaScript:;" class="Indbut envBut withdrawBut">
                Withdraw
                <!--{cn} 取款-->
            </a>
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
    <script src="js/withdraw.js?ver=11"></script>
    <script language="JavaScript" type="text/JavaScript">
        jQuery(document).ready(function($) {
            $('.IndCon').css('padding-top',"0.44rem");		
        })
    </script>


</body>

</html>