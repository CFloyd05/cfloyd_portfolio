---
company: "Corvus Energy - Test Team"
title: "Test Engineering Co-op Student"
image: "/experience/corvusTest/CorvusLogo.png"
imageCaption: "Photo courtesy of Corvus Energy"
dateRange: "May 2026 – August 2026"
location: "Richmond, BC, Canada"
skills:
  - Test Planning, Documentation, and Execution
  - Building Equipment Under Test and Test Setups
  - Python Data-Analysis
portfolio:
  order: 1
  layout: columns
  section: "Experience"
  title: "Test Engineering Co-op"
  org: "Corvus Energy · Test Team"
  date: "May 2026 – Aug 2026 · Richmond, BC"
  logo: "/experience/corvusTest/CorvusLogo.png"
  toc: "Corvus Energy"
  summary: "Supported the certification and reliability teams: testing high-voltage marine battery systems, building test hardware, and writing Python tools to analyze data from customer vessels."
  tags: ["Test Planning & Execution", "Formal Documentation", "Data Acquisition", "LCR & Micro-Ohm Meters", "Python", "Mechanical Assembly"]
  stats:
    - { value: "4", label: "class societies supported in certification testing" }
    - { value: "−33%", label: "accelerated life-test cycle time, 6 h down to 4 h" }
  # Mosaic like the other pages: two photos on top, the graph across the bottom, the enclosure down the right
  gallery:
    columns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1.3fr)"
    rows: "160px 122px"
    areas: ["a b c", "d d c"]
    images:
      - { src: "/experience/corvusTest/fourWireBlurred.jpg", caption: "Four-wire micro-ohm resistance test", area: a, position: "30% center" }
      - { src: "/experience/corvusTest/thermalModuleBlurred.jpg", caption: "Thermocouple-instrumented module", area: b }
      - { src: "/experience/corvusTest/thermalEnclosureBlurred.jpg", caption: "Insulated test enclosure", area: c }
      # crop trims the grey label bands and axis lines so only the plotted data shows
      - { src: "/experience/corvusTest/tempDataGraph_2.png", caption: "Temperature cycles counted by the fatigue calculator", area: d, crop: [10.2, 2.4, 31.7, 5.9] }
  columns:
    - heading: "System Tests"
      items:
        - "Tested system over-temperature response. Simulated a cell over-temperature fault and timed the contactor response with a DAQ; confirmed reaction time within spec"
        - "Supported class certification tests, documenting procedures, deviations and results in formal test journals"
        - "Measured system capacitance with LCR meter, built a model predicting capacitance from system configuration. Measured power-path, contactor and fuse resistances with a four-wire micro-ohm meter"
    - heading: "Python Tools"
      items:
        - text: "Wrote a thermal-cycle fatigue calculator"
          items:
            - "Counts thermal cycles and their amplitudes in years of logged temperature data and applies a modified Coffin-Manson equation"
            - "Outputs a relative damage value for each customer system, compared against accelerated life tests to predict failures"
            - "Has already improved the accuracy of the team's accelerated life tests"
        - "Wrote an availability analyzer to calculate system availability from vessel logs"
    - heading: "Test Hardware"
      items:
        - "Built an insulated thermal enclosure for an accelerated lifecycle test, with ducting to an air chiller. Reduced thermal cycle time from 6 to 4 hours"
        - "Manufactured a thermocouple battery module for thermal characterization of a new cell type"
        - "Wired, networked, and commissioned a BMS computer, and built an EMC test stand"
        - "Built five 4'×8' acoustic barriers for high-power electronics"
  link: "/experience/CorvusEnergyTest"
---

## Who is Corvus Energy

Corvus Energy is the world's leading supplier of battery energy storage systems for the maritime industry; powering electric and hybrid marine vessels.

## My Role

From May to August 2026, I worked on the test team at Corvus, supporting both the certification/compliance team and the reliability team. My work focused on testing high-voltage battery systems, building test hardware, and writing Python tools to analyze reliability data from customer vessels.

## My Projects

### Tests

#### Certification Test Journals

I supported product certification testing for four different class societies, documenting test procedures, deviations, and results in formal test journals. These tests focused on verifying the system's safety and performance.

The tests were very succesful, and the system has since been awarded it's first type approval: [Press Release: Corvus Blue Whale NxtGen Energy Awarded DNV Type Approval](https://corvusenergy.com/news/corvus-blue-whale-nxtgen-energy-awarded-dnv-type-approval)

#### Thermal Build

I built a battery module with ~40 internal thermocouples to characterize a new cell type. This involved extensive communication and collaboration with the production team to modify existing processes, including robotic laser welding and the existing fixturing and jigs.

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/thermalModuleBlurred.jpg"
      alt="Thermocouple Module for Thermal Characterization"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Thermocouple Module for Thermal Characterization"
    />
    <figcaption class="text-center text-md text-gray-500">Thermocouple Module for Thermal Characterization</figcaption>
  </figure>
</div>

#### Capacitance and Resistance Characterization

Using an LCR meter and a four-wire micro-ohm meter, I measured capacitances and resistances throughout the battery system. I measured power-path, contactor, and fuse resistances, and developed a model to predict system capacitance based on configuration details. The results helped the team better understand the system and validate design decisions, and served as a pre-check for EMC testing.

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/fourWireBlurred.jpg"
      alt="Four-Wire Micro-Ohm Meter Test Set-up"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Four-Wire Micro-Ohm Meter Test Set-up"
    />
    <figcaption class="text-center text-md text-gray-500">Four-Wire Micro-Ohm Meter Test Set-up</figcaption>
  </figure>
</div>

#### Safety Fault Reaction Time

To validate the system's safety response, I used a sensor breakout board to simulate a cell over-temperature event, which should open the contactors. I set up a DAQ system on both the temperature sensor and the customer-side battery terminals to measure the system reaction time, and confirmed it was within the required spec.


### Data Analysis Tools (Python)

#### Thermal Cycle Fatigue Calculator

I wrote a Python tool that calculates system fatigue due to thermal cycling using a modified Coffin-Manson equation. It processes large amounts of raw temperature data (years of measurements across ~40 channels, logged every 30 minutes), finds the amplitude of each temperature cycle, and outputs a relative damage value for each customer system. These values can be compared to accelerated lifecycle tests to predict system failures and validate reliability estimates. The tool has already improved the accuracy of our accelerated lifecycle tests.

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/boltedConnectionGraph_2.png"
      alt="Thermal Data from Accelerated Life-Cycle Testing"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Thermal Data from Accelerated Life-Cycle Testing"
    />
    <figcaption class="text-center text-md text-gray-500">Thermal Data from Accelerated Life-Cycle Testing</figcaption>
  </figure>

  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/tempDataGraphNoFiltering_2.png"
      alt="Thermal Data from Customer Vessel, low filtering"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Thermal Data from Customer Vessel, low filtering"
    />
    <figcaption class="text-center text-md text-gray-500">Thermal Data from Customer Vessel, Fine Detail</figcaption>
  </figure>

  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/tempDataGraph_2.png"
      alt="Thermal Data from Customer Vessel, high filtering"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Thermal Data from Customer Vessel, high filtering"
    />
    <figcaption class="text-center text-md text-gray-500">Thermal Data from Customer Vessel, Major Cycles Only</figcaption>
  </figure>
</div>


#### System Availability Analyzer

Using system logs from customer vessels, I wrote a script to calculate system availability. I automated the process as much as possible, making it quick for the reliability team to check different systems.

I developped a criteria to quantify system up-time from the vessel logs, which was then used to calculate availability.

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 max-w-4xl mx-auto items-center js-gallery">
  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/availabilityGraph_2.png"
      alt="System Up-Time Graph"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="System Up-Time Graph"
    />
    <figcaption class="text-center text-md text-gray-500">System Up-Time Graph</figcaption>
  </figure>
</div>

### Test Setups

#### Insulated Enclosure

I built an enclosure from aluminum extrusions and insulating foam to speed up thermal cycling for an accelerated lifecycle test. I installed ducting leading to an air chiller, controlled by a relay tapped into the system fans. This allowed the enclosure to retain heat during the heating phase and circulate chilled air during the cooling phase, reducing both the system heating and cooling times. This resulted in an overall reduction in the thermal cycling time from 6 hours to 4 and will substantially increase the effectiveness of the accelerated lifecycle test over the coming months and years.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">  
    <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/thermalEnclosureBlurred.jpg"
      alt="Insulated Enclosure for Accelerated Life-Cycle Testing"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Insulated Enclosure for Accelerated Life-Cycle Testing"
    />
    <figcaption class="text-center text-md text-gray-500">Insulated Enclosure for Accelerated Life-Cycle Testing</figcaption>
  </figure>

  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/ductingBlurred.jpg"
      alt="Insulated Enclosure Air-Chiller Ducting"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Insulated Enclosure Air-Chiller Ducting"
    />
    <figcaption class="text-center text-md text-gray-500">Insulated Enclosure Air-Chiller Ducting</figcaption>
  </figure>
</div>


#### Acoustic Barriers

I built five 4'x8' acoustic barriers to block noise from high-power electronics. Each barrier had frames and triangular bases built from 1x4s and 2x4s, with an acoustic insulation panel over top.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">  
    <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/acousticBarrierSingleBlurred.jpg"
      alt="Back view of acoustic barrier"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Back view of acoustic barrier"
    />
  </figure>

  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/acousticBarriersBlurred.jpg"
      alt="Five acoustic barriers"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="Five acoustic barriers"
    />
  </figure>
</div>


#### System Controller and Stand Build

I assembled a system controller computer, which interfaces with the battery module and runs the BMS. This involved wiring, networking, installing custom operating systems, and going through the software commissioning process. I also built a stand to hold the controller at a specific height for EMC testing.

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-center js-gallery">  
    <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/pcOnStandBlurred.jpg"
      alt="System controller computer on EMC stand"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
            transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="System Controller on EMC Stand"
    />
    <figcaption class="text-center text-md text-gray-500">System Controller on EMC Stand</figcaption>
  </figure>

  <figure class="max-w-xl mx-auto">
    <img
      src="/experience/corvusTest/pcStandBlurred.jpg"
      alt="EMC stand for system controller"
      class="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-sm cursor-pointer
              transform transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:border-gray-400"
      data-caption="EMC Stand"
    />
    <figcaption class="text-center text-md text-gray-500">EMC Stand</figcaption>
  </figure>
</div>
