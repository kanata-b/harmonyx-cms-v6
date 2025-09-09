"use client";

import RichText from "@/components/blocks/RichText";
import Hero from "@/components/blocks/Hero";
import Gallery from "@/components/blocks/Gallery";
import Pricing from "@/components/blocks/Pricing";
import Posts from "@/components/blocks/Posts";
import Form from "@/components/blocks/Form";
import ForexAccount from "./ForexAccount";

interface BaseBlockProps {
  block: {
    collection: string;
    item: unknown;
    id: string;
  };
}

const BaseBlock = ({ block }: BaseBlockProps) => {
  const components: Record<string, React.ElementType> = {
    block_hero: Hero,
    block_richtext: RichText,
    block_gallery: Gallery,
    block_pricing: Pricing,
    block_posts: Posts,
    block_form: Form,
    block_forex_account: ForexAccount,
  };

  const Component = components[block.collection];

  if (!Component) {
    return null;
  }
  const itemId = (block.item as { id: string }).id;
  console.log("Rendering block:", block.collection, "with item ID:", itemId);
  return <Component data={block.item} blockId={block.id} itemId={itemId} />;
};

export default BaseBlock;
