import SatisfactionChart from "./charts/CustomSatisfactionChart";
import RevenueChart from "./charts/RevenueChart";
import TargetReality from "./charts/TargetRealityChart";
import VisitorChart from "./charts/VisitorChart";
import VolumeChart from "./charts/VolumeChart";
import DashboardSection from "./DashboardSection";
import SalesCards from "./widgets/SalesCard";
import SalesMap from "./widgets/SalesMap";
import TopProductsTable from "./widgets/TopProduct";
import UsersTable from "./widgets/UsersTable";

const DashboardContent = () => {
  return (
    <div className="flex flex-col gap-[32px] !p-[1.5rem]">
      <section className="flex gap-[31px]">
        <DashboardSection
          title="Today's Sales"
          subtitle="Sales Summary"
          width="w-[877px]"
          height="h-[340px]"
          //   action={<ExportButton />}
        >
          <SalesCards />
        </DashboardSection>

        <DashboardSection
          title="Visitor Insights"
          width="w-[591px]"
          height="h-[340px]"
        >
          <VisitorChart />
        </DashboardSection>
      </section>

      <section className="flex gap-[31px]">
        <DashboardSection
          title="Total Revenue"
          width="w-[645px]"
          height="h-[380px]"
        >
          <RevenueChart />
        </DashboardSection>

        <DashboardSection
          title="Customer Satisfaction"
          width="w-[420px]"
          height="h-[380px]"
        >
          <SatisfactionChart />
        </DashboardSection>

        <DashboardSection
          title="Target vs Reality"
          width="w-[371px]"
          height="h-[380px]"
        >
          <TargetReality />
        </DashboardSection>
      </section>

      <section className="flex gap-[31px]">
        <DashboardSection
          title="Top Products"
          width="w-[645px]"
          height="h-[351px]"
        >
          <TopProductsTable />
        </DashboardSection>

        <DashboardSection
          title="Sales Mapping by Country"
          width="w-[421px]"
          height="h-[351px]"
        >
          <SalesMap />
        </DashboardSection>

        <DashboardSection
          title="Volume vs Service Level"
          width="w-[371px]"
          height="h-[349px]"
        >
          <VolumeChart />
        </DashboardSection>
      </section>

      <section>
        <DashboardSection
          title="Users Data"
          subtitle="API Integration Table"
          height="h-auto"
        >
          <UsersTable />
        </DashboardSection>
      </section>
    </div>
  );
};

export default DashboardContent;
