import { ThirdwebSDK } from '@thirdweb-dev/sdk'

const sdk = new ThirdwebSDK('goerli')
const nftDrop = sdk.getContract(process.env.NEXT_PUBLIC_NFT_DROP_ADDRESS, "nft-drop")

export { nftDrop }
