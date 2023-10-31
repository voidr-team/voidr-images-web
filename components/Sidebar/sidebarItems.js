import {
  BarChart3,
  CreditCard,
  FolderOpen,
  Settings,
  UserPlus,
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
      label: 'Plans',
      icon: CreditCard,
      link: '/common/plans',
    },
    {
      id: 2,
      label: 'Referral',
      icon: UserPlus,
      link: '/common/referral',
    },
  ],
}

export default sidebarItems
