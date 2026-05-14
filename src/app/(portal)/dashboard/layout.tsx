import DashboardNavbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#05070A] flex flex-col">
      <DashboardNavbar />
      {/* <Sidebar />
      <section className="flex-1 overflow-y-auto">{children}</section> */}
      <div className="flex flex-1">
        {/* Persistent Sidebar */}
        <Sidebar />

        {/* Main Page Content */}
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
