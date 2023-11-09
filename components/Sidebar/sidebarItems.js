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
      label: 'common:dashboard',
      icon: BarChart3,
      link: '/images/dashboard',
    },
    {
      id: 2,
      label: 'common:files',
      icon: FolderOpen,
      link: '/images/files',
    },
    {
      id: 3,
      label: 'common:settings',
      icon: Settings,
      link: '/images/settings',
    },
  ],
  common: [
    {
      id: 1,
      label: 'common:billing',
      icon: CreditCard,
      link: '/common/billing',
    },
    {
      id: 2,
      label: 'common:log_out',
      icon: LogOut,
      link: '/logout',
    },
  ],
}

export default sidebarItems
