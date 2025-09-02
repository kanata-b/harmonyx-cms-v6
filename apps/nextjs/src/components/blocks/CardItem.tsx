import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const cardItemVariants = cva(
  "w-full max-w-sm mx-auto",
  {
    variants: {
      variant: {
        default: "bg-white border border-gray-200 shadow-sm",
        outlined: "bg-white border-2 border-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CardItemProps extends VariantProps<typeof cardItemVariants> {
  // Header props
  headerTitle?: string;
  headerSubtitle?: string;
  
  // Logo props
  logoText?: string;
  logoBackgroundColor?: string;
  logoTextColor?: string;
  
  // Title props
  title?: string;
  titleHighlight?: string; // The part with underline
  titleUnderlineColor?: string;
  
  // Content props
  description?: string;
  additionalText?: string;
  
  // Button props
  buttonText?: string;
  buttonBackgroundColor?: string;
  buttonHoverColor?: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  
  className?: string;
}

const CardItem: React.FC<CardItemProps> = ({
  // Header defaults
  headerTitle = "GOFX",
  headerSubtitle = "Broker",
  
  // Logo defaults
  logoText = "G",
  logoBackgroundColor = "bg-red-600",
  logoTextColor = "text-white",
  
  // Title defaults
  title = "Broker",
  titleHighlight = "GOFX",
  titleUnderlineColor = "bg-red-600",
  
  // Content defaults
  description = "GOFX IS A Trusted Forex Broker WHO ALWAYS DELIVERS The Best Trading Experience For Our Customers, A Wide Range of Financial, Investment Opportunities",
  additionalText = "Under The Best Trading Conditions for Our Traders",
  
  // Button defaults
  buttonText = "Contact us",
  buttonBackgroundColor = "bg-red-600",
  buttonHoverColor = "hover:bg-red-700",
  onButtonClick,
  buttonHref,
  
  variant,
  className,
}) => {
  const handleButtonClick = () => {
    if (buttonHref) {
      window.open(buttonHref, '_blank');
    } else if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <Card className={cn(cardItemVariants({ variant }), className)}>
      {/* Header with dynamic text */}
      <CardHeader className="relative pb-0 pt-4 px-6">  
        {/* <div className="absolute top-4 right-6 text-sm font-medium text-gray-700">
          {headerTitle}
          <div className="text-xs text-gray-500 -mt-0.5">{headerSubtitle}</div>
        </div> */}
        
        {/* Dynamic logo */}
        {/* <div className="flex justify-start mb-4">
          <div className={`w-16 h-16 ${logoBackgroundColor} rounded-full flex items-center justify-center`}>
            <span className={`${logoTextColor} text-2xl font-bold`}>{logoText}</span>
          </div>
        </div> */}
        <Image 
         src="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
         alt="GOFX Logo"
         width={300}
         height={164}
        />

      </CardHeader>

      {/* Content */}
      <CardContent className="px-6 pb-0">
        {/* Dynamic title with customizable underline */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            <span className="relative">
              {titleHighlight}
              <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${titleUnderlineColor}`}></div>
            </span>
            <span className="ml-2">{title}</span>
          </h3>
        </div>

        {/* Dynamic description */}
        <div className="space-y-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
          {additionalText && (
            <p className="text-sm text-gray-600 leading-relaxed">
              {additionalText}
            </p>
          )}
        </div>
      </CardContent>

      {/* Footer with dynamic button */}
      <CardFooter className="px-6 pt-6 pb-6">
        <Button
          onClick={handleButtonClick}
          className={`w-full ${buttonBackgroundColor} ${buttonHoverColor} text-white font-medium py-3 px-6 rounded-md transition-colors`}
          size="lg"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
