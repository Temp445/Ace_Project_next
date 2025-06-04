'use client';

import React, { useState } from 'react';

import { LuSquareArrowOutUpRight } from 'react-icons/lu';

interface Feature {
  name: string;
  Essential: boolean;
  EssentialNote?: string;
  BasicPlus: boolean;
  BasicPlusNote?: string;
  premium: boolean;
  premiumNote?: string;
}

interface Plan {
  name: string;
  desc: string;
  tools?: string;
  Price?: string;
  buttonText: string;
  buttonlink: string;
  buttonClass: string;
  highlighted: boolean;
  tag: string;
}

interface FeatureIconProps {
  available: boolean;
}

const PricingTable: React.FC = () => {
  const features: Feature[] = [
    { name: ' Create & manage multiple projects', Essential: true, EssentialNote: '', BasicPlus: true, BasicPlusNote: '', premium: true, premiumNote: '' },
    { name: 'Task assignment & status tracking', Essential: false, BasicPlus: true, premium: true },
    { name: 'Basic team member management', Essential: true, EssentialNote: 'up to 5 users', BasicPlus: true, BasicPlusNote: 'Up to 20 users', premium: true, premiumNote: 'Unlimited' },
    { name: 'Role-based access', Essential: true, EssentialNote: '', BasicPlus: true, BasicPlusNote: '', premium: true },
    { name: 'Calendar View ', Essential: true, EssentialNote: 'Day & Week only', BasicPlus: true, BasicPlusNote: 'Day, Week, Month', premium: true , premiumNote: 'Day, Week, Month'},
    { name: 'Gantt Chart', Essential: true, BasicPlus: true, premium: true },
    { name: 'Performance Tracking & Star Player', Essential: false, BasicPlus: true, premium: true },
    { name: 'Reports & Insights', Essential: false, BasicPlus: false, premium: true },
    { name: ' Exportable reports', Essential: false, BasicPlus: true, premium: true },
  ];

  const plans: Plan[] = [
    {
      name: 'Essential',
      desc: 'For small teams just getting started with project management.',
      buttonText: 'Subscribe Now',
      buttonlink: '#contact',
      buttonClass: 'bg-none border text-black hover:bg-sky-600 hover:text-white',
      highlighted: false,
      tag: '',
    },
    {
      name: 'Standard',
      desc: 'For growing teams needing better visibility and coordination.',
      buttonText: 'Subscribe Now',
      buttonlink: '#contact',
      buttonClass: 'bg-none border text-black hover:bg-sky-600 hover:text-white',
      highlighted: true,
      tag: 'Smart Choice',
    },
    {
      name: 'Pro',
      desc: 'For organizations looking for advanced tracking, analytics, and scaling.',
      buttonText: 'Subscribe Now',
      buttonlink: '#contact',
      buttonClass: 'bg-none border text-black hover:bg-sky-600 hover:text-white',
      highlighted: false,
      tag: '',
    },
  ];

  const [sliderValues] = useState<{ [key: string]: number }>({
    Essential: 100,
    Standard: 100,
    Pro: 100,
  });

  const [expandedPlans, setExpandedPlans] = useState<{ [key: string]: boolean }>({});

  const togglePlanFeatures = (name: string) => {
    setExpandedPlans(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const FeatureIcon: React.FC<FeatureIconProps> = ({ available }) => (
    <span className={`font-medium ${available ? 'text-green-500' : 'text-red-500'}`}>{available ? '✓' : '✗'}</span>
  );

  const getFeatureKey = (planName: string) => {
    if (planName === 'Standard') return 'BasicPlus';
    if (planName === 'Pro') return 'premium';
    return 'Essential';
  };

  const renderFeatureList = (features: Feature[], key: string, planName: string) =>
    features.map((feature, i) => {
      const isAvailable = feature[key as keyof Feature] as boolean;
      const note = feature[`${key}Note` as keyof Feature] as string | undefined;
      return (
        <div key={`${planName}-${i}`} className="flex items-start">
          <div className="mt-0.5 mr-3">
            <FeatureIcon available={isAvailable} />
          </div>
          <span className={isAvailable ? 'text-gray-800' : 'text-gray-500'}>
            {feature.name}
            {note && <span className="text-sky-600  lg:font-bold ml-1">- {note}</span>}
          </span>
        </div>
      );
    });

  const calculatePrice = (plan: string, value: number): number => {
    const baseValues = {
      Essential: 499,
      Standard: 999,
      Pro: 1999,
    };

    const tiers = {
      Essential: [
        { min: 101, max: 250, perStep: 1750 },
        { min: 251, max: 500, perStep: 750 },
        { min: 501, max: 750, perStep: 625 },
        { min: 751, max: 1000, perStep: 500 },
      ],
      Standard: [
        { min: 101, max: 250, perStep: 2250 },
        { min: 251, max: 500, perStep: 1250 },
        { min: 501, max: 750, perStep: 1000 },
        { min: 751, max: 1000, perStep: 875 },
      ],
      Pro: [
        { min: 101, max: 250, perStep: 2750 },
        { min: 251, max: 500, perStep: 1750 },
        { min: 501, max: 750, perStep: 1500 },
        { min: 751, max: 1000, perStep: 1375 },
      ],
    };

    const basePrice = baseValues[plan as keyof typeof baseValues];
    if (value <= 100) return basePrice;

    let totalAdd = 0;
    for (const tier of tiers[plan as keyof typeof tiers]) {
      if (value > tier.min) {
        const upper = Math.min(value, tier.max);
        const stepCount = Math.floor((upper - Math.max(tier.min, 101) + 1) / 25);
        totalAdd += stepCount * tier.perStep;
      }
    }

    return basePrice + totalAdd;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-8 sm:px-6 md:px-4 py-16" id="pricing">
      <div className="text-center mb-10">
        <div className="flex gap-2 justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Subscription Options
          </h1>
        </div>
        <p className="text-lg md:text-3xl text-gray-600 md:mt-3">Power your growth with the right plan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`relative bg-white rounded border ${plan.highlighted ? 'border-teal-700 shadow-lg' : 'border-gray-200 shadow'} hover:shadow-xl transition-all`}
          >
            {plan.tag && (
              <div className="absolute top-5 right-0">
                <span className="bg-teal-600 text-white px-3 py-1 rounded-l-full text-sm font-medium shadow-sm">
                  {plan.tag}
                </span>
              </div>
            )}
            <div className="p-5 lg:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-4">{plan.desc}</p>
  <div className="text-xl font-semibold mt-2 text-gray-800 mb-10">
                  ₹{calculatePrice(plan.name, sliderValues[plan.name])}{' '}
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              {/* Slider */}
              {/* <div className="mb-4">
            
                <input
                  type="range"
                  min={100}
                  max={1000}
                  step={25}
                  value={sliderValues[plan.name]}
                  onChange={(e) =>
                    setSliderValues(prev => ({ ...prev, [plan.name]: parseInt(e.target.value) }))
                  }
                  className="w-full accent-sky-600"
                />
                  <label className="text-sm text-gray-600 block mb-1">
                  Instrument Range: {sliderValues[plan.name]}
                </label>
              
              </div> */}

              <a
                href={plan.buttonlink}
                className={`${plan.buttonClass} hidden w-full py-2 xl:py-3 rounded-lg font-medium shadow-sm hover:shadow text-center sm:block`}
              >
                {plan.buttonText}
              </a>

              <button
                className="w-full md:hidden bg-[#2b2d42] text-white py-2 rounded-sm font-semibold flex items-center justify-center mt-8 mb-4"
                onClick={() => togglePlanFeatures(plan.name)}
              >
                Features List <LuSquareArrowOutUpRight className="ml-3 text-lg" />
              </button>

              <div className={`transition-all duration-300 ${expandedPlans[plan.name] ? 'block' : 'hidden'} md:block`}>
                <h3 className="font-medium text-gray-900 mb-4 md:mt-4">Key features :</h3>
                <div className="space-y-3">
                  {renderFeatureList(features, getFeatureKey(plan.name), plan.name)}
                  <a
                    href={plan.buttonlink}
                    className={`${plan.buttonClass} flex sm:hidden justify-center w-full py-2 rounded-lg font-medium shadow-sm hover:shadow text-center mb-5`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;