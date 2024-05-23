import TronWeb from 'tronweb';

const tronWeb = new TronWeb({
    fullHost: "https://api.shasta.trongrid.io",
    // headers: { "TRON-PRO-API-KEY": AppKey },
    privateKey: "fbc9166bad0fade5a4e2ae438521f38719ca36974b71deadb2fb5cd4748a725a",
});

const options = {
    feeLimit: 10000000,
    callValue: 0
};

const tx = await tronWeb.transactionBuilder.triggerSmartContract(
    "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs", 'transfer(address,uint256)', options, // Contract Address
    [{
        type: 'address',
        value: "TMknEhd2ASboQ1LCFZfvJTufSLHEL9S5xW" // Receiver Address
    }, {
        type: 'uint256',
        value: 1 * 1000000
    }],
    tronWeb.address.toHex("TULivK5zBnouAaKyt9hxTHJQspPHNpVoKV") // Sender Address 
);

const signedTx = await tronWeb.trx.sign(tx.transaction);
const broadcastTx = await tronWeb.trx.sendRawTransaction(signedTx);

console.log(signedTx);
console.log(broadcastTx);