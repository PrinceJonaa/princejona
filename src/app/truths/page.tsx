import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import TruthsContent from "@/components/truths/TruthsContent";
import { buildPageMetadata, getWebPageJsonLd } from "@/lib/seo";

const truthsDescription =
  "Explore Prince Jona's core truths on identity, presence, and revealed understanding.";

export const metadata: Metadata = buildPageMetadata({
  title: "Core Truths",
  description: truthsDescription,
  path: "/truths",
});

export default function TruthsPage() {
  return (
    <>
      <JsonLd
        data={getWebPageJsonLd({
          title: "Prince Jona Core Truths",
          description: truthsDescription,
          path: "/truths",
          pageType: "CollectionPage",
        })}
      />
      <TruthsContent />
    </>
  );
}
