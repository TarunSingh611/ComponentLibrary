// src/app/layout.tsx
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* You can place meta tags, title, etc. here */}
            </head>
            <body className="flex flex-col min-h-screen">
                <Header /> {/* Header stays at the top */}
                <main className="flex-grow">
                    {children}
                </main>
                <Footer/> {/* Footer stays at the bottom */}
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </body>
        </html>
    );
}
