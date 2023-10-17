import React, { useState, useEffect } from 'react';

const CallToAction = () => {
    const [countdown, setCountdown] = useState(calculateCountdown()); // Menghitung selisih waktu hingga jam 11 malam

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown());
        }, 1000); // 1 detik

        return () => clearInterval(interval);
    }, []);

    // Fungsi untuk menghitung selisih waktu hingga jam 11 malam hari ini
    function calculateCountdown() {
        const now = new Date();
        const targetTime = new Date(now);
        targetTime.setHours(23, 0, 0, 0); // Set jam 11 malam

        const timeDiff = targetTime - now;
        return Math.max(0, Math.floor(timeDiff / 1000));
    }

    // Fungsi untuk mengonversi detik menjadi format jam, menit, detik
    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <section className="bg-indigo-600 py-16 text-white text-center">
            <div className="container mx-auto">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-6 lg:w-8/12 lg:mx-auto">Mempunyai Website yang profesional Merupakan Investasi Jangka Panjang.</h2>
                <p className="text-base lg:text-lg mb-6 w-10/12 mx-auto">Sudah Saatnya Bisnis Anda Berkembang Lebih Jauh, Ambil Penawaran Sekarang!</p>
                <div className="text-4xl font-bold mb-6">{formatTime(countdown)}</div>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-white font-medium transition-all duration-200">Dapatkan Penawaran Sekarang</button>
            </div>
        </section>
    );
};

export default CallToAction;
