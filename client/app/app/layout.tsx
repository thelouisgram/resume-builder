export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
        <div>
          <h1 className="text-red-300">Layout</h1>
        <main className="">
          {children}
        </main>
      </div>
    </div>
  )
}