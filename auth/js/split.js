var bsgAddr = "0x95605819B3BA843c0eC2A7612f19f403E03DB235";
var usdtAddr = "0xe11a86849d99f524cac3e7a0ec1241828e332c62";

var userAddr = "";
var bsg;
var usdt;
var splitAmt = 0;

$(function() {
    setInterval(async() => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
            usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
            splitAmt = (parseInt(await bsg.methods.getCurSplit(userAddr).call())/1e18)
            $(".freezingAmt").val(splitAmt.toFixed(2))
            var {totalDeposit} = await bsg.methods.userInfo(userAddr).call();
            totalDeposit = parseInt(totalDeposit);
            if(totalDeposit > 0){
                $(".dMention").css({"display":"none"})
                $(".depositFreezing").css({"background":"#17181c66"})
            }else{
                $(".tMention").css({"display":"none"})
                $(".transferFreezing").css({"background":"#17181c66"})
            }
        }
    }, 1000);
})

$(".depositFreezing").on("click", async function() {
    var tAmount = $(".tAmount").val();
    if(tAmount >= 50 && tAmount <= 2000 && tAmount % 50 == 0 && tAmount <= splitAmt){
        await bsg.methods.depositBySplit(await (tAmount * 1e18)).send({ from: userAddr });
    }
})

// é€šè¿‡æ‹†åˆ†è´¦æˆ·è½¬è´¦
$(".transferFreezing").on("click", async function() {
    var tAmount = $(".tAmount").val();
    var receiver = $(".receiver").val();
    if(web3.utils.isAddress(receiver)){
        if(tAmount >= 50 && tAmount <= 2000 && tAmount % 50 == 0 && tAmount <= splitAmt){
            await bsg.methods.transferBySplit(receiver, await (tAmount * 1e18)).send({ from: userAddr });
        }
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}