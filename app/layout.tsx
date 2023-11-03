import Footer from '@_components/Footer'
import Navbar from '@_components/Navbar'
import Search from '@_components/Search'
import ScrollToTopButton from '@_atoms/ScrollToTopButton'

export const metadata = {
  title: 'Moviemanic - Search for movies and tv shows, and watch trailers',
  description:
    ' Discover a comprehensive collection of movie and TV show information, trailers, and related shows on our website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-full bg-[image:radial-gradient(100%_225%_at_100%_0%,_rgb(var(--main-theme-color))_0%,_rgb(var(--dark-theme-color))_100%)]">
        <Navbar />
        <Search />
        {children}
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
