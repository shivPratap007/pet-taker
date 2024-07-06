import BackgroundPattern from "@/components/BackgroundPattern";
import AppHeader from "../../../components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BackgroundPattern />
      <div className="flex min-h-screen flex-col max-w-[1050px] mx-auto">
        <AppHeader />
        {children}
        <AppFooter />
      </div>
    </>
  );
}
