import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "99",
      description: "Perfect for small homes",
      features: [
        "Quarterly inspections",
        "Basic pest control",
        "Free re-service",
        "Phone support",
      ],
    },
    {
      name: "Professional",
      price: "199",
      description: "Ideal for larger homes",
      features: [
        "Monthly inspections",
        "Advanced pest control",
        "Priority re-service",
        "24/7 phone support",
        "Preventive treatments",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For commercial properties",
      features: [
        "Weekly inspections",
        "Comprehensive pest control",
        "Emergency service",
        "Dedicated manager",
        "Custom solutions",
        "Warranty included",
      ],
    },
  ];

  return (
    <section className="flex flex-col bg-[#f7f6f0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 heading-gradient">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your pest control needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col p-8 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === "number"
                      ? `$${plan.price}`
                      : plan.price}
                  </span>
                  {typeof plan.price === "number" && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="btn-primary w-full mt-auto">
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto grid gap-6">
            {[
              {
                q: "What's included in the basic plan?",
                a: "Our basic plan includes quarterly inspections, treatment for common household pests, and free re-service if pests return between scheduled visits.",
              },
              {
                q: "Can I upgrade my plan anytime?",
                a: "Yes, you can upgrade your plan at any time. We'll prorate the difference and adjust your service schedule accordingly.",
              },
              {
                q: "Do you offer any guarantees?",
                a: "Yes, we offer a 100% satisfaction guarantee. If you're not satisfied with our service, we'll return to re-treat at no additional cost.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
