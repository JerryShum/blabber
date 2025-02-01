//! Page for exploring all the different articles and topics
export default function ExplorePage() {
  return (
    <div className="mt-10">
      <div className="flex flex-col font-josefin">
        <h1 className="mt-10 text-3xl font-semibold text-primary">Explore</h1>
        <p className="text-lg text-muted-foreground">
          Dive into the world of Blurbs - trending, fresh, and just for you!
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-josefin text-2xl text-primary underline">
          Trending Blurbs:
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Trending articles go here */}
        </div>
      </div>
    </div>
  );
}
