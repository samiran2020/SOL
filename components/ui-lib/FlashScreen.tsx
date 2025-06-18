import { useEffect, useState } from 'react';

interface FlashScreenData {
    title: string;
    subtitle: string;
    backgroundColor: string;
    textColor: string;
    logo: string;
    // image?: string;
    // video?: string;
    // mediaType: 'image' | 'video';
}

const FlashScreen = () => {
    const [flashData, setFlashData] = useState<FlashScreenData | null>(null);

    useEffect(() => {
        // Fetch the flash screen data from public/flashScreenData.json
        fetch('/flashscreen.json')
            .then((res) => res.json())
            .then((data) => setFlashData(data))
            .catch((err) => console.error('Error loading flash screen data:', err));
    }, []);

    if (!flashData) return null; // Return nothing until data is loaded

    return (
        <div
            className="flash-screen-body"
            style={{
                backgroundColor: flashData.backgroundColor,
                color: flashData.textColor,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {/* {flashData.logo && <img src={flashData.logo} alt="App Logo" className="flash-logo" />} */}
            <iframe src="https://lottie.host/embed/9356eb78-a7fe-4d67-8601-17ee1a20c8ca/kshQspxG1E.json"></iframe>

            {/* {flashData.mediaType === 'image' && flashData.image && (
                <img
                    src={flashData.image}
                    alt="Flash Screen"
                    style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
                />
            )}

            {flashData.mediaType === 'video' && flashData.video && (
                <video width="100%" height="auto" autoPlay muted loop style={{ marginBottom: '20px' }}>
                    <source src={flashData.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )} */}

            {/* <h1>{flashData.title}</h1>
            <p className="text-[#000]">{flashData.subtitle}</p> */}
        </div>
    );
};

export default FlashScreen;
