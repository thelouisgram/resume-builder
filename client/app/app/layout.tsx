import Navbar from "@/components/Navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
        <div>
          <Navbar />
        <main className="">
          {children}
        </main>
      </div>
    </div>
  )
}