import {
  BarChart3,
  CreditCard,
  FolderOpen,
  Settings,
  LogOut,
} from 'lucide-react'

const sidebarItems = {
  images: [
    {
      id: 1,
      label: 'Dashboard',
      icon: BarChart3,
      link: '/images/dashboard',
    },
    {
      id: 2,
      label: 'Files',
      icon: FolderOpen,
      link: '/images/files',
    },
    {
      id: 3,
      label: 'Settings',
      icon: Settings,
      link: '/images/settings',
    },
  ],
  common: [
    {
      id: 1,
      label: 'Billing',
      icon: CreditCard,
      link: '/common/billing',
    },
    {
      id: 2,
      label: 'Log Out',
      icon: LogOut,
      link: '/logout',
    },
  ],
}

export default sidebarItems
