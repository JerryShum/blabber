import BlurbCarousel from "@/components/blurbs/BlurbCarousel";
import ExploreBlurbs from "@/components/blurbs/ExploreBlurbs";

//! Page for exploring all the different articles and topics
export default function ExplorePage() {
  const sampleBlurb = {
    id: 27,
    description:
      "short descriptionTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest",
    content:
      "**Use markdown for the main content of your blurb!**testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest",
    authorId: "cm5h1fvam0000ui4cnslmlao7",
    createdAt: new Date("2025-01-27T22:28:56.779Z"),
    image:
      "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "TestTestTestTestTest",
    estimatedRead: "1",
    views: 0,
    author: {
      name: "Jerry Shum",
      id: "authorId",
      image: "https://avatars.githubusercontent.com/u/30613366?v=4",
      email: "jerryshum2636@gmail.com",
      emailVerified: null,
    },
  };

  const blurbArray = [
    sampleBlurb,
    sampleBlurb,
    sampleBlurb,
    sampleBlurb,
    sampleBlurb,
    sampleBlurb,
  ];

  return (
    <div className="mt-10">
      <div className="flex flex-col font-josefin">
        <h1 className="text-4xl font-semibold text-primary">Explore</h1>
        <p className="text-2xl text-muted-foreground">
          Dive into the world of Blurbs - trending, fresh, and just for you!
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-10 border-t pt-10">
        <ExploreBlurbs
          blurbs={blurbArray}
          title="Trending Blurbs:"
          description="Hot off the digital press – trending blurbs to explore."
        />
        <ExploreBlurbs
          blurbs={blurbArray}
          title="Explore"
          description="sigma"
        />
      </div>
    </div>
  );
}
