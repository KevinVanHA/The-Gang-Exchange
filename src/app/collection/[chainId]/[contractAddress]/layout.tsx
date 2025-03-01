import MarketplaceProvider from "@/hooks/useMarketplaceContext";
import type { ReactNode } from "react";
import React from 'react';

interface MarketplaceLayoutProps {
  params: {
    chainId: string;
    contractAddress: string;
  };
  children: ReactNode;
}

const MarketplaceLayout: React.FC<MarketplaceLayoutProps> = async ({
  children,
  params,
}) => {
  const awaitedParams = await params;
  return (
    <MarketplaceProvider
      chainId={awaitedParams.chainId}
      contractAddress={awaitedParams.contractAddress}
    >
      {children}
    </MarketplaceProvider>
  );
};

export default MarketplaceLayout;
