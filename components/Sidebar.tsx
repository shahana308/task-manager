'use client';

import {
  AppstoreOutlined,
  DashboardOutlined,
  FileTextOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';

const navItems = [
  {
    icon: <DashboardOutlined />,
    label: 'Board',
    active: true,
    available: true,
  },
  {
    icon: <FileTextOutlined />,
    label: 'Docs',
    active: false,
    available: false,
  },
  {
    icon: <BorderOutlined />,
    label: 'Whiteboard',
    active: false,
    available: false,
  },
];

const Sidebar = () => {
  return (
    <aside className='flex flex-col w-1/6 min-h-screen bg-pastel-purple-light px-3 py-5'>

      {/* Logo */}
      <div className='flex items-center gap-2 px-2 mb-8'>
        <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0'>
          <AppstoreOutlined className='text-pastel-purple-dark text-sm' />
        </div>
        <h1 className='text-sm font-bold text-gray-800 tracking-widest'>
          PROJECTLY
        </h1>
      </div>

      {/* Navigation */}
      <nav className='flex flex-col gap-1 flex-1'>
        {navItems.map((item) => (
          <Tooltip
            key={item.label}
            title={!item.available ? 'Coming soon' : ''}
            placement='right'
          >
            <button
              disabled={!item.available}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg
                text-sm font-medium w-full text-left
                transition-colors duration-150
                ${item.active
                  ? 'bg-white text-pastel-purple-dark shadow-sm'
                  : item.available
                    ? 'text-gray-500 hover:bg-white/60 hover:text-gray-700 cursor-pointer'
                    : 'text-gray-300 cursor-not-allowed'
                }
              `}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
              {/* Coming Soon Badge */}
              {!item.available && (
                <span className='ml-auto text-[9px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-full font-medium'>
                  Soon
                </span>
              )}
            </button>
          </Tooltip>
        ))}
      </nav>

      {/* User Profile */}
      <div className='flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/60 cursor-pointer transition-colors'>
        <Avatar
          size={32}
          src='https://i.pravatar.cc/150?img=3'
          alt='Alex Chen'
        />
        <div className='flex flex-col min-w-0'>
          <span className='text-xs font-semibold text-gray-700 truncate'>
            Alex Chen
          </span>
          <span className='text-[10px] text-gray-400'>
            Project Manager
          </span>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;