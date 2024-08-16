import React, { useState } from 'react';

interface PricingHeaderProps {
  duration: 'monthly' | 'annual';
  setDuration: React.Dispatch<React.SetStateAction<'monthly' | 'annual'>>;
}

const PricingHeader: React.FC<PricingHeaderProps> = ({ duration, setDuration }) => {
  return (
    <section className="h-full justify-between flex flex-col p-8 gap-8 col-span-full xl:col-span-1 bg-white rounded-3xl shadow-box shadow-gray-500/20">
      <div className="w-full border order-last xl:order-first bg-white overflow-hidden inline-flex p-0.5 rounded-full max-w-xs shadow-button shadow-white/20 z-0">
        <button
          id="monthly-pricing-button"
          className={`block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-full text-blue-900 bg-gray-100 ${
            duration === 'monthly' ? 'bg-gray-100 border text-blue-900 ' : ''
          }`}
          onClick={() => setDuration('monthly')}
        >
          Monthly
        </button>
        <button
          id="annual-pricing-button"
          className={`block w-full px-8 py-2 text-xs font-medium transition border border-transparent rounded-full text-blue-900 ${
            duration === 'annual' ? 'bg-gray-100 border text-blue-900 ' : ''
          }`}
          onClick={() => setDuration('annual')}
        >
          Annual
        </button>
      </div>
      <div>
        <span className="text-blue-600 uppercase font-mono font-medium tracking-tight text-xs">
          we are very cheap
        </span>
        <p className="text-4xl mt-8 tracking-tighter font-semibold text-blue-950">
          Equip your business{' '}
          <span className="md:block md:text-transparent md:bg-clip-text md:bg-gradient-to-r from-blue-500 to-indigo-600 py-2">
            with world class software
          </span>
        </p>
        <p className="text-base lg:text-base max-w-sm mt-4 text-gray-700">
          Every plan includes every feature, and can scale as your team does.
        </p>
      </div>
    </section>
  );
};

interface PricingPlanProps {
  title: string;
  price: string;
  description: string;
  details: string;
  features: string[];
  duration: 'monthly' | 'annual';
  isPrimary?: boolean;
}

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="flex flex-col mt-10 text-sm text-gray-700 gap-y-3" role="list">
      {features.map((feature, index) => (
        <li key={index} className="flex flex-row items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 icon icon-tabler icon-tabler-circle-check-filled text-blue-500"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
              strokeWidth="0"
              fill="currentColor"
            ></path>
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  price,
  description,
  details,
  features,
  duration,
  isPrimary,
}) => {
  return (
    <section className={`flex flex-col p-8 bg-white rounded-3xl shadow-box shadow-gray-500/20 ${isPrimary ? "bg-gradient-to-b from-blue-500 to-indigo-600 text-white" : ""}`}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium uppercase font-mono tracking-tighter text-blue-950 mt-8">
            {title}
          </p>
          <p className="text-2xl font-semibold order-first lg:text-4xl tracking-tighter font-mono text-blue-950">
            <span>{price}</span>
            <span className="text-xs font-normal tracking-normal ml-2 text-gray-700">
              /monthly{' '}
              {duration === 'annual' && <span>billed annually</span>}
            </span>
          </p>
        </div>
        <p className="text-xs font-medium text-gray-700">{description}</p>
        <p className="text-sm text-gray-700 mt-4">{details}</p>
      </div>
      <FeatureList features={features} />
      <div className="mt-8">
        <a
          href="#"
          className="w-full inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-full shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};




export const Pricing: React.FC = () => {
  const [duration, setDuration] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-screen-xl relative">
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 sm:mx-auto xl:grid-cols-3">
        <PricingHeader duration={duration} setDuration={setDuration} />
        <PricingPlan
          isPrimary
          title="Silver Surfer"
          price={duration === 'monthly' ? '$29' : '$19'}
          description="For startups"
          details="If you're a small business or a startup, this plan is designed to cater to your needs. It offers a balance of essential features."
          features={[
            "Limited number of users",
            "Limited storage (5 GB)",
            "Basic support (email only)",
            "Access to all features",
          ]}
          duration={duration}
        />
        <PricingPlan
          title="Silver Surfer"
          price={duration === 'monthly' ? '$29' : '$19'}
          description="For startups"
          details="If you're a small business or a startup, this plan is designed to cater to your needs. It offers a balance of essential features."
          features={[
            "Limited number of users",
            "Limited storage (5 GB)",
            "Basic support (email only)",
            "Access to all features",
          ]}
          duration={duration}
        />
      </div>
    </div>
  );
};
