import React from 'react';

export class ProductShowcase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      visibleCount: 6,
      products: [
        {
          name: 'T-shirt',
          image: 't-shirt.webp' 
        },
        {
          name: 'Hoodie',
          image: 'hoodie.webp'
        },
        {
          name: 'Sweatshirt',
          image: 'sweatshirt.webp'
        },
        {
          name: 'Mug',
          image: 'mug.webp'
        },
        {
          name: 'Kids Clothing',
          image: 'kids-clothing.webp'
        },
        {
          name: 'Stickers',
          image: 'stickers.webp'
        },
        {
          name: 'Tough Phone Cases',
          image: ''
        }
      ]
    };

    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.updateVisibleCount = this.updateVisibleCount.bind(this);
  }

  componentDidMount() {
    this.updateVisibleCount();
    window.addEventListener('resize', this.updateVisibleCount);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVisibleCount);
  }

  updateVisibleCount() {
    const width = window.innerWidth;
    let count = 6;

    if (width >= 1280) {
      count = 6; // Desktop: 6 items
    } else if (width >= 1024) {
      count = 4; // Laptops: 4 items
    } else if (width >= 640) {
      count = 2; // Tablets: 2 items
    } else {
      count = 1; // Mobile: 1 item
    }

    this.setState({ visibleCount: count });
  }

  handlePrev() {
    this.setState((prevState) => {
      const len = prevState.products.length;
      return {
        startIndex: (prevState.startIndex - 1 + len) % len
      };
    });
  }

  handleNext() {
    this.setState((prevState) => {
      const len = prevState.products.length;
      return {
        startIndex: (prevState.startIndex + 1) % len
      };
    });
  }

  render() {
    const { startIndex, visibleCount, products } = this.state;
    const total = products.length;

    // Slice the products dynamically with circular wrap-around
    const visibleProducts = [];
    for (let i = 0; i < visibleCount; i++) {
      visibleProducts.push(products[(startIndex + i) % total]);
    }

    return (
      <section className="py-20 max-w-7xl mx-auto px-6 font-sans" id="catalog">
        <h1 className="text-5xl font-bold text-slate-900 mb-10 text-center ">Your next bestseller awaits</h1>
        <div className="relative flex items-center justify-between gap-4">
          {/* Left Arrow Button */}
          <button
            onClick={this.handlePrev}
            aria-label="Previous products"
            className="w-12 h-12 flex-shrink-0 rounded-full border border-slate-200 bg-white hover:border-[#39b54a] hover:text-[#39b54a] text-slate-600 flex items-center justify-center transition-colors shadow-sm focus:outline-none z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dynamic Responsive Product Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {visibleProducts.map((prod, index) => (
              <div
                key={`${prod.name}-${index}`}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm text-center flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                {/* Product Image Slot */}
                <div className="h-44 bg-slate-100 rounded-xl mb-3 flex items-center justify-center overflow-hidden relative">
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    /* Default Placeholder when no image URL is provided */
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-1.5 p-2">
                      <svg
                        className="w-8 h-8 stroke-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-[11px] font-mono">Add Image</span>
                    </div>
                  )}
                </div>

                {/* Product Title */}
                <h3 className="font-bold text-slate-900 text-sm line-clamp-2">
                  {prod.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={this.handleNext}
            aria-label="Next products"
            className="w-12 h-12 flex-shrink-0 rounded-full border border-slate-200 bg-white hover:border-[#39b54a] hover:text-[#39b54a] text-slate-600 flex items-center justify-center transition-colors shadow-sm focus:outline-none z-10"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div>
          <p className="text-3xl text-black ml-2 mt-16 mb-4 font-bold">
          Ideas and inspiration
        </p>
        <div className='flex p-2 gap-4 max-w-full'>
          <img src="idea1.webp" alt=""  className='w-[40%]'/>
          <div className=' w-'>
            <img src="idea2.webp" alt="" className='mb-4 w-[98%]' />
            <div className='flex gap-4 w-[50%]'>
              <img src="idea3.webp" alt="" className='w-[95%]'/>
              <img src="idea4.webp" alt="" className='w-[95%]' />
            </div>
          </div>
        </div>
        </div>
      </section>

    );
  }
}