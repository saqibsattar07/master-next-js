import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({children}: {children: any}) {
    return (
      <section>
        <AdminHeader />
        {children}
      </section>
    );
  }