import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Checkbox } from "@/components/ui/checkbox"

 
export function AppSidebar() {
  return (
      <Sidebar variant="sidebar" className="relative border-0">
          <SidebarContent className="bg-white dark:bg-zinc-950">
              <div>
                  <h2>Kategoriyalar</h2>
                  <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Telefonlar</Label>
                  </div>
              </div>
              <SidebarGroup />
              <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
      </Sidebar>
  )
}