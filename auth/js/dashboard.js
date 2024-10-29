var refer = "";
var userAddr = "";
var staticReward;
var otherRewards;
var capitalUnfreezed;

var curDay = 0;
var lastDistribute = 0;
var totalUser = 0;
var luckPool = 0;
var starPool = 0;
var topPool = 0;
var userMaxDeposit = 0;
var input;
var inputOk = false;

var perDay = 24*60*60; 
var perHour = 60*60;
var perMinute = 60;

var isCountdown = false;

function mobilePcRedirect(referAddr) {
    var mobileLink = "https://blockchainbank.games/dashboard?ref="
    var orginLink = window.location.protocol+"//"+window.location.host + getUrlRelativePath() + "?ref=" + refer;
    var sUserAgent= navigator.userAgent.toLowerCase();
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid= sUserAgent.match(/android/i) == "android";
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        window.location.href= mobileLink + referAddr;
    }
};

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

function getUrlRelativePath(){
    var url = document.location.toString();
    var arrUrl = url.split("//");
    var start = arrUrl[1].indexOf("/");
    var relUrl = arrUrl[1].substring(start);//stop省略，截取从start开始到结尾的所有字符
    if(relUrl.indexOf("?") != -1){
    relUrl = relUrl.split("?")[0];
    }
    return relUrl;
}

$(function() {
    function setRefLink() {
        var inviteLink = window.location.protocol+"//"+window.location.host + getUrlRelativePath() + "?ref=" + userAddr;
        $('.refLink').val(inviteLink)
        var myAddrShort = userAddr.substring(0,4) + "..." + userAddr.substring(userAddr.length - 4);
        $(".myAddr").text(myAddrShort);
    }
    
    $(".copyLink").on("click", function(){
        var copyText = document.getElementById('ref-link');
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        layer.msg("Success");
    })

    // 注册
    $(".registerBut").on("click", async function(){
        await bsg.methods.register(refer).send({ from: userAddr })
        await sleep(2000).then(async function(){
            location.reload()
        })
    })

    setInterval(async() => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            setRefLink();
            if(!isCountdown){
                lotteryCountdown();
            }
            await updateSysInfo();
            await updateUserInfo();
            setTimeout(function() {
                setInterval(async() => {
                    if (window.web3 !== 'undefined') {
                        userAddr = await getAccount();
                        setRefLink();
                        await updateSysInfo();
                        await updateUserInfo();
                        if(!isCountdown){
                            lotteryCountdown();
                        }
                    }
                }, 500)
            }, autoRefresh)
        }
    }, autoRefresh);

    async function updateUserInfo() {
        // 用户TRX余额
        trxBal = parseInt(await web3.eth.getBalance(userAddr))/1e18;
        $(".trxBal").text(trxBal.toFixed(2))
        await sleep(waitTime);
        // 用户USDT余额
        usdtBal = parseInt(await usdt.methods.balanceOf(userAddr).call())/1e18;
        $(".usdtBal").text(usdtBal.toFixed(2))
        await sleep(waitTime);
        var userInfo = await bsg.methods.userInfo(userAddr).call();
        // var {capitals_, statics_, directs_, level4Released, level5Left, level5Released, level5Freezed, star, luck, top} = await bsg.rewardInfo(userAddr).call();
        
        var {referrer, start, maxDeposit, totalRevenue} = await bsg.methods.userInfo(userAddr).call();
        var totalWithdrawn = parseFloat(totalRevenue / 1e18);
        $(".withdrawn").text(totalWithdrawn.toFixed(2))

       
        await sleep(waitTime);

        refer = userInfo.referrer;
        if(refer == zeroAddr){
            $('.TcB').fadeIn(100);
		    $('.Tc-tjr').slideDown(200);
            refer = getQueryVariable("ref");

            if(refer == ''){
                refer = refererDefault;
            }
            $(".Tc-tjrNP").text(refer);
        }
        
        // $(".TcN").css('display', 'block');
        var referShort = refer.substring(0,8) + "..." + refer.substring(userAddr.length - 8);
        $(".referAddr").text(referShort)

        userMaxDeposit = parseInt(userInfo.maxDeposit)/1e18
        totalDeposit = parseInt(userInfo.totalDeposit) / 1e18;
        if(totalDeposit > 0){
            $(".dMention").css({"display":"none"})
            $(".depositFreezing").css({"background":"gray"})
        }else{
            $(".tMention").css({"display":"none"})
            $(".transferFreezing").css({"background":"gray"})
        }
        
        

        let level = parseInt(userInfo.level);
        
        if(totalDeposit >= 1 && totalDeposit <= 2) {
        // if(totalDeposit >= 50 && totalDeposit <= 450) {
            rank = 'Bronze';
        } else if(totalDeposit >= 3 && totalDeposit <= 4) {
        // } else if(totalDeposit >= 500 && totalDeposit <= 950) {
            rank = 'Silver';
        } else if(totalDeposit >= 5) {
        // } else if(totalDeposit >= 1000) {
            rank = 'Gold';
        } else {
            rank = 'None';
        }
        
        $(".level").text(rank);
        
        if(level >= 1  && level < 2) {
            $(".platinumStatus").text("(Achieved)");
         }
         
         if(level >= 2  && level < 3) {
             $(".diamondStatus").text("(Achieved)");
         }
         
         if(level >= 3) {
             $(".doubleDiamondStatus").text("(Achieved)");
         }
        
        
        // for(i = 0; i < level; i++){
            // $(".level").eq(i).attr("src","images/icon/star02.png");
        // }
    }

    $(".contractAddress").on("click", function(){
        var link = "https://polygonscan.com/address/" + bsgAddr
        window.location.href = link
    })

    async function lotteryCountdown() {
        isCountdown = true;
        // 开奖倒计时
        lastDistribute = parseInt(await bsg.methods.lastDistribute().call())
        setInterval(async() => {
            var nowTime = (new Date).getTime() / 1000;
            var disTime = lastDistribute + perDay;
            var leftTime = disTime - nowTime;
            if(leftTime > 0){
                
                // 进行中
                var leftHours = Math.floor(leftTime/perHour)
                var hourStart;
                var hourEnd;
                if(leftHours >= 10){
                    hourStart = Math.floor(leftHours/10)
                    hourEnd = Math.floor(leftHours%10)
                }else{
                    hourStart = 0;
                    hourEnd = leftHours;
                }
    
                var leftMinutes = Math.floor(leftTime%perHour/perMinute)
                var minuteStart;
                var minuteEnd;
                if(leftMinutes >= 10){
                    minuteStart = Math.floor(leftMinutes/10)
                    minuteEnd = Math.floor(leftMinutes%10)
                }else{
                    minuteStart = 0;
                    minuteEnd = leftMinutes;
                }
                var leftSeconds = Math.floor(leftTime%perHour%perMinute)
                var secondStart;
                var secondEnd;
                if(leftSeconds >= 10){
                    secondStart = Math.floor(leftSeconds/10);
                    secondEnd = Math.floor(leftSeconds%10);
                }else{
                    secondStart = 0
                    secondEnd = leftSeconds
                }

                $(".hourStart").text(hourStart)
                $(".hourEnd").text(hourEnd)
                $(".minuteStart").text(minuteStart)
                $(".minuteEnd").text(minuteEnd)
                $(".secondStart").text(secondStart)
                $(".secondEnd").text(secondEnd)
                
            }else {
                //开奖中
                var statusNow = "In Progress"
                if(lang == "cn"){
                    statusNow = "进行中"
                }
                $(".dasJiaR p").text(statusNow)
            }
        }, 1000)
    }

    async function updateSysInfo() {
        // 玩家数量
        totalUser = parseInt(await bsg.methods.totalUser().call());
        $(".totalUser").text(totalUser)
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

});