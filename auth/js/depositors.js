var bsgAddr = "0x95605819B3BA843c0eC2A7612f19f403E03DB235";
var usdtAddr = "0xe11a86849d99f524cac3e7a0ec1241828e332c62";
var refererDefault = "0x7Ac2683b2F5A6f55432728493d27845e8ea60182";
var zeroAddr = "0x000000000000000000000000000000000000dEaD";


var bsg;
var usdt;
var userAddr = "";
var autoRefresh = 3000;
var timeStep = 24 * 60 * 60;
var lang = "default";

var bsgStart = 1665836011000;
var waitTime = 300;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

$(function () {
    setInterval(async () => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
            usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
            updateInfos()
            setTimeout(function () {
                setInterval(async () => {
                    if (window.web3 !== 'undefined') {
                        userAddr = await getAccount();
                        bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
                        usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
                        updateInfos()
                    }
                }, 1000)
            }, 5000)
        }
    }, 5000);

    async function updateInfos() {
        // 最新存款
        var depositCount = parseInt(await bsg.methods.getDepositorsLength().call());
        var recycle = 10;
        if (depositCount < recycle) {
            recycle = depositCount
        }

        var index = 0;
        var userMap = new Map();
        for (var i = depositCount; i > depositCount - recycle; i--) {
            var userLatestDeposit = await bsg.methods.depositors(i - 1).call();
            if (!userMap.has(userLatestDeposit)) {
                userMap.set(userLatestDeposit, 0);
            } else {
                var val = userMap.get(userLatestDeposit)
                userMap.set(userLatestDeposit, val + 1)
            }
            var userCount = userMap.get(userLatestDeposit);
            var userLatestOrderNum = parseInt(await bsg.methods.getOrderLength(userLatestDeposit).call());
            var { amount, start } = await bsg.methods.orderInfos(userLatestDeposit, userLatestOrderNum - 1 - userCount).call();
            var latestAmount = parseInt(amount) / 1e18
            $(".latestDeposit").eq(index).text(userLatestDeposit)
            $(".latestAmount").eq(index).text("$" + latestAmount.toFixed(2))
            // 时间
            var latestStart = getDate(parseInt(start) * 1000)
            $(".daRizaW").eq(index).text(latestStart)
            index++;
        }
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