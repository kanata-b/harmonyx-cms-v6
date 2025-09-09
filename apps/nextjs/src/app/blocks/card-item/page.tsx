"use client";

import ForexAccountCard from '@/components/blocks/ForexAccountCard';
import NoSSR from '@/components/shared/NoSSR';

export default function CardItemPage() {
  return (
    <NoSSR>
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CardItem Component</h1>
          <p className="text-lg text-gray-600">Interactive examples demonstrating the CardItem component with various configurations</p>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Default Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Default GOFX Design</h2>
          <p className="text-gray-600 mb-8">The original GOFX Broker card design with 90% accuracy</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ForexAccountCard card={{
              banner_alt_text: undefined,
              banner_image: undefined,
              title: undefined,
              description: undefined,
              details: undefined,
              action_href: undefined
            }} />
            <ForexAccountCard variant="outlined" card={{
              banner_alt_text: undefined,
              banner_image: undefined,
              title: undefined,
              description: undefined,
              details: undefined,
              action_href: undefined
            }} />
            
          </div>
        </section>

        {/* Custom Variations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Variations</h2>
          <p className="text-gray-600 mb-8">Different broker styles and configurations</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Forex Pro */}
            {/* <ForexAccountCard
              bannerImgUrl="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
              bannerAltText="Forex Pro"
              titleHighlight="FOREX"
              title="Pro Trading"
              titleUnderlineColor="bg-blue-600"
              description="Professional Forex trading platform with advanced tools and real-time analytics for serious traders."

              buttonText="Start Trading"
              buttonBackgroundColor="bg-blue-600"
              buttonHoverColor="hover:bg-blue-700"
              onButtonClick={() => alert('Start Trading with Forex Pro!')}
            /> */}

            {/* Investment Hub */}
            {/* <ForexAccountCard
              bannerImgUrl="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
              bannerAltText="Investment Hub"
              titleHighlight="INVEST"
              title="Hub"
              titleUnderlineColor="bg-green-600"
              description="Smart investment solutions designed for long-term wealth building and portfolio diversification."

              buttonText="Invest Now"
              buttonBackgroundColor="bg-green-600"
              buttonHoverColor="hover:bg-green-700"
              onButtonClick={() => window.open('https://example.com/invest', '_blank')}
            /> */}

            {/* Crypto Exchange */}
            {/* <ForexAccountCard
              bannerImgUrl="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
              bannerAltText="Crypto Exchange"
              titleHighlight="CRYPTO"
              title="Exchange"
              titleUnderlineColor="bg-orange-500"
              description="Trade cryptocurrencies with low fees, high security, and instant execution on our advanced platform."

              buttonText="Trade Crypto"
              buttonBackgroundColor="bg-orange-500"
              buttonHoverColor="hover:bg-orange-600"
              variant="outlined"
              onButtonClick={() => alert('Welcome to Crypto Exchange!')}
            /> */}
          </div>
        </section>

        {/* More Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Examples</h2>
          <p className="text-gray-600 mb-8">More creative uses of the CardItem component</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Banking */}
            {/* <ForexAccountCard
              bannerImgUrl="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
              bannerAltText="Digital Banking"
              titleHighlight="DIGITAL"
              title="Banking"
              titleUnderlineColor="bg-purple-600"
              description="Modern banking solutions with seamless digital experience and comprehensive financial services."

              buttonText="Open Account"
              buttonBackgroundColor="bg-purple-600"
              buttonHoverColor="hover:bg-purple-700"
              onButtonClick={() => alert('Open your digital bank account!')}
            /> */}

            {/* Trading Academy */}
            {/* <ForexAccountCard
              bannerImgUrl="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
              bannerAltText="Trading Academy"
              titleHighlight="TRADING"
              title="Academy"
              titleUnderlineColor="bg-indigo-600"
              description="Master the art of trading with our comprehensive courses and expert-led training programs."

              buttonText="Start Learning"
              buttonBackgroundColor="bg-indigo-600"
              buttonHoverColor="hover:bg-indigo-700"
              variant="outlined"
              onButtonClick={() => alert('Welcome to Trading Academy!')}
            /> */}

            {/* Wealth Management */}
            {/* <ForexAccountCard
              bannerImgUrl="https://www.gofx.com/wp-content/uploads/2022/10/Artboard-%E2%80%93-119.png"
              bannerAltText="Wealth Management"
              titleHighlight="WEALTH"
              title="Management"
              titleUnderlineColor="bg-gray-800"
              description="Personalized wealth management services tailored to help you achieve your financial goals."

              buttonText="Get Consultation"
              buttonBackgroundColor="bg-gray-800"
              buttonHoverColor="hover:bg-gray-900"
              onButtonClick={() => alert('Schedule your wealth consultation!')}
            /> */}
          </div>
        </section>

      </div>
    </div>
    </NoSSR>
  );
}