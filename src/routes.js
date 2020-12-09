import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const SendEmails = React.lazy(() => import('./Demo/UIElements/Basic/Emails'));
const User = React.lazy(() => import('./Demo/UIElements/Basic/User'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/vendor/', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/contact', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/enquiries', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/completed-orders', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/refunds', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/orders', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/orders/details', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/ratings', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/vendor/details', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/add-coupons', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/add-offers', exact: true, name: 'Documentation', component: OtherDocs },
    { path: '/send-email', exact: true, name: 'Send Emails', component: SendEmails },
    { path: '/users', exact: true, name: 'Users', component: User },
];

export default routes;