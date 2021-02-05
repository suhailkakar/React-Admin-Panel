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

            ]
        }