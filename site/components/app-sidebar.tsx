"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Image as ImageIcon,
  Palette,
  Type,
  MessageSquare,
  Rocket,
  Download,
  FileJson,
  ExternalLink,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { organizationInfo } from "@/lib/brand-data";

const navItems = [
  { title: "Overview", url: "/", icon: Home },
  { title: "Logo", url: "/logo", icon: ImageIcon },
  { title: "Colors", url: "/colors", icon: Palette },
  { title: "Typography", url: "/typography", icon: Type },
  { title: "Voice & Tone", url: "/voice", icon: MessageSquare },
  { title: "LDC", url: "/ldc", icon: Rocket },
  { title: "Downloads", url: "/downloads", icon: Download },
];

const resourceItems = [
  { title: "brand.json", url: "/brand.json", icon: FileJson },
  { title: "llms.txt", url: "/llms.txt", icon: FileJson },
];

export function AppSidebar() {
  const pathname = usePathname();
  const norm = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
  const current = norm(pathname);

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-3" data-testid="link-home-logo">
          <img
            src="/favicon.svg"
            alt="The Moon Society"
            className="h-10 w-10 rounded-lg object-contain"
          />
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-sm leading-tight">
              The Moon Society
            </span>
            <span className="text-xs text-muted-foreground">Brand Guide</span>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Guidelines</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={current === norm(item.url)}>
                    <Link
                      href={item.url}
                      data-testid={`link-nav-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resourceItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-resource-${item.title.replace(".", "-")}`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      <ExternalLink className="ml-auto h-3 w-3 text-muted-foreground" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center justify-between gap-2">
          <a
            href={organizationInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-main-website"
          >
            {organizationInfo.website.replace("https://", "")}
          </a>
          <ThemeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
