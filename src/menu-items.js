export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                },
                {
                    id: 'vendor',
                    title: 'Vendors',
                    type: 'collapse',
                    icon: 'feather icon-book                    ',
                    children: [

                        {
                            id: 'weddinghall',
                            title: 'Wedding Hall',
                            type: 'item',
                            url: '/weddinghall'
                        },
                        {
                            id: 'djmusic',
                            title: 'DJ Music',
                            type: 'item',
                            url: '/djmusic'
                        },
                        {
                            id: 'photographer',
                            title: 'Photographer',
                            type: 'item',
                            url: '/photographer'
                        },
                        {
                            id: 'makeupartist',
                            title: 'Makeup Artist',
                            type: 'item',
                            url: '/makeupartist'
                        },
                        {
                            id: 'eventmanagement',
                            title: 'Event Management',
                            type: 'item',
                            url: '/eventmanagement'
                        },
                        {
                            id: 'decorators',
                            title: 'Decorators',
                            type: 'item',
                            url: '/decorators'
                        },
                    ]
                },
                {
                    id: 'user',
                    title: 'Users',
                    type: 'item',
                    url: '/users',
                    icon: 'feather icon-user',
                },
                {
                    id: 'orders',
                    title: 'Orders',
                    type: 'item',
                    url: '/orders',
                    icon: 'feather icon-shopping-cart                    ',
                },
                {
                    id: 'coupons',
                    title: 'Coupons and Offers ',
                    type: 'collapse',
                    icon: 'feather icon-file                    ',
                    children: [
                       
                        {
                            id: 'addcoupon',
                            title: 'Add Coupons',
                            type: 'item',
                            url: '/add-coupons'
                        },
                        {
                            id: 'badges',
                            title: 'Add Offers',
                            type: 'item',
                            url: '/add-offers'
                        },
                    ]
                },
           
                {
                    id: 'bootstrap',
                    title: 'Ratings & Reviews Page                    ',
                    type: 'item',
                    icon: 'feather icon-star',
                    url: '/ratings'
                },
                {
                    id: 'contact',
                    title: 'Contact & Gen. Enquiries ',
                    type: 'collapse',
                    icon: 'feather icon-phone',
                    children: [
                        {
                            id: 'button',
                            title: 'Contact',
                            type: 'item',
                            url: '/contact'
                        },
                        {
                            id: 'badges',
                            title: 'Enquiries',
                            type: 'item',
                            url: '/enquiries'
                        },
                       
                    ]
                },
           
                {
                    id: 'card',
                    title: 'Payment',
                    type: 'collapse',
                    icon: 'feather icon-credit-card                    ',
                    children: [
                        {
                            id: 'button',
                            title: 'Completed Orders',
                            type: 'item',
                            url: '/completed-orders'
                        },
                        {
                            id: 'badges',
                            title: 'Refunds',
                            type: 'item',
                            url: '/refunds'
                        },
                       
                    ]
                },
                {
                    id: 'legal',
                    title: 'Legal',
                    type: 'collapse',
                    icon: 'feather icon-file-text                    ',
                    children: [
                        {
                            id: 'terms',
                            title: 'Terms and Conditions',
                            type: 'item',
                            url: '/termsandconditions'
                        },
                        {
                            id: 'policy',
                            title: 'Privacy Policy',
                            type: 'item',
                            url: '/privacypolicy'
                        },

                    ]
                },

                {
                    id: 'logout',
                    title: 'Logout',
                    type: 'item',
                    icon: 'feather icon-power',
                    url: "/auth/signin-1"
                },

            ]
        },
        // {
        //     id: 'navigation',
        //     title: 'Navigation',
        //     type: 'group',
        //     icon: 'icon-navigation',
        //     children: [
        //         {
        //             id: 'dashboard',
        //             title: 'Dashboard',
        //             type: 'item',
        //             url: '/dashboard/default',
        //             icon: 'feather icon-home',
        //         }
        //     ]
        // },
        // {
        //     id: 'ui-element',
        //     title: 'UI ELEMENT',
        //     type: 'group',
        //     icon: 'icon-ui',
        //     children: [
        //         {
        //             id: 'basic',
        //             title: 'Component',
        //             type: 'collapse',
        //             icon: 'feather icon-box',
        //             children: [
        //                 {
        //                     id: 'button',
        //                     title: 'Vendor',
        //                     type: 'item',
        //                     url: '/basic/button'
        //                 },
        //                 {
        //                     id: 'badges',
        //                     title: 'Badges',
        //                     type: 'item',
        //                     url: '/basic/badges'
        //                 },
        //                 {
        //                     id: 'breadcrumb-pagination',
        //                     title: 'Breadcrumb & Pagination',
        //                     type: 'item',
        //                     url: '/basic/breadcrumb-paging'
        //                 },
        //                 {
        //                     id: 'collapse',
        //                     title: 'Collapse',
        //                     type: 'item',
        //                     url: '/basic/collapse'
        //                 },
        //                 {
        //                     id: 'tabs-pills',
        //                     title: 'Tabs & Pills',
        //                     type: 'item',
        //                     url: '/basic/tabs-pills'
        //                 },
        //                 {
        //                     id: 'typography',
        //                     title: 'Typography',
        //                     type: 'item',
        //                     url: '/basic/typography'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     id: 'ui-forms',
        //     title: 'Forms & Tables',
        //     type: 'group',
        //     icon: 'icon-group',
        //     children: [
        //         {
        //             id: 'form-basic',
        //             title: 'Form Elements',
        //             type: 'item',
        //             url: '/forms/form-basic',
        //             icon: 'feather icon-file-text'
        //         },
        //         {
        //             id: 'bootstrap',
        //             title: 'Ratings & Reviews Page                    ',
        //             type: 'item',
        //             icon: 'feather icon-star',
        //             url: '/tables/bootstrap'
        //         }
        //     ]
        // },
        // {
        //     id: 'chart-maps',
        //     title: 'Chart & Maps',
        //     type: 'group',
        //     icon: 'icon-charts',
        //     children: [
        //         {
        //             id: 'charts',
        //             title: 'Charts',
        //             type: 'item',
        //             icon: 'feather icon-pie-chart',
        //             url: '/charts/nvd3'
        //         },
        //         {
        //             id: 'maps',
        //             title: 'Map',
        //             type: 'item',
        //             icon: 'feather icon-map',
        //             url: '/maps/google-map'
        //         }
        //     ]
        // },
        // {
        //     id: 'pages',
        //     title: 'Pages',
        //     type: 'group',
        //     icon: 'icon-pages',
        //     children: [
        //         {
        //             id: 'auth',
        //             title: 'Authentication',
        //             type: 'collapse',
        //             icon: 'feather icon-lock',
        //             badge: {
        //                 title: 'New',
        //                 type: 'label-danger'
        //             },
        //             children: [
        //                 {
        //                     id: 'signup-1',
        //                     title: 'Sign up',
        //                     type: 'item',
        //                     url: '/auth/signup-1',
        //                     target: true,
        //                     breadcrumbs: false
        //                 },
        //                 {
        //                     id: 'signin-1',
        //                     title: 'Sign in',
        //                     type: 'item',
        //                     url: '/auth/signin-1',
        //                     target: true,
        //                     breadcrumbs: false
        //                 }
        //             ]
        //         },

        //         {
        //             id: 'sample-page',
        //             title: 'Sample Page',
        //             type: 'item',
        //             url: '/sample-page',
        //             classes: 'nav-item',
        //             icon: 'feather icon-sidebar'
        //         },
        //         {
        //             id: 'docs',
        //             title: 'Documentation',
        //             type: 'item',
        //             url: '/docs',
        //             classes: 'nav-item',
        //             icon: 'feather icon-help-circle'
        //         },
        //         {
        //             id: 'menu-level',
        //             title: 'Menu Levels',
        //             type: 'collapse',
        //             icon: 'feather icon-menu',
        //             children: [
        //                 {
        //                     id: 'menu-level-1.1',
        //                     title: 'Menu Level 1.1',
        //                     type: 'item',
        //                     url: '#!',
        //                 },
        //                 {
        //                     id: 'menu-level-1.2',
        //                     title: 'Menu Level 2.2',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'menu-level-2.1',
        //                             title: 'Menu Level 2.1',
        //                             type: 'item',
        //                             url: '#',
        //                         },
        //                         {
        //                             id: 'menu-level-2.2',
        //                             title: 'Menu Level 2.2',
        //                             type: 'collapse',
        //                             children: [
        //                                 {
        //                                     id: 'menu-level-3.1',
        //                                     title: 'Menu Level 3.1',
        //                                     type: 'item',
        //                                     url: '#',
        //                                 },
        //                                 {
        //                                     id: 'menu-level-3.2',
        //                                     title: 'Menu Level 3.2',
        //                                     type: 'item',
        //                                     url: '#',
        //                                 }
        //                             ]
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'disabled-menu',
        //             title: 'Disabled Menu',
        //             type: 'item',
        //             url: '#',
        //             classes: 'nav-item disabled',
        //             icon: 'feather icon-power'
        //         },
            ]
        }