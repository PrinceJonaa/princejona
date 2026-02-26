import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import StoryContent from "@/components/story/StoryContent";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";

const storyDescription =
  "Read the story of Prince Jona across The Call, The Conflict, The Revelation, and The Mission.";

export const metadata: Metadata = buildPageMetadata({
  title: "Story",
  description: storyDescription,
  path: "/story",
});

export default function StoryPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          title: "Prince Jona Story",
          description: storyDescription,
          path: "/story",
          pageType: "AboutPage",
        })}
      />
      <StoryContent />
    </>
  );
}
