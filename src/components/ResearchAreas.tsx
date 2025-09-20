import React from 'react';
import { Database, Shield, Zap, Layers, Globe, Brain } from 'lucide-react';

const ResearchAreas = () => {
  const areas = [
    {
      icon: Database,
      title: "Distributed Storage",
      description: "Revolutionary approaches to decentralized data storage and retrieval systems",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Zero-Knowledge Proofs",
      description: "Advanced cryptographic protocols for privacy-preserving blockchain interactions",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Layer 2 Scaling",
      description: "High-performance scaling solutions for next-generation blockchain networks",
      color: "cyan"
    },
    {
      icon: Layers,
      title: "Cross-Chain Protocols",
      description: "Seamless interoperability solutions connecting diverse blockchain ecosystems",
      color: "purple"
    },
    {
      icon: Globe,
      title: "Decentralized Identity",
      description: "Self-sovereign identity systems for the decentralized web",
      color: "blue"
    },
    {
      icon: Brain,
      title: "AI + Blockchain",
      description: "Convergence of artificial intelligence and distributed ledger technologies",
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return 'text-purple-500 group-hover:text-purple-600';
      case 'blue':
        return 'text-blue-500 group-hover:text-blue-600';
      case 'cyan':
        return 'text-cyan-500 group-hover:text-cyan-600';
      default:
        return 'text-purple-500 group-hover:text-purple-600';
    }
  };

  return (
    <section id="research" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our multidisciplinary research teams are pushing the boundaries of Web3 technology across these critical domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div key={index} className="group bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all cursor-pointer">
                <Icon className={`w-12 h-12 mb-6 ${getColorClasses(area.color)}`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;