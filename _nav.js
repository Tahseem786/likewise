export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
      },
    },

    {
      name: 'User ',
      url: '/userlist',
      icon: 'icon-people',
      badge: {
        variant: 'info',
      },
    },
    // {
    //   name: 'Instruction ',
    //   url: '/instruction',
    //   icon: 'icon-info',
    //   badge: {
    //     variant: 'info',
    //   },
    // },
    {
      name: 'Instruction',
      url: '/ususerlisterlist',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Explanation',
          url: '/explanation',
          icon: 'icon-puzzle',
        },
        {
          name: 'Converse',
          url: '/converse',
          icon: 'icon-puzzle',
        },
        {
          name: 'List',
          url: '/list',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Images ',
      url: '/images',
      icon: 'icon-picture',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Languages ',
      url: '/language',
      icon: 'icon-bell',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Game List',
      url: '/game',
      icon: 'icon-bell',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Notification ',
      url: '/notification',
      icon: 'icon-bell',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Coin ',
      url: '/coin',
      icon: 'icon-wallet',
      badge: {
        variant: 'info',
      },
    },
    {
      name: 'Help and Support',
      url: '/help',
      icon: 'icon-question',
      badge: {
        variant: 'info',
      },
    },

    {
      name: 'Report ',
      url: '/report',
      icon: 'icon-doc',
      badge: {
        variant: 'info',
      },
    },

    // {
    //   name: 'Retailer List',
    //   url: '/retailer',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //   },
    // },
    // {
    //   name: 'Distributor',
    //   url: '/distributor',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //   },
    // },
    // {
    //   name: 'User List',
    //   url: '/userlist',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //   },
    // },
    // {
    //   name: 'Update Start Time',
    //   url: '/updatetime',
    //   icon: 'icon-speedometer',
    //   badge: {
    //     variant: 'info',
    //   },
    // },

  ],
};
