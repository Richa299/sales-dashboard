type DashboardLayoutProps = {
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
};

const DashboardLayout = ({
  sidebar,
  header,
  children,
}: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-[#F5F6FA]">
      {sidebar}

      <main className="flex-1 p-8">
        {header}

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
