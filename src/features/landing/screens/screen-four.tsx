const ScreenFour = () => {
  return <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4">How It Works</h2>
            <p className="text-xl text-grey">Three simple steps to personalized recommendations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl mb-2">Answer Questions</h3>
              <p className="text-grey">
                Tell us about your investment goals, experience, and preferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl mb-2">Get Recommendations</h3>
              <p className="text-grey">
                Receive personalized investment recommendations based on your profile
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl mb-2">Track & Review</h3>
              <p className="text-grey">
                Access all your recommendations anytime from your dashboard
              </p>
            </div>
          </div>
        </div>
      </section>;
};

export default ScreenFour;
