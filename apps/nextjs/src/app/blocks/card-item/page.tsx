"use client";

import CardItem from '@/components/blocks/CardItem';

export default function CardItemPage() {
  return (
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
            <CardItem />
            <CardItem variant="outlined" />
            <CardItem 
              buttonText="Get Started"
              onButtonClick={() => alert('Get Started clicked!')}
            />
          </div>
        </section>

        {/* Custom Variations Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Variations</h2>
          <p className="text-gray-600 mb-8">Different broker styles and configurations</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Forex Pro */}
            <CardItem 
              headerTitle="FOREX"
              headerSubtitle="Pro"
              logoText="F"
              logoBackgroundColor="bg-blue-600"
              titleHighlight="FOREX"
              title="Pro Trading"
              titleUnderlineColor="bg-blue-600"
              description="Professional Forex trading platform with advanced tools and real-time analytics for serious traders."
              additionalText="Experience premium trading with cutting-edge technology."
              buttonText="Start Trading"
              buttonBackgroundColor="bg-blue-600"
              buttonHoverColor="hover:bg-blue-700"
              onButtonClick={() => alert('Start Trading with Forex Pro!')}
            />

            {/* Investment Hub */}
            <CardItem 
              headerTitle="INVEST"
              headerSubtitle="Hub"
              logoText="I"
              logoBackgroundColor="bg-green-600"
              titleHighlight="INVEST"
              title="Hub"
              titleUnderlineColor="bg-green-600"
              description="Smart investment solutions designed for long-term wealth building and portfolio diversification."
              additionalText="Build your future with proven investment strategies."
              buttonText="Invest Now"
              buttonBackgroundColor="bg-green-600"
              buttonHoverColor="hover:bg-green-700"
              onButtonClick={() => window.open('https://example.com/invest', '_blank')}
            />

            {/* Crypto Exchange */}
            <CardItem 
              headerTitle="CRYPTO"
              headerSubtitle="Exchange"
              logoText="₿"
              logoBackgroundColor="bg-orange-500"
              titleHighlight="CRYPTO"
              title="Exchange"
              titleUnderlineColor="bg-orange-500"
              description="Trade cryptocurrencies with low fees, high security, and instant execution on our advanced platform."
              additionalText="Join millions of users trading digital assets safely."
              buttonText="Trade Crypto"
              buttonBackgroundColor="bg-orange-500"
              buttonHoverColor="hover:bg-orange-600"
              variant="outlined"
              onButtonClick={() => alert('Welcome to Crypto Exchange!')}
            />
          </div>
        </section>

        {/* More Examples Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Examples</h2>
          <p className="text-gray-600 mb-8">More creative uses of the CardItem component</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Digital Banking */}
            <CardItem 
              headerTitle="BANK"
              headerSubtitle="Digital"
              logoText="B"
              logoBackgroundColor="bg-purple-600"
              titleHighlight="DIGITAL"
              title="Banking"
              titleUnderlineColor="bg-purple-600"
              description="Modern banking solutions with seamless digital experience and comprehensive financial services."
              additionalText="Banking redefined for the digital age."
              buttonText="Open Account"
              buttonBackgroundColor="bg-purple-600"
              buttonHoverColor="hover:bg-purple-700"
              onButtonClick={() => alert('Open your digital bank account!')}
            />

            {/* Trading Academy */}
            <CardItem 
              headerTitle="LEARN"
              headerSubtitle="Academy"
              logoText="A"
              logoBackgroundColor="bg-indigo-600"
              titleHighlight="TRADING"
              title="Academy"
              titleUnderlineColor="bg-indigo-600"
              description="Master the art of trading with our comprehensive courses and expert-led training programs."
              additionalText="From beginner to professional trader guidance."
              buttonText="Start Learning"
              buttonBackgroundColor="bg-indigo-600"
              buttonHoverColor="hover:bg-indigo-700"
              variant="outlined"
              onButtonClick={() => alert('Welcome to Trading Academy!')}
            />

            {/* Wealth Management */}
            <CardItem 
              headerTitle="WEALTH"
              headerSubtitle="Mgmt"
              logoText="W"
              logoBackgroundColor="bg-gray-800"
              titleHighlight="WEALTH"
              title="Management"
              titleUnderlineColor="bg-gray-800"
              description="Personalized wealth management services tailored to help you achieve your financial goals."
              additionalText="Expert advisors for your financial journey."
              buttonText="Get Consultation"
              buttonBackgroundColor="bg-gray-800"
              buttonHoverColor="hover:bg-gray-900"
              onButtonClick={() => alert('Schedule your wealth consultation!')}
            />
          </div>
        </section>

        {/* Usage Documentation */}
        <section className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage Documentation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Usage</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <pre>{`import CardItem from '@/components/blocks/CardItem';

// Default GOFX design
<CardItem />

// With custom button action
<CardItem 
  buttonText="Get Started"
  onButtonClick={() => alert('Clicked!')}
/>`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Configuration</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                <pre>{`<CardItem 
  headerTitle="FOREX"
  headerSubtitle="Pro"
  logoText="F"
  logoBackgroundColor="bg-blue-600"
  titleHighlight="FOREX"
  title="Pro Trading"
  buttonText="Start Trading"
  buttonBackgroundColor="bg-blue-600"
/>`}</pre>
              </div>
            </div>
          </div>

          {/* Props Table */}
          <div className="overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Props</h3>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold">Prop</th>
                  <th className="text-left py-3 px-4 font-semibold">Type</th>
                  <th className="text-left py-3 px-4 font-semibold">Default</th>
                  <th className="text-left py-3 px-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">headerTitle</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"GOFX"</td>
                  <td className="py-3 px-4 text-gray-600">Top right main text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">headerSubtitle</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"Broker"</td>
                  <td className="py-3 px-4 text-gray-600">Top right subtitle</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">logoText</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"G"</td>
                  <td className="py-3 px-4 text-gray-600">Text inside circular logo</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">logoBackgroundColor</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"bg-red-600"</td>
                  <td className="py-3 px-4 text-gray-600">Logo background color (Tailwind class)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">titleHighlight</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"GOFX"</td>
                  <td className="py-3 px-4 text-gray-600">Highlighted part with underline</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">title</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"Broker"</td>
                  <td className="py-3 px-4 text-gray-600">Main title text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">buttonText</td>
                  <td className="py-3 px-4 text-gray-600">string</td>
                  <td className="py-3 px-4 text-gray-600">"Contact us"</td>
                  <td className="py-3 px-4 text-gray-600">Button text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">onButtonClick</td>
                  <td className="py-3 px-4 text-gray-600">function</td>
                  <td className="py-3 px-4 text-gray-600">undefined</td>
                  <td className="py-3 px-4 text-gray-600">Button click handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-blue-600">variant</td>
                  <td className="py-3 px-4 text-gray-600">"default" | "outlined"</td>
                  <td className="py-3 px-4 text-gray-600">"default"</td>
                  <td className="py-3 px-4 text-gray-600">Card styling variant</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}