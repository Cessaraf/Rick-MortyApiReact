import { Provider, useDispatch } from 'react-redux'
import Header from '../layout/header'
import { store } from '../store/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

   return (
            <Provider store={store}> 
               <Header></Header>
               <Component {...pageProps} />
            </Provider>
            )
}

export default MyApp
