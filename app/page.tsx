import Image from 'next/image'
import React from 'react'
import SearchBar from '@/components/SearchBar';
import HeroCarousel from '@/components/HeroCarousel';
function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              {" "}
              Smart shopping starts here!
              <Image
                src="assets/icons/arrow-right.svg"
                height={16}
                width={16}
                alt="arrow-right"
              />
            </p>

            <h1 className="head-text">
              Track Prices, Set Alerts, Never Miss a Deal with
              <span className="text-primary"> SaveOnShop</span>
            </h1>

            <p className="mt-6">
              Empowering Savvy Shoppers with Price Tracking and Stock
              Notifications - Your Ultimate Savings Companion.
            </p>
            <SearchBar/>
          </div>
          <HeroCarousel/>
        </div>
      </section>
    </>
  );
}

export default Home