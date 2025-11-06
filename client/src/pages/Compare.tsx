import Container from "@/components/Container";
import { AppSidebar } from "@/components/custom/compare/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Compare() {
  return (
      <main>
          <Container>
              <SidebarProvider>
                  <AppSidebar />
                  <main>
                      {/* <SidebarTrigger /> */}
                  </main>
              </SidebarProvider>
          </Container>
      </main>
  )
}
