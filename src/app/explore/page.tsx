import ExploreBlurbs from "@/components/blurbs/ExploreBlurbs";
import { getExploreBlurbs } from "@/lib/queries/getBlurbs";

//! Revalidate every 12 hours
export const revalidate = 43200;

//! Page for exploring all the different articles and topics
export default async function ExplorePage() {
  const { newestBlurbs, trendingBlurbs, featuredBlurbs } =
    await getExploreBlurbs();

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
          blurbs={trendingBlurbs}
          title="Trending Blurbs:"
          description="Hot off the digital press &mdash; trending blurbs to explore."
        />
        <ExploreBlurbs
          blurbs={newestBlurbs}
          title="Newest Blurbs:"
          description="Fresh content, fresh perspectives &mdash; right from the source."
        />
        <ExploreBlurbs
          blurbs={featuredBlurbs}
          title="Featured / Editor's Picks"
          description="Handpicked highlights: the best of the best."
          isLastChild={true}
        />
      </div>
    </div>
  );
}
