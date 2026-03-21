export default function ContactUs() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 ">
        {/* Left Side - Enquiry Section (40%) */}
        <div className="w-full lg:w-[40%] lg:mt-[5%] bg-gray-100 border-l-4 border-gray-800">
          <div className="px-6 sm:px-10 lg:px-12 py-10">
            <h2 className="text-3xl tracking-[0.15em] uppercase font-light mb-8">
              Online Enquiries
            </h2>
            <div className="space-y-4 text-gray-700 text-sm">
              <div>
                <p className="font-semibold">Address:</p>
                <p>
                  Obeetee Corporate Office Khasra no. 289/2, near by SO India,
                  Sultanpur, New Delhi, Delhi 110030
                </p>
              </div>

              <div>
                <p className="font-semibold">Phone:</p>
                <p>+91 95591 40222</p>
              </div>

              <div>
                <p className="font-semibold">Email:</p>
                <p>customercare@obeetee.com</p>
              </div>

              <button className="border-b border-black mt-2 hover:opacity-70 transition">
                Get Directions
              </button>
            </div>

            {/* Hospitality */}
            <div className="mt-12">
              <h3 className="text-xl tracking-wide mb-6">Hospitality</h3>

              <ul className="space-y-4 text-lg tracking-[0.15em] uppercase font-light">
                <li>New Delhi</li>
                <li>Mumbai</li>
                <li>Hyderabad</li>
                <li>Bengaluru</li>
                <li>Kolkata</li>
                <li>Pune</li>
                <li>Ahmedabad</li>
                <li>London</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Map (60%) */}
        {/* Right Side - Map (60%) */}
        <div className="w-full lg:w-[60%] h-[400px] lg:h-auto lg:mr-[5%] lg:mb-[10%] lg:mt-[5%]">
          <iframe
            src="https://www.google.com/maps?q=Obeetee%20Corporate%20Office%20Sultanpur%20New%20Delhi&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <section className="w-full bg-gray-100  py-16 px-6 lg:px-16">
        {/* Top Heading Bar */}
        <div className="w-full bg-[#6d1f0f] text-white text-center py-3 mb-12 tracking-[0.15em] uppercase">
          Connect with our design expert today
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Image */}
          <div>
            <img
              src="/enquiry-image.jpg"
              alt="Enquiry"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Middle Form */}
          <div>
            <h2 className="text-3xl tracking-[0.15em] uppercase font-light mb-4">
              Enquire Now
            </h2>

            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
              Whether you’re browsing our collections, considering a custom
              design, or simply seeking assistance, we’re here to help. Share
              your inquiry with us, and our team will respond with the guidance
              and care you expect.
            </p>

            <form className="space-y-6">
              <div>
                <label className="text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Name..."
                  className="w-full border-b border-gray-500 outline-none py-2 bg-transparent"
                />
              </div>

              <div>
                <label className="text-sm">E-mail</label>
                <input
                  type="email"
                  placeholder="Enter Email..."
                  className="w-full border-b border-gray-500 outline-none py-2 bg-transparent"
                />
              </div>

              <div>
                <label className="text-sm">Phone number</label>
                <input
                  type="text"
                  placeholder="Enter Number..."
                  className="w-full border-b border-gray-500 outline-none py-2 bg-transparent"
                />
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  placeholder="Enter Message..."
                  className="w-full border-b border-gray-500 outline-none py-2 bg-transparent"
                  rows="3"
                ></textarea>
              </div>

              <button
                className="bg-[#6d1f0f] text-white px-8 py-3 w-fit 
transition duration-300 ease-in-out
hover:bg-white hover:text-[#6d1f0f] border border-[#6d1f0f]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Catalogue Section */}
          <div className="lg:border-l border-gray-400 lg:pl-10 flex flex-col justify-center lg:mt-[70%]">
            <h3 className="text-xl tracking-[0.15em] uppercase font-light mb-6 ">
              Download our Catalogues
            </h3>
            <button
              className="bg-[#6d1f0f] text-white px-8 py-3 w-fit 
transition duration-300 ease-in-out
hover:bg-white hover:text-[#6d1f0f] border border-[#6d1f0f]"
            >
              View All
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
