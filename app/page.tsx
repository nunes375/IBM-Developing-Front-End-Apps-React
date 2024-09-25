import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-opacity-50 bg-black p-8">
        <h1 className="text-white text-5xl font-bold mb-4 text-center">
          Welcome To <br /> Evergreen Garden
        </h1>
        <div className="w-16 h-1 bg-green-500 mb-6"></div>
        <p className="text-white text-xl mb-6 text-center">
          Where Nature Meets Tranquility
        </p>
        <Link href="/products">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Explore Now
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center text-white p-8 bg-opacity-50 bg-black">
        <h2 className="text-3xl font-bold mb-4">
          Discover the Serenity of Evergreen Garden!
        </h2>
        <p className="text-lg mb-4">
          At Evergreen Garden, we strive to bring the beauty of nature closer to
          your home. Our curated collection offers an array of vibrant plants
          designed to enrich your space and promote well-being. Whether you're
          looking for indoor plants or fragrant flowers, we have it all.
        </p>
        <p className="text-lg mb-4">
          Our experts ensure each plant meets the highest standards. No matter
          your gardening experience, we’re here to guide you through every
          step. Let us help you find the perfect greenery for your home.
        </p>
        <p className="text-lg">
          Visit Evergreen Garden today, and bring nature into your life.
        </p>
      </div>
    </div>
  );
}