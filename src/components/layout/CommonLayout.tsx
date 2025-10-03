interface CommonLayoutProps {
  // Define any props if needed in the future
  children?: React.ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="grow-0 w-11/12 mx-auto">{children}</div>
    </div>
  );
};

export default CommonLayout;
