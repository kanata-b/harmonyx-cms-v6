// Navigation types for NavigationBar component

export interface NavigationItem {
  id: string;
  title: string;
  url?: string | null | undefined;
  page?:
    | {
        permalink?: string | null | undefined;
      }
    | null
    | undefined;
  children?: NavigationItem[] | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Additional Directus fields
}

export interface Navigation {
  id: string;
  title?: string | null | undefined;
  items: NavigationItem[]; // Accept complex Directus structure
}

export interface DirectusFile {
  id: string;
  filename_download?: string;
  // Add more DirectusFile properties as needed
}

export interface GlobalsData {
  logo?: string | DirectusFile | null;
  logo_dark_mode?: string | DirectusFile | null;
  description?: string | null;
  social_links?:
    | {
        service: string;
        url: string;
      }[]
    | null;
}

export interface NavigationBarProps {
  navigation: Navigation | null;
  globals: GlobalsData;
}

// Footer navigation types
export interface FooterNavigationItem {
  id: string;
  title: string;
  url?: string | null | undefined;
  page?:
    | {
        permalink?: string | null | undefined;
      }
    | null
    | undefined;
  children?: FooterNavigationItem[] | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Additional Directus fields
}

export interface FooterNavigation {
  id: string;
  title?: string | null | undefined;
  items: FooterNavigationItem[]; // Accept complex Directus structure
}

export interface FooterProps {
  navigation: FooterNavigation | null;
  globals: GlobalsData;
}

// Visual Editing Layout types
export interface VisualEditingLayoutProps {
  headerNavigation: Navigation | null;
  footerNavigation: FooterNavigation | null;
  globals: GlobalsData | null;
  children: React.ReactNode;
}
