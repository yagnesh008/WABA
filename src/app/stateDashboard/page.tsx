import StateDashboard from "@/src/components1/Dashboards/StateDashboard/StateDashboard";
import Header from "@/src/components1/Header/Header";
import Sidebar from "@/src/components1/Sidebar/sidebar";

export default function StateDashboardPage() {
  return (
    <>
      <Sidebar role="state" />
      <Header />
      <StateDashboard />
    </>
  );
}
