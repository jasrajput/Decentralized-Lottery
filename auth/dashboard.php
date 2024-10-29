<!DOCTYPE html>
<html>

<?php
include 'head.php'
?>

<body>
	<div class="">
		<?php
		include 'header.php'
		?>


		<?php
		include 'sidebar.php'
		?>



		<!--主体-开始-->
		<div class="IndCon">

		<div class="madbck dasDen Huans">
				<div class="dasDenL Huans flexC fl-bet">

					<div class="dasDenLP flexC">
						<h3>
							Rank: <span class='level'></span>
						</h3>
						<!--<div class="dasDenLs flexC">-->
						<!--	<img class="level" src="images/icon/star01.png">-->
						<!--	<img class="level" src="images/icon/star01.png">-->
						<!--	<img class="level" src="images/icon/star01.png">-->
						<!--</div>-->
						<!--<a href="javascript:;" class="dasDenLhp levelCircle"><img src="images/icon/help-circle.png"></a>-->
						<!--<p class="levelHint">-->
						<!--	Bronze, Silver, Gold-->
						<!--</p>-->
					</div>
					<div class="dasDenLP flexC">
						<h3>
							Income
							<!--{cn} 总收益-->
						</h3>
						<div class="dasDenLPn">$<span class="income">0.00</span></div>
					</div>

					<div class="dasDenLP flexC">
						<h3>
							Matic Balance
							<!--{cn} TRX余额-->
						</h3>
						<div class="dasDenLPn trxBal">0.00</div>
					</div>
					<div class="dasDenLP flexC">
						<h3>
							USDT Balance:
							<!--{cn} USDT余额-->
						</h3>
						<div class="dasDenLPn usdtBal">0.00</div>
					</div>

					<div class="dasDenLP flexC">
						<h3>
							Referral
							<!--{cn} 我的邀请人-->
						</h3>
						<div class="dasDenLPn referAddr">...</div>
					</div>
					<div class="dasDenLP flexC">
						<h3>
							My address
							<!--{cn} 我的链接-->
						</h3>
						<!-- <div class="dasDenLPn">Xhte5JHg6oL</div> -->
						<input type="text" id="ref-link" style="background: transparent; border: 0px; color: #fff; width: 180px;" class="refLink" readonly="readonly" value="">
						<a href="javascript:;" class="dasDenLc copyLink ">
							Copy
							<!--{cn} 复制-->
						</a>
					</div>
				</div>
			</div>

		
		<div class="madbck dasTck Huans flexC fl-bet">
				<div class="dasTckN Huans flexC fl-bet" style="background-color: #150626;padding:10px">
					<div class="dasTckI"><img src="images/icon/usdt.svg"></div>
					<button style="margin-top: 8px;" class="glow-on-hover dasTckNA dasTckA1" type="button">Deposit</button>
				</div>
				<div class="dasTckN Huans flexC fl-bet" style="background-color: #150626;padding:10px">
					<div class="dasTckI"><img src="images/icon/usdt.svg"></div>
					<button style="margin-top: 8px;" class=" dasTckNA dasTckA2" type="button">Withdraw</button>
				</div>
				<div class="dasTckN Huans flexC fl-bet" style="background-color: #150626;padding:10px">
					<div class="dasTckI"><img src="images/icon/usdt.svg"></div>
					<button style="margin-top: 8px;" class="glow-on-hover dasTckNA dasTckA3" type="button">Split</button>
				</div>
				<!-- <div class="dasTckN Huans flexC fl-bet" style="background-color: #150626;padding:10px">
					<div class="dasTckI"><img src="images/icon/usdt.svg"></div>
					<button class="glow-on-hover dasTckNA dasTckA4" type="button">POLYSCAN</button>
				</div> -->
			</div>

			<?php
			include 'fixed.php'
			?>



			


			<div class="madbck dasNuz Huans">
				<div class="dasNuzK flexC fl-bet">
					<a href="javascript:;" class="dasNuzA dasNuzA1 Huans flexC fl-bet">
						<div class="dasNuzI"><img src="images/pic/users.svg"></div>
						<div class="dasNuzN">
							<h3>
								Players
								<!--{cn} 玩家数量-->
							</h3>
							<p><span class="totalUser">0</span></p>
						</div>
					</a>
					<a href="javascript:;" class="dasNuzA dasNuzA2 Huans flexC fl-bet">
						<div class="dasNuzI"><img src="images/pic/daily.svg"></div>
						<div class="dasNuzN">
							<h3>
								Platinum
								<!--{cn} 幸运奖池-->
							</h3>
							<p>
								<span class="platinumPool">$0.00</span>
								<span class='platinumStatus'>(Awaited)</span>
							</p>

						</div>
					</a>

					
					<a href="javascript:;" class="dasNuzA dasNuzA4 Huans flexC fl-bets">
						<div class="dasNuzI"><img src="images/pic/3star.svg"></div>
						<div class="dasNuzN">
							<h3>
								Diamond
								<!--{cn} TOP奖池-->
							</h3>
							<p>
								<span class="diamondPool">$0.00</span>
								<span class="diamondStatus">(Awaited)</span>
								
							</p>
						</div>
					</a>
					
					<a href="javascript:;" class="dasNuzA dasNuzA3 Huans flexC fl-bet">
						<div class="dasNuzI"><img src="images/pic/4star.svg"></div>
						<div class="dasNuzN">
							<h3>
								Double Diamond
								<!--{cn} 四星奖池-->
							</h3>
							<p>
								<span class="doubleDiamondPool">$0.00</span>
								<span class='doubleDiamondStatus'>(Awaited)</span>
								
							</p>
						</div>
					</a>
				</div>
			</div>






			


			<div class="madbck dasNuz Huans">
				<div class="dasNuzK flexC fl-bet">

					<a href="javascript:;" class="dasNuzA dasNuzA1 Huans flexC fl-bet">
						<div class="dasJiaLN">
							<h3>
								Platinum
							</h3>
							<p>
								Time Remaning
							</p>
						</div>
						<div class="dasJiaC flexC fl-cen">
							<div class="dasJiaCn hourStart">0</div>
							<div class="dasJiaCn hourEnd">0</div>
							<p></p>
							<div class="dasJiaCn minuteStart">0</div>
							<div class="dasJiaCn minuteEnd">0</div>
							<p></p>
							<div class="dasJiaCn secondStart">0</div>
							<div class="dasJiaCn secondEnd">0</div>
						</div>
					</a>

					<a href="javascript:;" class="dasNuzA dasNuzA1 Huans flexC fl-bet">
						<div class="dasJiaLN">
							<h3>
							    Diamond
								
							</h3>
							<p>
								Time Remaning
							</p>
						</div>
						<div class="dasJiaC flexC fl-cen">
							<div class="dasJiaCn hourStart">0</div>
							<div class="dasJiaCn hourEnd">0</div>
							<p></p>
							<div class="dasJiaCn minuteStart">0</div>
							<div class="dasJiaCn minuteEnd">0</div>
							<p></p>
							<div class="dasJiaCn secondStart">0</div>
							<div class="dasJiaCn secondEnd">0</div>
						</div>

					</a>


					<a href="javascript:;" class="dasNuzA dasNuzA1 Huans flexC fl-bet">
						<div class="dasJiaLN">
							<h3>
								Double Diamond
							</h3>
							<p>
								Time Remaning
							</p>
						</div>
						<div class="dasJiaC flexC fl-cen">
							<div class="dasJiaCn hourStart">0</div>
							<div class="dasJiaCn hourEnd">0</div>
							<p></p>
							<div class="dasJiaCn minuteStart">0</div>
							<div class="dasJiaCn minuteEnd">0</div>
							<p></p>
							<div class="dasJiaCn secondStart">0</div>
							<div class="dasJiaCn secondEnd">0</div>
						</div>

					</a>



				</div>


			</div>



		</div>
		<!--主体-结束-->
		<!--弹出 确定推荐人页面-->
		<div class="TcN Tc-tjr">
			<div class="TcNr flexC fl-cen">
				<div class="Tc-tjrI"><img src="images/pic/register.svg"></div>
				<div class="Tc-tjrN">
					<div class="Tc-tjrNH">
						Confirm your inviter
						<!--{cn} 请确认你的推荐人是-->
					</div>
					<div class="Tc-tjrNP">...</div>
				</div>
				<div class="Tc-cfB Tc-tjrB flexC fl-bet">
					<a href="JavaScript:;" class="Tc-cfBa Tc-cfBel flexC fl-cen close">
						Cancel
						<!--{cn} 取消-->
					</a>
					<a href="JavaScript:;" class="Tc-cfBa Tc-cfBqd flexC fl-cen registerBut">
						Confirm
						<!--{cn} 确定-->
					</a>
				</div>
			</div>
		</div>
		<!--弹出 存款-->
		<div class="TcB"></div>
	</div>
</body>
<script src="js/abis/erc20_abi.js"></script>
<script src="js/abis/bsg_abi.js"></script>
<script src="js/jquery1.8.3.min.js"></script>
<script src="js/layer/layer.js"></script>
<script src="js/translater.js"></script>
<script src="js/lang.js?v=10"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.3.0/web3.min.js" integrity="sha512-ppuvbiAokEJLjOUQ24YmpP7tTaLRgzliuldPRZ01ul6MhRC+B8LzcVkXmUsDee7ne9chUfApa9/pWrIZ3rwTFQ==" crossorigin="anonymous"></script>
<script src="js/common.js?ver=16"></script>
<script src="js/dashboard.js?ver=16"></script>

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

</html>