import { nftDrop } from '../../utils/nftDrop'
import { useClaimedNFTs, useContract, useTotalCount, useClaimConditions } from '@thirdweb-dev/react';

export default async function handler(req, res) {
    const { contract } = useContract("0xb896d6CF02939Ea3b209866450598C89954005Fd");
    const { data: claimedNFTs } = useClaimedNFTs(contract, { start: 0, count: 100 });
    console.log(claimedNFTs)
    const { data: count } = useTotalCount(contract);
    const { data: claimConditions } = useClaimConditions(contract);

    const claimedSupply = claimedNFTs.length
    const totalSupply = count.toNumber()
    const nftPrice = claimConditions[0].currencyMetadata.displayValue
    const claimPhases = claimConditions.map((condition) => ({
        startTime: condition.startTime.getTime(),
    }))

    res.status(200).json({
        claimedSupply,
        totalSupply,
        nftPrice,
        claimPhases,
    })
}
