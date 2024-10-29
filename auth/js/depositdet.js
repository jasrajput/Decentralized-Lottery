var userAddr = "";
var updated = false;


    
    
$(function () {
    setInterval(async () => {
        if (window.web3 !== 'undefined') {
            userAddr = await getAccount();
            if (!updated) {
                await updateOrders()
            }
            setTimeout(function () {
                setInterval(async () => {
                    if (window.web3 !== 'undefined') {
                        userAddr = await getAccount();
                    }
                }, 1000)
            }, autoRefresh)
        }
    }, autoRefresh);

    async function updateOrders() {
        updated = true
        var cycle_percent = [18, 18, 18, 17, 17, 17, 16, 16,  16,  15,  15,  15,  14,  14,  14,  13,  13,  13,  12,  12, 12, 11, 11, 11, 10, 10, 10, 9, 9, 9, 8, 8, 8, 7, 7, 7, 6, 6, 6, 5];
        var userInfo = await bsg.methods.userInfo(userAddr).call();
        
        var length = parseInt(await bsg.methods.getOrderLength(userAddr).call())
        for (i = length - 1; i >= 0; i--) {
            var { amount, start, unfreeze, isUnfreezed } = await bsg.methods.orderInfos(userAddr, i).call();
            if (!isUnfreezed) {
                var depositHtml = "<tr>"
                var startTS = parseInt(start) * 1000;


                var dAmt = await amount / 1e18;
                depositHtml = depositHtml + "<td><span class='DepC2 DepCZ1'>$" + dAmt + "</span></td>"

                var startDate = getDate(startTS);
                depositHtml = depositHtml + "<td><span class='DepC3'>" + startDate + "</span></td>"

                var unfreezeTS = parseInt(unfreeze) * 1000;
                var unfreezeDate = getDate(unfreezeTS);
                depositHtml = depositHtml + "<td><span class='DepC4'>" + unfreezeDate + "</span></td>"

                // var income = await web3.utils.fromWei(String(parseInt(amount) * cycle_percent[userInfo.cycle] / 100));
                
                var income = await (String(parseInt(amount) * cycle_percent[userInfo.cycle] / 100)) / 1e18;
                
                
                depositHtml = depositHtml + "<td><span class='DepC4 DepCZ2'>$" + income + "</span></td>"

                var date = new Date();
                var timeNow = date.getTime()
                var status;
                var className = '';
                if (timeNow < unfreezeTS) {
                    if (lang == "cn") {
                        status = "æœªè§£å†»"
                    } else {
                        status = "Freezing"
                    }
                    className = 'DepC1'
                } else {
                    if (isUnfreezed) {
                        if (lang == "cn") {
                            status = "å·²å®Œæˆ"
                        } else {
                            status = "Completed"
                        }
                        className = 'DepC6'

                    } else {
                        if (lang == "cn") {
                            status = "å¾…å…³è”"
                        } else {
                            status = "Unbonded"
                        }
                        className = 'DepC3'
                    }
                }
                depositHtml = depositHtml + "<td><span class='" + className + "'>" + status + "</span></td>"
                depositHtml = depositHtml + "</tr>"
                $(".DepTab").append(depositHtml)
                await sleep(waitTime);
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