import 'styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

export default function App({ Component, pageProps }) {
  return  (
    <ThirdwebProvider
        desiredChainId={ChainId.Goerli}
        chainRpc={{
            [ChainId.Goerli]: 'https://eth-goerli.g.alchemy.com/v2/demo',
        }}
    >
        <Component {...pageProps} />
    </ThirdwebProvider>
)
}