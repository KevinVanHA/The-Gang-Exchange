"use client";

import { Token } from "@/components/token-page/TokenPage";

export default async function ListingPage({
  params,
}: { params: any }) {
  const { tokenId } = params;
  if (!tokenId) {
    throw new Error("Missing listingId");
  }
  return <Token tokenId={BigInt(tokenId)} />;
}
