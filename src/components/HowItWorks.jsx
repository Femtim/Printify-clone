import React from "react";

export default function HowItWorks() {
    // const steps = [
    //   {
    //     step: "1",
    //     title: "Create custom products",
    //     desc: "Use our free Mockup Generator to upload designs and preview products across hundreds of items.",
    //   },
    //   {
    //     step: "2",
    //     title: "Sell on your terms",
    //     desc: "Connect your store to Shopify, Etsy, WooCommerce, or TikTok Shop with single-click integrations.",
    //   },
    //   {
    //     step: "3",
    //     title: "We handle fulfillment",
    //     desc: "When an order comes in, we print, package, and ship directly to your end customer under your brand.",
    //   },
    // ];

    return (
      <>
      <section className="py-20 bg-[#2e2e1e] font-sans" id="how-it-works">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl font-bold md:text-3xl  lg:text-5xl text-[#f5f5f0] mb-3">
              See how much you can make:
            </h2>
          </div>
        <div className="lg:flex justify-evenly">
          <img src="https://printify.com/pfh/assets/profit-calculator/t-shirt-desktop.webp" alt="" className="lg:w-[50%]" />
          <img src="pricecal.png" alt="" className="lg:w-[50%]" />
        </div>
        <p className="text-[#f5f5f0] text-sm mt-8 text-center">
          *The production cost includes the fulfillment price of one item with
          one print. It doesn't include shipping fees, taxes, and other possible
          storefront expenses.
        </p>
      </section>
    
      </>
    );
  }
