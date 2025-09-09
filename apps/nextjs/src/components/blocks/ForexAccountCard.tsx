"use client";

import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { BlockForexAccountCardDescriptionTranslations, BlockForexCardDetailItems, DirectusFile } from '@/types/directus-schema';
import { useLocale } from 'next-intl';

const forexAccountCardVariants = cva(
  "w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200 shadow-sm hover:border-red-300",
        outlined: "bg-white border-2 border-gray-300 hover:border-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const buttonBackgroundColor = "bg-red-600"
const buttonHoverColor = "hover:bg-red-700"
const buttonText = "Open an Account"

export interface ForexAccountCardProps extends VariantProps<typeof forexAccountCardVariants> {

  card: {
    //Banner Image
    banner_alt_text?: string | null;
    banner_image?: string | DirectusFile | null;

    // Title props
    title?: string | null;

    // Content props
    description?: unknown[] | BlockForexAccountCardDescriptionTranslations[];
    details?: BlockForexCardDetailItems[];

    // Button props
    action_href?: string | null;
  }

  className?: string;
}

const ForexAccountCard: React.FC<ForexAccountCardProps> = ({
  card ,
  variant,
  className,
}) => {
  const handleButtonClick = () => {
    if (card.action_href) {
      window.open(card.action_href, '_blank');
    }
  };

  const locale = useLocale(); 

  const bannerImage = card.banner_image && typeof card.banner_image === 'object' && 'url' in card.banner_image ? card.banner_image.url : '';
  const description = card.description && Array.isArray(card.description)
    ? (card.description as BlockForexAccountCardDescriptionTranslations[])
       .find(desc => desc?.languages_code === locale)?.description || ''
    : '';

  return (
    <Card className={cn(forexAccountCardVariants({ variant }), className)}>
      {/* Header with banner image*/}
      <CardHeader className="relative pb-0 pt-4 px-6 overflow-hidden">
        <div>
          <Image
            src={bannerImage as string}
            alt={card.banner_alt_text || '' as string}
            width={660}
            height={310}
            className="rounded-lg"
          />
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="px-6 pb-0">
        {/* Dynamic title with customizable underline */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {/* <span className="relative group"> */}
              {/* {titleHighlight}
              <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${titleUnderlineColor} transition-all duration-300 group-hover:h-1`}></div>
            </span> */}
            <span className="ml-2">{card.title}</span>
          </h3>
        </div>

        {/* Dynamic description */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
          <hr className="my-2 border-t border-gray-200" />
          <div className="grid grid-cols-2 gap-4 text-sm">
            {/* Left Column */}
            {/* <div className="space-y-10">
              <div>
                <div className="text-gray-600 text-xs mb-1">Initial Deposit</div>
                <div className="font-medium text-gray-900">$ {initialDeposit}</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs mb-1">Order Quantity</div>
                <div className="font-medium text-gray-900">{orderQuantity}</div>
              </div>
            </div> */}

            {/* Right Column */}
            {/* <div className="space-y-10">
              <div>
                <div className="text-gray-600 text-xs mb-1">Spread</div>
                <div className="font-medium text-gray-900">{spread}</div>
              </div>
              <div>
                <div className="text-gray-600 text-xs mb-1">Leverage</div>
                <div className="font-medium text-red-600">{leverage}</div>
              </div>
            </div>
          </div> */}
        </div>
        </div>
      </CardContent>

      {/* Footer with dynamic button */}
      <CardFooter className="px-6 pt-6 pb-6">
        <Button
          onClick={handleButtonClick}
          className={`w-full ${buttonBackgroundColor} ${buttonHoverColor} text-white font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-md`}
          size="lg"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ForexAccountCard;
