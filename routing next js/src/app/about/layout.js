import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutLayout({ children }) {
  return (
    <>
      <main className="min-h-screen">
        {children}
        <p className="text-center mt-4 text-gray-500">I am nested layout and I am only visible on the About page.</p>
      </main>
      <Footer />
    </>
  );
}
