

let seedX = "draft design like fluid grass gossip reform excite gadget mandate airport exhaust"

it("issue coupon smart token ", async function() {
    const tokenParamsCustomCurrency = {
        name: "my  coupon",
        quantity: 100,
        decimals: 0 ,
        reissuable: true,
        descpition: " Only  token for Coupon-Bazaar ",
        script: compile(file('coupon-token.ride'))
    };
    const signedIssueTx = issue( tokenParamsCustomCurrency, seedX);
    let tx= await broadcast(signedIssueTx)
    await waitForTx(tx.id)
    console.log("tx/token id : " + tx.id);
 
     
} 
)