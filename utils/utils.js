import {
  faHouse,
  faChartSimple,
  faBoxArchive,
  faStore,
  faMoneyBill,
  faRightLeft
} from '@fortawesome/free-solid-svg-icons'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineStorefront } from "react-icons/md";
import { LiaBoxSolid, LiaChartBarSolid  } from "react-icons/lia";
import { TbArrowsExchange } from "react-icons/tb";

export const sidebarItems = [
  {
    icon: faHouse,
    title: 'Home',
    path: '/dashboard'
  },
  {
    icon: faMoneyBill,
    title: 'Cobrar',
    path: '/dashboard/cobrar'
  },
  {
    icon: faStore,
    title: 'Tienda',
    path: '/dashboard/tienda'
  },
  {
    icon: faBoxArchive,
    title: 'Actividad',
    path: '/dashboard/actividad'
  },
  {
    icon: faChartSimple,
    title: 'Reportes',
    path: '/dashboard/reportes'
  }
]

export const navbarMobileItems = [
  {
    icon: <AiOutlineHome />,
    title: 'Home',
    path: '/dashboard',
    isMain: false
  },
  {
    icon: <MdOutlineStorefront/>,
    title: 'Tienda',
    path: '/dashboard/tienda',
    isMain: false
  },
  {
    icon: <TbArrowsExchange/>,
    isMain: true,
    childrens: [
      {
        icon: faMoneyBill,
        title: 'Cobrar',
        path: '/dashboard/cobrar'
      }
    ]
  },
  {
    icon: <LiaBoxSolid/>,
    title: 'Actividad',
    path: '/dashboard/actividad',
    isMain: false
  },
  {
    icon: <LiaChartBarSolid/>,
    title: 'Reportes',
    path: '/dashboard/reportes',
    isMain: false
  }
]
