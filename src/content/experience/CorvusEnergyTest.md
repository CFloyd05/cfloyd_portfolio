---
company: "Corvus Energy - Test Team"
title: "Test Engineering Co-op Student"
image: "/experience/corvusTest/CorvusLogo.png"
dateRange: "May 2026 – August 2026"
location: "Richmond, BC, Canada"
skills:
  - Test Planning, Documentation, and Execution
  - Building Equipment Under Test and Test Setups
  - Python Data-Analysis
---

***
Page in progress: Images coming soon
***

## Who is Corvus Energy

Corvus Energy is the world's leading supplier of battery energy storage systems for the maritime industry; powering electric and hybrid marine vessels.

## My Role

From May to August 2026, I worked on the test team at Corvus, supporting both the certification/compliance team and the reliability team. My work focused on testing high-voltage battery systems, building test hardware, and writing Python tools to analyze reliability data from customer vessels.

## My Projects

### Tests

#### Certification Test Journals

I supported product certification testing for four different class societies, documenting test procedures, deviations, and results in formal test journals. These tests focused on verifying the system's safety and performance.

#### Thermal Build

I built a battery module with ~40 internal thermocouples to characterize a new cell type. This involved extensive communication and collaboration with the production team to modify existing processes, including robotic laser welding and the existing fixturing and jigs.

#### Capacitance and Resistance Characterization

Using an LCR meter and a four-wire micro-ohm meter, I measured capacitances and resistances throughout the battery system. I measured power-path, contactor, and fuse resistances, and developed a model to predict system capacitance based on configuration details. The results helped the team better understand the system and validate design decisions, and served as a pre-check for EMC testing.

#### Safety Fault Reaction Time

To validate the system's safety response, I used a sensor breakout board to simulate a cell over-temperature event, which should open the contactors. I set up a DAQ system on both the temperature sensor and the customer-side battery terminals to measure the system reaction time, and confirmed it was within the required spec.


### Data Analysis Tools (Python)

#### Thermal Cycle Fatigue Calculator

I wrote a Python tool that calculates system fatigue due to thermal cycling using a modified Coffin-Manson equation. It processes large amounts of raw temperature data (years of measurements across ~40 channels, logged every 30 minutes) and outputs a relative damage value for each customer system. These values can be compared to accelerated lifecycle tests to predict system failures and validate reliability estimates. The tool has already improved the accuracy of our accelerated lifecycle tests.

#### System Availability Analyzer

Using system logs from customer vessels, I wrote a script to calculate system availability. I automated the process as much as possible, making it quick for the reliability team to check different systems.

### Test Setups

#### Insulated Enclosure

I built an enclosure from aluminum extrusions and insulating foam to speed up thermal cycling for an accelerated lifecycle test. I installed ducting leading to an air chiller, controlled by a relay tapped into the system fans. This allowed the enclosure to retain heat during the heating phase and circulate chilled air during the cooling phase, reducing both the system heating and cooling times. This resulted in an overall reduction in the thermal cycling time from 6 hours to 4 and will substantially increase the effectiveness of the accelerated lifecycle test over the coming months and years.

#### Acoustic Barriers

I built five 4'x8' acoustic barriers to block noise from high-power electronics. Each barrier had frames and triangular bases built from 1x4s and 2x4s, with an acoustic insulation panel over top.

#### System Controller and Stand Build

I assembled a system controller computer, which interfaces with the battery module and runs the BMS. This involved wiring, networking, installing custom operating systems, and going through the software commissioning process. I also built a stand to hold the controller at a specific height for EMC testing.
