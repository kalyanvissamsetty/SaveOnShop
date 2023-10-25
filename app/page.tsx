import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-red-600">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Home