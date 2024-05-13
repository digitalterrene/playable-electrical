import React from "react";

export default function Portfolio() {
  return (
    <section className="py-24 relative" id="portfolio">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-center flex-col gap-5 mb-14">
          <span className="bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
            Portfolio
          </span>
          <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
            See Some Of Our Work
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-5xl mx-auto text-center">
            From stunning residential lighting installations to complex
            industrial projects, each image tells a story of excellence and
            innovation. Take a glimpse into our world and see firsthand the
            quality and precision that sets us apart. Whether you're seeking
            inspiration for your next project or simply want to appreciate the
            beauty of expertly executed electrical work, our gallery offers a
            window into the exceptional standards we uphold. Browse through our
            collection and envision the possibilities with Playable Electrical
            by your side.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (12).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (12)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (13).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (13)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (15).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (15)"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (16).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_ (16)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (1).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (1)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (4).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (4)"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (5).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (5)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (6).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (6)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (7).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (7)"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (8).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (8)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (9).jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_d (9)"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="./assets/portfolio/a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_detai.jpeg"
                alt="a_network_of_industrial_electrical_cables_a_residential_electrical_meter_installation_a_detai"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
