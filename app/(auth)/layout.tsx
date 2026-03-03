"use client";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full md:w-130 h-120 bg-secondary rounded-2xl shadow-2xl p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
