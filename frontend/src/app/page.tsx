import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <aside className="fixed top-0 left-0 z-10 flex flex-col items-start justify-start bg-white p-4 shadow-md w-[20%] h-full">
        <div className="flex items-center mb-2">
          <Image
            src="/vizual.svg"
            alt="ViZual Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-bold">ViZual</span>
        </div>
        <nav className="flex flex-col items-start justify-between w-full">
          <a href="/" className="text-gray-700 hover:text-blue-500 mb-2">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-500 mb-2">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-500 mb-2">
            Contact
          </a>
        </nav>
      </aside>
    </main>
  );
}
