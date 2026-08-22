import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

const keyDrivers = [
  {
    title: "1. Digital Transformation Across Industries",
    points: [
      { label: "Digital India Initiative", description: "Government programs like Digital India, which aims to digitally empower the population, will boost demand for computer scientists and engineers." },
      { label: "Smart Cities and IoT", description: "Increasing implementation of smart city projects, IoT devices, and automation will drive the need for software developers, system integrators, and data engineers." },
      { label: "Automation and AI Adoption", description: "As businesses increasingly adopt artificial intelligence, machine learning, and automation, CSE professionals will be essential for developing, integrating, and managing these technologies." }
    ]
  },
  {
    title: "2. Rise of Artificial Intelligence and Machine Learning",
    points: [
      { label: "AI and ML Growth", description: "AI and ML will be central to the future of industries like healthcare, finance, retail, and logistics. India's AI market is expected to grow rapidly, creating a strong demand for AI researchers, ML engineers, and data scientists." },
      { label: "Smart Systems", description: "With AI-powered applications, autonomous vehicles, and robotic systems, CSE professionals will be needed to develop these intelligent solutions and ensure their efficient deployment." }
    ]
  },
  {
    title: "3. Cyber Security",
    points: [
      { label: "Increasing Cyber Threats", description: "With more data moving online and increasing cyber threats, the demand for cybersecurity experts is projected to rise. Organizations will need CSE professionals to design secure systems, prevent data breaches, and mitigate cyber risks." },
      { label: "Regulatory Compliance", description: "As the government enforces stronger data protection regulations, such as the Personal Data Protection Bill, companies will require professionals with expertise in data security and privacy laws." }
    ]
  },
  {
    title: "4. Cloud Computing and DevOps",
    points: [
      { label: "Cloud Adoption", description: "As companies migrate to the cloud, professionals skilled in cloud computing platforms like AWS, Azure, and Google Cloud will be in high demand. The cloud computing market in India is expected to grow at a strong pace." },
      { label: "DevOps and Automation", description: "Companies are increasingly embracing DevOps practices, which require engineers skilled in automating software development and deployment processes to enhance productivity and scalability." }
    ]
  },
  {
    title: "5. Big Data and Data Science",
    points: [
      { label: "Data-Driven Decision Making", description: "The need for professionals skilled in big data analytics, data mining, and data visualization will rise as companies increasingly rely on data-driven decision-making." },
      { label: "Data Engineers and Scientists", description: "With more data being collected and analyzed, demand for data scientists, data engineers, and business intelligence experts will increase as companies strive to gain actionable insights from large data sets." }
    ]
  },
  {
    title: "6. Blockchain and Fintech",
    points: [
      { label: "Blockchain Integration", description: "The use of blockchain technology in areas like supply chain management, financial services, and smart contracts is growing rapidly. Blockchain developers will be in high demand as businesses look to build secure, decentralized applications." },
      { label: "Fintech Boom", description: "India's fintech sector is booming, and software engineers with expertise in financial technologies will be sought after to build innovative payment systems, mobile banking apps, and secure financial products." }
    ]
  },
  {
    title: "7. Internet of Things (IoT)",
    points: [
      { label: "Smart Devices", description: "The rise of IoT devices in sectors like healthcare, agriculture, manufacturing, and home automation will create demand for CSE professionals to develop IoT platforms, design systems for device connectivity, and ensure data management and security." }
    ]
  },
  {
    title: "8. 5G Technology and Networking",
    points: [
      { label: "5G Rollout", description: "As 5G networks roll out in India, there will be a demand for software engineers and network specialists to design and manage the infrastructure necessary for 5G connectivity." },
      { label: "Telecommunications", description: "Professionals who can develop next-gen telecommunication systems and network infrastructure will be needed to support the massive growth of data transfer speeds, IoT, and autonomous systems." }
    ]
  },
  {
    title: "9. E-Commerce and Digital Content",
    points: [
      { label: "Growth of E-Commerce", description: "With the continued expansion of e-commerce platforms in India, companies will require professionals to build scalable and efficient e-commerce solutions. CSE professionals will be needed in areas like platform development, payment systems, and customer experience enhancement." },
      { label: "Content Creation and Management", description: "The digital content market (e.g., gaming, streaming, AR/VR) will also continue to expand, creating job opportunities for game developers, VR/AR engineers, and media and content management systems engineers." }
    ]
  }
];

export function KeyDriversAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="my-12">
      <h3 className="text-2xl md:text-3xl font-serif tracking-tight mb-6 text-foreground">
        Key Drivers of Employment Growth (2025–2030)
      </h3>
      <div 
        className="w-full flex flex-col"
        onMouseLeave={() => setActiveItem(null)}
      >
        {keyDrivers.map((driver, index) => {
          const isOpen = activeItem === index;

          return (
            <div 
              key={index}
              className="border-b border-border/50 overflow-hidden"
              onMouseEnter={() => setActiveItem(index)}
            >
              <div className="flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:text-primary">
                <span className="text-left font-bold text-base md:text-lg">
                  {driver.title}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pb-4 pt-0">
                      <ul className="space-y-4 pt-2 pb-4 text-muted-foreground text-sm md:text-base leading-relaxed pl-4 list-disc marker:text-primary/50">
                        {driver.points.map((point, pIndex) => (
                          <li key={pIndex}>
                            <strong className="text-foreground">{point.label}:</strong> {point.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
