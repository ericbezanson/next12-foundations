export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ background: '#222', color: '#fff' }}>
                {children}
            </body>
        </html>

    )
}