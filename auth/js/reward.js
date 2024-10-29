var bsgAddr = "0xc2EFA751bf919ACdB2A588A22d5A7594D8c0BD8d";
var usdtAddr = "0xe11a86849d99f524cac3e7a0ec1241828e332c62";
var refererDefault = "0xA5abc58D8c0Fc0df8A59aF558370221b5c3Aa4cB";
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
            updateRewardUser()
            setTimeout(function () {
                setInterval(async () => {
                    if (window.web3 !== 'undefined') {
                        userAddr = await getAccount();
                        bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
                        usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
                        updateRewardUser()
                    }
                }, 1000)
            }, 5000)
        }
    }, 5000);

    async function updateRewardUser() {
        // å¹¸è¿ä¹‹æ˜Ÿ
        var curDay = parseInt(await bsg.methods.getCurDay().call())
        var dayLuckLength = parseInt(await bsg.methods.getDayLuckLength(curDay).call());
        var checkCount = 10;
        if (dayLuckLength < 10) {
            checkCount = dayLuckLength;
        }

        var luckUsers = [];
        var luckDeposits = [];
        for (var i = dayLuckLength; i > dayLuckLength - checkCount; i--) {
            var luckUser = (await bsg.methods.dayLuckUsers(curDay, i - 1).call());
            // luckUsers.push(luckUser);
            var luckDeposit = (parseInt(await bsg.methods.dayLuckUsersDeposit(curDay, i - 1).call()) / 1e18).toFixed(2);
            // luckDeposits.push(luckDeposit);

            $(".luckUser").eq(dayLuckLength - i).text(luckUser)
            $(".luckDeposit").eq(dayLuckLength - i).text(luckDeposit)
        }

        for (var i = 0; i < checkCount; i++) {
            var luckUser = (luckUsers[i]);
            $(".luckUser").eq(i).text(luckUser)
            $(".luckDeposit").eq(i).text(luckDeposits[i])
        }

        // Topæ¦œ
        for (var i = 0; i < 3; i++) {
            var dayTopUser = (await bsg.methods.dayTopUsers(curDay, i).call());
            if (dayTopUser != zeroAddr) {
                $(".dayTopUser").eq(i).text(dayTopUser);
            } else {
                break;
            }
        }
    }

    function getDate(timstamp) {
        var date = new Date(timstamp);
        var year = date.getFullYear();  // èŽ·å–å®Œæ•´çš„å¹´ä»½(4ä½,1970)
        var month = date.getMonth() + 1;  // èŽ·å–æœˆä»½(0-11,0ä»£è¡¨1æœˆ,ç”¨çš„æ—¶å€™è®°å¾—åŠ ä¸Š1)
        var day = date.getDate();  // èŽ·å–æ—¥(1-31)
        var hour = date.getHours();  // èŽ·å–å°æ—¶æ•°(0-23)
        var minute = date.getMinutes();  // èŽ·å–åˆ†é’Ÿæ•°(0-59)
        var second = date.getSeconds();  // èŽ·å–ç§’æ•°(0-59)
        var forMatDate = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
        return forMatDate
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

});