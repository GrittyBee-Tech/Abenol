export const NAV_SCHEMA = [
  {
    name: 'Home',
    link: '/',
  },

  {
    name: 'About Us',
    link: '/about',
    children: [
      { name: 'Vision', link: '/about#vision', type: 'hash' },
      { name: 'Mission', link: '/about#vision', type: 'hash' },
      { name: 'Our Core Values', link: '/about#corevalues', type: 'hash' },
      { name: 'Our Story', link: '/about#story', type: 'hash' },
      { name: 'PROOF Leadership', link: '/about#leadership', type: 'hash' },
    ],
  },
  {
    name: 'Impact and Achievements',
    link: '/achievements',
  },
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'Get involved',
    link: '/get-involved',

    children: [
      {
        name: 'Volunteer with Us',
        link: '/get-involved#collaborate',
        type: 'hash',
      },
      {
        name: 'Make a Donation',
        link: '/get-involved#collaborate',
        type: 'hash',
      },
      {
        name: 'Invite Us to Your Community',
        link: '#collaborate',
        type: 'hash',
      },
    ],
  },
];
