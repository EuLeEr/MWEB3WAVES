it('verify by oracle', async function(){
    let ts = invokeScript({
        dApp: "3Mq9BhPGh7o6oY6Y7jpmuva3tavY1NuViMz",
        call:{
            function:"setstatus",
            args: [
                {type: "string", value: "3MsEQiFVFQndMBpXsLqB2dUpo18R8eLRBJg"},
                {type: "string", value: "verified"},
            ]},
            payment: []
        }, "alley purpose develop bunker there tired shift leg cushion town reduce tomato laugh spider rebuild")
        // - "draft design like fluid grass gossip reform excite gadget mandate airport exhaust")
     let tx = await broadcast(ts)
     await waitForTx(tx.id)   
    })
