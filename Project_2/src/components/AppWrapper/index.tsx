export const AppWrapper = ({ children }: any) => (
  <div className="App">
    <div className="py-12 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">{children}</div>
      </div>
    </div>
  </div>
);
