var bsgAddr = "0x95605819B3BA843c0eC2A7612f19f403E03DB235";
var usdtAddr = "0xe11a86849d99f524cac3e7a0ec1241828e332c62";


var userAddr = "";
var bsg;
var usdt;
var input;
var inputOk = false;
var userMaxDeposit = 0;
var user_cycle = 0;

$(function() {
    setInterval(async() => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            bsg = new web3.eth.Contract(bsg_abi, bsgAddr);
            usdt = new web3.eth.Contract(erc20_abi, usdtAddr);
            var {maxDeposit} = await bsg.methods.userInfo(userAddr).call();
            userMaxDeposit = parseInt(maxDeposit)/1e18

            let usdtBal = parseInt(await usdt.methods.balanceOf(userAddr).call())/1e18;
            $(".usdtBal").val(usdtBal.toFixed(2))
            
            await userInfoShow();
            
        }
    }, 1000);
})


var cycle_percent = [18, 18, 18, 17, 17, 17, 16, 16,  16,  15,  15,  15,  14,  14,  14,  13,  13,  13,  12,  12, 12, 11, 11, 11, 10, 10, 10, 9, 9, 9, 8, 8, 8, 7, 7, 7, 6, 6, 6, 5];

async function userInfoShow() {
    var userInfo = await bsg.methods.userInfo(userAddr).call();
    let percent = cycle_percent[userInfo.cycle];
    user_cycle = cycle_percent[userInfo.cycle];
    $(".percent").text(percent);
}


$(function() {
    setTimeout(function(){ 
        // let inputAmount = 1;
        // var total = parseFloat(inputAmount * 25 / 100) + parseFloat(inputAmount);
        // $(".total").text(total.toFixed(2));
        let inputAmount = 50;
        var total = parseFloat(inputAmount * user_cycle / 100) + parseFloat(inputAmount);
        $(".total").text(total.toFixed(2));
    }, 2000);
})

$(".inputAmount").on("input", async function(){
    var inputAmount = $(".inputAmount").val();
    input = parseInt(inputAmount);
    if(!input){
        input = 0;
    }
    $(".depositAmount").text(input);
    var total = parseFloat(input * user_cycle / 100) + parseFloat(input);
    // var total = parseFloat(input * 25 / 100) + parseFloat(input);
    $(".total").text(total.toFixed(2));
    if(input % 1 == 0 && input >= 1 && input >= userMaxDeposit){
        if(input <= 2000){
            inputOk = true;
        }else{
            inputOk = false;
        }
    }else{
        inputOk = false;
    }
    if(inputOk){
        $(".depositBut").css({"background":"#3E6FFB"});
    }else{
        $(".depositBut").css({"background":"gray"});
        $(".depositBut").css({"border":"1px solid gray"});
    }
})

$(".depositBut").on("click", async function(){
    if(inputOk){
        var amount = $(".inputAmount").val();
        var isAppr = await isApprove(bsgAddr);
        if(isAppr){
            await bsg.methods.deposit(String(amount * 1e18)).send({ from: userAddr });
            await sleep(autoRefresh).then(async function(){
                location.reload()
            })
        }else{
            setApprove(bsgAddr).then(async function(){
                await bsg.methods.deposit(String(amount * 1e18)).send({ from: userAddr });
                await sleep(autoRefresh).then(async function(){
                    location.reload()
                })
            })
        }
    }
})

async function isApprove(to) {
    let res = await usdt.methods.allowance(userAddr, to).call();
    var allowanceAmount = parseFloat(res);
    if(allowanceAmount >= 500e18) {
        return true;
    }else{
        return false;
    }
}

async function setApprove(to) {
    var amount = $(".inputAmount").val();
    await usdt.methods.approve(to, String(amount * 1e18) ).send({ from: userAddr });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}