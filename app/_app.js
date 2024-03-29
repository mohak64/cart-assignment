
import dynamic from 'next/dynamic';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default dynamic(() => import('@/components/Confirmation'), { ssr: false });
