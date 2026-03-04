import { actionSteps } from "../components/page-data";

const ScreenFour = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-grey">
            Three simple steps to personalized recommendations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actionSteps.map((step) => (
            <div className="text-center cursor-pointer border shadow-sm p-8 rounded-lg" key={step.id}>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                {step.id}
              </div>
              <h3 className="text-xl mb-2">{step.title}</h3>
              <p className="text-grey">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenFour;
