'use client';
import Image from 'next/image';
import { CreditCard, Clock1, BanknoteIcon } from 'lucide-react';
import QuoteForm from '@/components/sections/QuoteForm';

const trustBadges = [
  { icon: BanknoteIcon, title: 'Lowest Rates', sub: 'Compare & Save' },
  { icon: Clock1, title: 'Fast & Reliable', sub: 'Trusted Carriers' },
  { icon: CreditCard, title: 'Easy & Secure', sub: 'Book in Minutes' },
];

const carriers = [
  { name: 'UPS', logo: '/carriers/ups.svg', className: 'h-11 w-auto' },
  { name: 'FedEx', logo: '/carriers/fedex.svg', className: 'h-8 w-auto' },
  { name: 'DHL', logo: '/carriers/dhl.svg', className: 'h-8 w-auto' },
  { name: 'Purolator', logo: '/carriers/purolator.svg', className: 'h-8 w-auto' },
];
export default function HeroSection() {
  return (
    <>
     <section className="relative overflow-hidden bg-gray-50 py-20 md:py-24 min-h-[560px] md:min-h-[640px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-scene2.png"
            alt="Shipping background"
            fill
            className="object-cover object-[92%_center] md:object-[98%_center]"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Save on Shipping<br />with Top Carriers
            </h1>
            <p className="text-lg font-normal text-gray-800 leading-[1.2] max-w-2xl mb-8">
              Compare real-time rates from UPS, FedEx, DHL<span className="hidden sm:inline"><br /></span>
              and more. Ship smarter. Pay less.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 mb-8 sm:mb-10">
              {trustBadges.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#537dcf] border border-[#bfd0ee] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2B6B] text-sm leading-none">{title}</p>
                    <p className="text-[#00000] text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-5xl w-full">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-6 md:py-6 bg-white border-y ">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-normal text-gray-500 leading-[1.4] mb-6">
            Trusted by Shippers. Powered by Leading Carriers.
          </p>
          <ul className="flex flex-wrap items-end justify-center gap-8">
            {carriers.map(({ name, logo, className }) => (
              <li key={name} className="flex items-end justify-center h-10 sm:h-11 px-1.5 list-none">
                {/* Use img for SVG brand logos to avoid optimizer/render quirks */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt={name} className={`${className} object-contain block`} />
              </li>
            ))}
            <li className="list-none text-blue-700 text-sm font-medium ml-1">and more...</li>
          </ul>
        </div>
      </section>
    </>
  );
}