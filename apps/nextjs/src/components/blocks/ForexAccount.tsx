"use client";

import { BlockForexAccount, BlockForexAccountCardDescriptionTranslations, BlockForexCardDetails, DirectusFile } from "@/types/directus-schema";
import { setAttr } from "@directus/visual-editing";
import Headline from "../ui/Headline";
import Tagline from "../ui/Tagline";
import ForexAccountCard from "./ForexAccountCard";

interface ForexAccountCardType {
    action_href?: string | null;
    banner_alt_text?: string | null;
    banner_image?: string | DirectusFile | null;
    block_forex_acccount_id?: string | BlockForexAccount | null;
    date_created?: string | null;
    date_updated?: string | null;
    description: unknown[] | BlockForexAccountCardDescriptionTranslations[];
    detail: unknown[] | BlockForexCardDetails[];
    id: string;
    title?: string | null;
}


interface ForexAccountData {
    id: string;
    tagline?: string;
    headline?: string;
    cards: ForexAccountCardType[]
}

interface ForexAccountProps {
    data: ForexAccountData;
}


const ForexAccount = ({ data }: ForexAccountProps) => {
    
    const { id, tagline, headline, cards } = data;
    if (!cards || !Array.isArray(cards)) {
        return null;
    }
    const gridClasses = (() => {
        if (cards.length === 1) return "grid-cols-1";
        if (cards.length % 3 === 0)
            return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

        return "grid-cols-1 sm:grid-cols-2";
    })();
    return (
    <section>
      {tagline && (
        <Tagline
          tagline={tagline}
          data-directus={setAttr({
            collection: "block_pricing",
            item: id,
            fields: "tagline",
            mode: "popover",
          })}
        />
      )}
      {headline && (
        <Headline
          headline={headline}
          data-directus={setAttr({
            collection: "block_pricing",
            item: id,
            fields: "headline",
            mode: "popover",
          })}
        />
      )}
      <div
        className={`grid gap-6 mt-8 ${gridClasses}`}
        data-directus={setAttr({
          collection: "block_pricing",
          item: id,
          fields: ["pricing_cards"],
          mode: "modal",
        })}
      >
        {cards.map((card) => (
          <ForexAccountCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default ForexAccount;