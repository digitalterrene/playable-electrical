export default function FooterCTA() {
  return (
    <div className=" relative bg-center">
      <div
        style={{
          backgroundImage: `url(./assets/banner/a_black_electrician_holding_a_tablet_1.jpeg)`,
        }}
        className="   relative bg-center"
      >
        <div className="w-full -z-10 h-full absolute left-0 top-0 bg-black/80"></div>

        <div className="mx-auto z-40 max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl  font-bold tracking-tight text-white shadow-xl sm:text-4xl">
            Ready to Power Up?
            <br />
            Request a Free Consultation Now!
          </h2>
          <div className="mt-10 flex  items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <a
              href="/contact-us"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contact Us
            </a>
            <a
              href="#about-us"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
