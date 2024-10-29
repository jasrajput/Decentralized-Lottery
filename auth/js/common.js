var bsgAddr = "0x95605819B3BA843c0eC2A7612f19f403E03DB235";
var usdtAddr = "0xe11a86849d99f524cac3e7a0ec1241828e332c62";
var refererDefault = "0x7Ac2683b2F5A6f55432728493d27845e8ea60182";
var zeroAddr = "0x0000000000000000000000000000000000000000";
var bsg;
var usdt;
var userAddr = "";
var autoRefresh = 3000;
var timeStep = 24 * 60 * 60;
var bsgStart = 1665836011000;
var waitTime = 300;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

async function getAccount() {
    var account = 0;
    if (window.ethereum) { // for modern DApps browser
        window.web3 = new Web3(ethereum);
        try {
            await ethereum.request({ method: 'eth_accounts' })

        } catch (error) {
            console.error(error);
        }
    } else if (web3) { // for old DApps browser
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    if (window.web3 !== 'undefined') {
        try {
            await window.web3.eth.getAccounts().then(it => {
                account = it[0];
            });
        } catch (error) {
            console.error(error);
        }
        return account;
    }
}



$(function() {
    setInterval(async() => {
            if (window.web3 !== 'undefined') {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' })

            bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
            usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
            userAddr = await getAccount();
            updateCommonInfo()
            setTimeout(function() {
                setInterval(async() => {
                    let usAddr =  await getAccount();
                    if (usAddr !== userAddr) {
                        userAddr = usAddr;
                        bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
                        usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
                        updateCommonInfo()
                    }
                }, 1000)
            }, autoRefresh)
        }
    }, autoRefresh);

    async function updateCommonInfo() {
        // 合约地址
        var shortBsgAddr = bsgAddr.substring(0, 8) + "..." + bsgAddr.substring(bsgAddr.length - 8);
        $(".contractAddress").text(shortBsgAddr);
        // 平台运行时间
        var startTime = bsgStart;
        var nowTime = (new Date).getTime();
        var runTime = formatDate(startTime, nowTime)
        $(".runTime").text(runTime)
        // 存款倒计时
        

        var orderLength = parseInt(await bsg.methods.getOrderLength(userAddr).call());
        if(orderLength > 0){
            var {unfreeze} = await bsg.methods.orderInfos(userAddr, orderLength - 1).call();
            var unfreezeTS = parseInt(unfreeze)*1000
            var depositCountDown = formatDate(nowTime, unfreezeTS)
            $(".depositCountDown").text('  ' + depositCountDown);
            await sleep(waitTime);
        }else{
            $(".depositCountDown").text("  00:00:00");
        }

        let starPool = parseInt(await bsg.methods.starPool().call())/1e18
        $(".platinumPool").text("$" + starPool.toFixed(2))
        await sleep(waitTime);
        // Top奖池
        let topPool = parseInt(await bsg.methods.starPool4().call())/1e18
        $(".diamondPool").text("$" + topPool.toFixed(2))
        await sleep(waitTime);
        // 幸运奖池
        let luckPool = parseInt(await bsg.methods.starPool5().call())/1e18
        $(".doubleDiamondPool").text("$" + luckPool.toFixed(2))
        await sleep(waitTime);
        // 四星奖池
    }

    function formatDate(startTime, endTime) {
        var formatTime;
        if(startTime < endTime){
            var perDay = 24 * 60 * 60 * 1000; 
            var perHour = 60 * 60 * 1000;
            var perMinute = 60 * 1000;
            var compareTime = endTime - startTime;  // 时间差
            day = Math.floor(compareTime / perDay);
            var hours =Math.floor(compareTime % perDay / perHour);
            var miniutes = Math.floor(compareTime % perDay % perHour / perMinute);
            if(day < 10){
                day = "0" + day
            }

            if(hours < 10){
                hours = "0" + hours
            }

            if(miniutes < 10){
                miniutes = "0" + miniutes
            }
            formatTime = day + ":" + hours + ":" + miniutes;
        }else{
            formatTime = "00:00:00";
        }
        return formatTime;
    }

    function getDate(timstamp) {
        var date = new Date(timstamp);
        var year = date.getFullYear();  // 获取完整的年份(4位,1970)
        var month = date.getMonth() + 1;  // 获取月份(0-11,0代表1月,用的时候记得加上1)
        var day = date.getDate();  // 获取日(1-31)
        var hour = date.getHours();  // 获取小时数(0-23)
        var minute = date.getMinutes();  // 获取分钟数(0-59)
        var second = date.getSeconds();  // 获取秒数(0-59)
        var forMatDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        return forMatDate
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
    
});

