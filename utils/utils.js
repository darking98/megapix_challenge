import {
  faHouse,
  faChartSimple,
  faBoxArchive,
  faStore,
  faMoneyBill
} from '@fortawesome/free-solid-svg-icons'
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineStorefront } from "react-icons/md";
import { LiaBoxSolid, LiaChartBarSolid  } from "react-icons/lia";
import { TbArrowsExchange } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";

export const sidebarItems = [
  {
    icon: <AiOutlineHome />,
    title: 'Home',
    path: '/dashboard'
  },
  {
    icon: <CiMoneyBill />,
    title: 'Cobrar',
    path: '/dashboard/cobrar'
  },
  {
    icon: <MdOutlineStorefront />,
    title: 'Tienda',
    path: '/dashboard/tienda'
  },
  {
    icon: <LiaBoxSolid/>,
    title: 'Actividad',
    path: '/dashboard/actividad'
  },
  {
    icon: <LiaChartBarSolid/>,
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
        icon: <CiMoneyBill />,
        title: 'Cobrar',
        path: '/dashboard/cobrar'
      },
      {
        icon: <CiMoneyBill />,
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
