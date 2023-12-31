import React, { useState, useEffect, useMemo } from 'react';

const CallToAction = () => {
    const [countdown, setCountdown] = useState(calculateCountdown());

    function calculateCountdown() {
        const now = new Date();
        const targetTime = new Date(now);
        targetTime.setHours(24, 0, 0, 0);

        const timeDiff = targetTime - now;
        return Math.max(0, Math.floor(timeDiff / 1000));
    }

    const formatTime = useMemo(() => (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const openWhatsApp = () => {
        window.open("https://api.whatsapp.com/send?phone=6282118668919&text=Halo%20admin%20mirland%2C%20", "_blank", "noopener,noreferrer");
    };

    return (
        <section className="bg-indigo-600 py-16 text-white text-center">
            <div className="container mx-auto" data-aos="fade-up">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6 lg:w-7/12 lg:mx-auto">Mempunyai Website profesional merupakan investasi jangka panjang.</h2>
                <div className="text-4xl font-bold mb-6">{formatTime(countdown)}</div>
                <button
                    onClick={openWhatsApp}
                    className="bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-gray-400 hover:text-white font-medium transition-all duration-200"
                >
                    Dapatkan Penawaran Sekarang
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
