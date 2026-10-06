import Invoice from "@/src/components1/Finance/Invoices/Invoice";
import Header from "../../components1/Header/Header";
import Sidebar from "../../components1/Sidebar/sidebar";

function invoicesPage() {
  return (
    <>
      <Sidebar />
      <Header />
      <Invoice/>
    </>
  );
}

export default invoicesPage;