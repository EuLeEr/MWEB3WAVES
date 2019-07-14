let datajson = {
    "title": "pants with warm !",
    "coupon_price": 50000000,
    "old_price":    1000000000,
    "new_price":    50000000,
    "address":      "Universe",
    "description":  "I want you to make don't cold",
    "image":        "https://clck.ru/H2zP2" 
}
it('add item', async function() {
    let ts = invokeScript({
        dApp: "3N1z8KGQJcgVnRuo9AaFMgvm57Go4cLVBaK",
            call:{
                function: "addItem",
                args: [
                    {type:"string", value:datajson.title },
                    {type:"integer",value:datajson.coupon_price },
                    {type:"string", value: JSON.stringify(datajson)}
                ]},
                payment: []
            }, "draft design like fluid grass gossip reform excite gadget mandate airport exhaust")
            let tx = await broadcast(ts)
            await waitForTx(tx.id)
    })

