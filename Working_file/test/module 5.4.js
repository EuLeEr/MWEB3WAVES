const AccountASeed = "tomato valid border tuition parrot throw snack menu increase leg horror output tail enemy lucky"
const AccountBAddress = "3N7PG73qejLG9GZMycZq6FBosPiR6v9UE7M"

let AccountBSeed = "mandate stay physical hero grow angry error asthma six tiger dragon logic scout family where"

it('exchange transaction from smart account B with blocked transaction to account A ( )', async function() {
   let tx = await broadcast(exchange({amount: 100000000, recipient: address(AccountASeed)}, AccountBSeed))
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx));
 })

it(" exchange transaction ", async function() {
    let ts = exchange({

        call:{
            function:"withdraw",
            args:[
                {type:"integer",value: 11}

            ]},
            payment:[]
    }, seed)

    let tx= await broadcast(ts)
    await waitForTx(tx.id)
    console.log("tx/token id " + tx.id);
     
} )
let seed = "draft design like fluid grass gossip reform excite gadget mandate airport exhaust"
it("custom script token ", async function() {
    const tokenParamsCustomCurrency = {
        name: "Coupon bearch",
        quantity: 100,
        decimals: 0 ,
        reissuable: true,
        descpition: " Only exchange token ",
        script:  `match tx {
    case ex: ExchangeTransaction => true
     
    case _ => false
}`
    };
    const signedIssueTx = issue( tokenParamsCustomCurrency, seed);
    let tx= await broadcast(signedIssueTx)
    await waitForTx(tx.id)
    console.log("tx/token id " + tx.id);
 
     
} )

//exchange
//exchange(tx: IExchangeTransaction, seed?: TSeedTypes): IExchangeTransaction & WithId
//Defined in transactions/exchange.ts:8
//Parameters
//tx: IExchangeTransaction
//Optional seed: TSeedTypes
//Returns IExchangeTransaction & WithId