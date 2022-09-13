const AppLogoContainer = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <img
        className="block lg:hidden h-8 w-auto"
        src="/assets/logo/logo_transparent.png"
        alt="Workflow"
      />
      <img
        className="hidden lg:block h-8 w-auto"
        src="/assets/logo/logo_transparent.png"
        alt="Workflow"
      />
    </div>
  );
};

export default AppLogoContainer;
