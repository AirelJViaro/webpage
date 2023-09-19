import 'bootstrap/dist/css/bootstrap.min.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <html lang="en">
      <head>
        <title>Recent Watched Videos</title>
      </head>
      <body className="p-4">
        <h1>Recent Watched Videos</h1>
        {children}
      </body>
    </html>
  )
}