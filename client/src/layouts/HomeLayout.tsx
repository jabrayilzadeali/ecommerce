import { ThemeProvider } from "@/components/theme-provider"
import { Outlet } from "react-router";
import Navbar from "@/components/custom/Navbar"

export default function HomeLayout() {
  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Navbar />
          <Outlet />
      </ThemeProvider>
  )
}