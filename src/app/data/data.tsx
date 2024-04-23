import iconLogo from './../../assets/icons/logo.svg';
import iconAnalytics from './../../assets/icons/nav_analytics.svg';
import iconChat from './../../assets/icons/nav_chat.svg';
import iconCalendar from './../../assets/icons/nav_calendar.svg';
import iconProject from './../../assets/icons/nav_project.svg';
import iconWidgets from './../../assets/icons/nav_widgets.svg';
import iconMeetings from './../../assets/icons/nav_meetings.svg';
import iconLogout from './../../assets/icons/nav_logout.svg';

type NavItemType = {
  id: number;
  title: string;
  icon: string;
  to: string;
};

type NavbarType = {
  logo: {
    title: string;
    icon: string;
  };
  nav: NavItemType[];
};

export const dataNavbar = (): NavbarType => ({
  // export const dataNavbar = (navItem: number): NavbarType => ({
  logo: {
    title: 'xenon',
    icon: iconLogo,
  },
  nav: [
    {
      id: 1,
      title: 'Home',
      icon: iconAnalytics,
      to: '/',
    },
    {
      id: 2,
      title: 'Analytics',
      icon: iconAnalytics,
      to: '/analytics',
    },
    {
      id: 3,
      title: 'Chat',
      icon: iconChat,
      to: '/chat',
    },
    {
      id: 4,
      title: 'Calendar',
      icon: iconCalendar,
      to: '/calendar',
    },
    {
      id: 5,
      title: 'Project',
      icon: iconProject,
      to: '/project',
    },
    {
      id: 6,
      title: 'Widgets',
      icon: iconWidgets,
      to: '/widgets',
    },
    {
      id: 7,
      title: 'Meetings',
      icon: iconMeetings,
      to: '/meetings',
    },
    {
      id: 8,
      title: 'Logout',
      icon: iconLogout,
      to: '/logout',
    },
  ],
});
