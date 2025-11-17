import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f5f4f4]">
      <section className="bg-[#f5f4f4] px-4 container mx-auto">
        {/* Footer Content */}
        <section className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-5  py-[76px] paragraph-text">
          {/* CONTACT US section */}
          <div className="space-y-1 w-full">
            <p className="mb-5 font-medium">CONTACT US</p>
            <p>+1 (844) 326-6000</p>
            <p>Email Us</p>
            <p>Mon-Fri 9am-3pm PT</p>
          </div>

          {/* CUSTOMERS section */}
          <div className="space-y-1 w-full">
            <p className="mb-5 font-medium">CUSTOMERS</p>
            <p>Start a Return</p>
            <p>Return Policy</p>
            <p>FAQ</p>
            <p>Catalogs and Mailers</p>
            <p>About Group Gifting</p>
          </div>

          {/* COMPANY section */}
          <div className="space-y-1 w-full">
            <p className="mb-5 font-medium">COMPANY</p>
            <p>About Us</p>
            <p>Sustainability</p>
            <p>Discover Revive</p>
            <p>Careers</p>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>

          {/* Newsletter Signup section: spans two columns */}
          <div className="flex flex-col space-y-4 md:col-span-2">
            <p className="section-header-text tracking-wider">
              Get the latest news from us
            </p>
            <p>
              By signing up, you agree to our&nbsp;
              <span className="underline">Privacy Policy</span> and&nbsp;
              <span className="underline">Terms of Service</span>.
            </p>
            <input
              className="w-full border border-[#dddddd] p-2 focus:outline-none rounded-lg"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="bg-black text-white paragraph-text w-36 text-center py-2 rounded-lg tracking-wider">
              Subscribe
            </button>
          </div>
        </section>

        {/* Copyright */}
        <section className="w-full py-5 text-[#565656] paragraph-text">
          <a
            className="flex justify-center text-[#7e7d7d] hover:text-blue-400 "
            target="_blank"
            href="https://github.com/metatony"
            rel=" noopener noreferrer "
          >
            &copy; Website built by metatony
          </a>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
