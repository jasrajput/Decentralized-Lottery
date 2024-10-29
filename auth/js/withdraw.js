var bsgAddr = "0x95605819B3BA843c0eC2A7612f19f403E03DB235";
var usdtAddr = "0xe11a86849d99f524cac3e7a0ec1241828e332c62";

var userAddr = "";
var bsg;
var usdt;

$(function () {
    setInterval(async () => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
            usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
            await updateRewardInfo();
        }
    }, 1000);
})

$(".withdrawBut").on("click", async function () {
    try {
        await bsg.methods.withdraw().send({ from: userAddr });
        await sleep(autoRefresh).then(async function () {
            location.reload()
        })
    } catch (err) {
        console.log("err: ", err.message)
    }

})




async function updateRewardInfo() {
    var {capitals, statics, directs, match_bonus, star, luck} = await bsg.methods.rewardInfo(userAddr).call();
    
    var capital = parseFloat(capitals / 1e18)
    $(".unfreezed").text(capital.toFixed(2));

    var staticWithdrawable = parseFloat( statics / 1e18) * 0.70
    $(".staticReward").text(staticWithdrawable.toFixed(2))

    var directReward = parseFloat( directs / 1e18) * 0.70
    $(".directReward").text(directReward.toFixed(2))
    
    var matchBonus = parseFloat( match_bonus / 1e18) * 0.70
    $(".matchBonus").text(matchBonus.toFixed(2))

    // var level4Reward = parseFloat( level4Released / 1e18) * 0.70
    // $(".level4Reward").text(level4Reward.toFixed(2))

    // var level5Left = parseFloat( level5Left / 1e18) * 0.70
    // $(".level4Reward").text(level5Left.toFixed(2))

    // var level5Freezed = parseFloat( level5Freezed / 1e18) * 0.70
    // $(".level5Freezed").text(level5Freezed.toFixed(2))

    // var level5Reward = parseFloat( level5Released / 1e18) * 0.70
    // $(".level5Reward").text(level5Reward.toFixed(2))

    var starReward = parseFloat(star / 1e18) * 0.70
    $(".starReward").text(starReward.toFixed(2))

    var luckReward = parseFloat(luck / 1e18) * 0.70
    $(".luckReward").text(luckReward.toFixed(2))

    // var topReward = parseFloat((top) / 1e18) * 0.70
    // $(".topReward").text(topReward.toFixed(2))

    var totalReward = capital+staticWithdrawable+directReward+matchBonus+starReward+luckReward;
    $(".totalReward").text(totalReward.toFixed(2))
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}