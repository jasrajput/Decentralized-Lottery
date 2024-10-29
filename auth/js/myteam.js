var userAddr = "";
var updated = false;
var autoRefresh = 3000;


$(function() {
    setInterval(async() => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            if(!updated){
                updateTeamInfos();
            }
            setTimeout(function() {
                setInterval(async() => {
                    if (window.web3 !== 'undefined') {
                        userAddr = await getAccount();
                        updateTeamInfos();
                    }
                }, 500)
            }, autoRefresh)
        }
    }, autoRefresh);

    async function updateTeamInfos() {
        updated = true;
        var userInfo = await bsg.methods.userInfo(userAddr).call()
        var directDepositMax = parseInt(userInfo.totalDirectDeposit)/1e18;
        var totalDepositSelf = parseInt(userInfo.maxDeposit)/1e18;
        
        $(".directDeposit").text(directDepositMax.toFixed(2))
        $(".totalDepositSelf").text(totalDepositSelf.toFixed(2))
        
        
        
        var teamDeposit = await bsg.methods.getTeamDeposit(userAddr).call()
        var maxDirectDeposit = parseInt(teamDeposit[0])/1e18;
        var otherDirectDeposit = parseInt(teamDeposit[1])/1e18;
        var teamTotalDeposit = parseInt(teamDeposit[2])/1e18;
        $(".maxDirectDeposit").text(maxDirectDeposit.toFixed(2))
        $(".otherDirectDeposit").text(otherDirectDeposit.toFixed(2))
        $(".totalTeamDeposit").text(teamTotalDeposit.toFixed(2))
        // total invite
        var {teamNum} = await bsg.methods.userInfo(userAddr).call();
        $(".totalInvited").text(teamNum)
    }
});