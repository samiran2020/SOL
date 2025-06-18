
import '@/styles/globals.css';
import '@/styles/layout/layout.scss';
import Layout from '@/Layout/Layout';

import { Poppins } from 'next/font/google';

const popp = Poppins({
    display: 'swap',
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});



function App({ Component, pageProps }:any) {


    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
