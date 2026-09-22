import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

/* ----------------------------- Nav data ----------------------------- */

const NAV_ITEMS = [
  { label: "Catalog", href: "#" },
  { label: "Pricing", href: "#" },
  {
    label: "How it works",
    dropdown: [
      { title: "See how Printify works", sub: "From design to doorstep" },
      { title: "Product quality", sub: "Print & material standards" },
      { title: "Order fulfillment", sub: "How orders get made" },
    ],
  },
  {
    label: "Solutions",
    dropdown: [
      { title: "For ecommerce", sub: "Sell on your own store" },
      { title: "For creators", sub: "Merch for your audience" },
      { title: "For enterprise", sub: "Scale print-on-demand" },
    ],
  },
  {
    label: "Learn",
    dropdown: [
      { title: "Blog", sub: "Guides & inspiration" },
      { title: "Podcast", sub: "Stories from sellers" },
      { title: "Webinars", sub: "Live & recorded sessions" },
    ],
  },
  {
    label: "Services",
    dropdown: [
      { title: "Premium", sub: "Faster fulfillment & support" },
      { title: "Design services", sub: "Get help with your designs" },
    ],
  },
  {
    label: "Support",
    dropdown: [
      { title: "Help center", sub: "Answers to common questions" },
      { title: "Contact us", sub: "Talk to our team" },
    ],
  },
];

/* ----------------------------- Logo ----------------------------- */

function Logo() {
  return (
    <a href="#" className="flex font-outfit items-center gap-2 shrink-0">
      <span className="font-[apple-system] text-2xl sm:text-[26px] font-extrabold text-[#241f14]">
        Printify
      </span>
    </a>
  );
}

/* ----------------------------- Desktop dropdown item ----------------------------- */

function NavDropdown({ item, isOpen, onToggle }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onToggle(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onToggle]);

  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        className="px-3 py-2 rounded-full text-[15px] font-medium text-[#241f14] hover:bg-[#efeee8] transition-colors"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => onToggle(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-[15px] font-medium text-[#241f14] transition-colors ${
          isOpen ? "bg-[#efeee8]" : "bg-transparent"
        }`}
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.4}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+8px)] w-72 rounded-xl shadow-lg border border-gray-200 bg-white p-2 z-50">
          {item.dropdown.map((d) => (
            <a
              key={d.title}
              href="#"
              className="block px-3 py-2.5 rounded-lg hover:bg-[#efeee8] transition-colors"
            >
              <p className="text-sm font-semibold text-[#241f14]">{d.title}</p>
              <p className="text-xs mt-0.5 text-[#4a4436]">{d.sub}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ----------------------------- Desktop nav ----------------------------- */

function DesktopNav() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <nav className="hidden lg:flex items-center gap-3 ml-4">
      {NAV_ITEMS.map((item, i) => (
        <NavDropdown
          key={item.label}
          item={item}
          isOpen={openIdx === i}
          onToggle={(val) => setOpenIdx(val ? i : null)}
        />
      ))}
    </nav>
  );
}

/* ----------------------------- Auth buttons ----------------------------- */

function AuthButtons({ compact = false }) {
  return (
    <div className={`flex items-center gap-2 sm:gap-2.5 ${compact ? "flex-col w-full" : "shrink-0"}`}>
      <a
        href="#"
        className={`font-bold rounded mr-2 text-[14px] sm:text-[15px] border border-b-gray-700 text-[#241f14] px-4 sm:px-5 py-2 sm:py-2.5 text-center hover:bg-[#efeee8] transition-colors ${
          compact ? "w-full" : ""
        }`}
      >
        Log in
      </a>
      <a
        href="#"
        className={`font-bold text-[14px] rounded  sm:text-[15px] px-8 sm:px-5 py-2 sm:py-2.5 text-center text-[#1c2a0e] bg-[#aeff6e] hover:bg-[#99dc47] transition-colors ${
          compact ? "w-full" : ""
        }`}
      >
        Sign up
      </a>
    </div>
  );
}

/* ----------------------------- Mobile accordion item ----------------------------- */

function MobileNavItem({ item, isOpen, onToggle }) {
  if (!item.dropdown) {
    return (
      <a
        href={item.href}
        className="block px-4 py-3.5 text-[15px] font-medium text-[#241f14] border-b border-gray-200"
      >
        {item.label}
      </a>
    );
  }
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3.5 text-[15px] font-medium text-[#241f14]"
      >
        {item.label}
        <ChevronDown
          size={14}
          strokeWidth={2.4}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-2">
          {item.dropdown.map((d) => (
            <a key={d.title} href="#" className="block px-4 py-2.5">
              <p className="text-sm font-semibold text-[#241f14]">{d.title}</p>
              <p className="text-xs mt-0.5 text-[#4a4436]">{d.sub}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

/* ----------------------------- Mobile drawer ----------------------------- */

function MobileDrawer({ open, onClose }) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className={`fixed inset-x-0 top-[76px] bottom-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform duration-300 flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto">
          {NAV_ITEMS.map((item, i) => (
            <MobileNavItem
              key={item.label}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Navbar ----------------------------- */

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white font-sans px-4 justify-between sticky">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between gap-4">
        <div className="flex items-center justify-evenly gap-4 sm:gap-6 min-w-0">
          <button
            onClick={() => setDrawerOpen((v) => !v)}
            className="lg:hidden p-1 -ml-1 text-[#241f14]"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
          >
            {drawerOpen ? <X size={26} strokeWidth={2.2} /> : <Menu size={26} strokeWidth={2.2} />}
          </button>
          <Logo />
          <DesktopNav />
        </div>

        <AuthButtons />
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}