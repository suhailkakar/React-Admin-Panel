import React from "react";
import $ from "jquery";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import("./Demo/Dashboard/Default"));
const Vendor = React.lazy(() =>import("./Demo/UIElements/Basic/Vendor"));
const Contact = React.lazy(() => import("./Demo/UIElements/Basic/Contact") );
const Enquiries  = React.lazy(() => import("./Demo/UIElements/Basic/Enquiries"));
const Completed_Orders = React.lazy(() => import("./Demo/UIElements/Basic/Completed_Orders"));
const Refund = React.lazy(() => import("./Demo/UIElements/Basic/Refund"));
const Orders = React.lazy(() => import("./Demo/UIElements/Basic/Orders") );

const OrderDetails = React.lazy(() => import("./Demo/Forms/OrderDetails"));
const Rating = React.lazy(() => import("./Demo/Tables/Rating"));

const WeddingHallDetails = React.lazy(() => import("./Demo/Business Categories/Details/weddinghall"));
const Coupons = React.lazy(() => import("./Demo/Other/Coupons"));

const Offers = React.lazy(() => import("./Demo/Other/Offers"));
const SendEmails = React.lazy(() => import("./Demo/UIElements/Basic/Emails"));
const User = React.lazy(() => import("./Demo/UIElements/Basic/User"));
const WeddingHall = React.lazy(() => import("./Demo/Business Categories/WeddingHall"));
const Photographer = React.lazy(() => import("./Demo/Business Categories/Photographer"));
const DjMusic = React.lazy(() => import("./Demo/Business Categories/DjMusic"));
const EventManagement = React.lazy(() => import("./Demo/Business Categories/EventManagement") );
const MakeupArtist = React.lazy(() => import("./Demo/Business Categories/MakeupArtist"));
const Decorators = React.lazy(() =>import("./Demo/Business Categories/Decorators"));
const DJMusicDetails = React.lazy(() => import("./Demo/Business Categories/Details/djmusic"));
const DecoratorDetail = React.lazy(() => import("./Demo/Business Categories/Details/decorator"));
const PhotographerDetails = React.lazy(() => import("./Demo/Business Categories/Details/photographer"));
const MakeupArtistDetail = React.lazy(() => import("./Demo/Business Categories/Details/makeupartist"));
const TermsandConditions = React.lazy(() => import("./Demo/Legal/TermsandConditions") );
const PrivacyPolicy = React.lazy(() => import("./Demo/Legal/PrivacyPolicy"));

const routes = [
    {
        path: "/dashboard/default",
        exact: true,
        name: "Default",
        component: DashboardDefault,
    },
    {
        path: "/vendor/",
        exact: true,
        name: "Basic Button",
        component: Vendor,
    },
    {
        path: "/contact",
        exact: true,
        name: "Basic Badges",
        component: Contact,
    },
    {
        path: "/enquiries",
        exact: true,
        name: "Basic Breadcrumb Pagination",
        component: Enquiries ,
    },
    {
        path: "/completed-orders",
        exact: true,
        name: "Basic Collapse",
        component: Completed_Orders,
    },
    {
        path: "/refunds",
        exact: true,
        name: "Basic Tabs & Pills",
        component: Refund,
    },
    {
        path: "/orders",
        exact: true,
        name: "Basic Typography",
        component: Orders,
    },
    {
        path: "/orders/details",
        exact: true,
        name: "Forms Elements",
        component: OrderDetails,
    },
    {
        path: "/ratings",
        exact: true,
        name: "Bootstrap Table",
        component: Rating,
    },
    {
        path: "/vendor/wedding_hall/details",
        exact: true,
        name: "WeddingHallDetails",
        component: WeddingHallDetails,
    },
    {
        path: "/add-coupons",
        exact: true,
        name: "Sample Page",
        component: Coupons,
    },
    {
        path: "/add-offers",
        exact: true,
        name: "Documentation",
        component: Offers,
    },
    {
        path: "/send-email",
        exact: true,
        name: "Send Emails",
        component: SendEmails,
    },
    { path: "/users", exact: true, name: "Users", component: User },
    {
        path: "/weddinghall",
        exact: true,
        name: "Wedding Hall",
        component: WeddingHall,
    },
    {
        path: "/photographer",
        exact: true,
        name: "Photographer",
        component: Photographer,
    },
    { path: "/djmusic", exact: true, name: "DjMusic", component: DjMusic },
    {
        path: "/eventmanagement",
        exact: true,
        name: "EventManagement",
        component: EventManagement,
    },
    {
        path: "/makeupartist",
        exact: true,
        name: "MakeupArtist",
        component: MakeupArtist,
    },
    {
        path: "/decorators",
        exact: true,
        name: "Decorators",
        component: Decorators,
    },
    {
        path: "/vendor/djmusic/details",
        exact: true,
        name: "DJMusicDetails",
        component: DJMusicDetails,
    },
    {
        path: "/vendor/photographer/details",
        exact: true,
        name: "PhotographerDetails",
        component: PhotographerDetails,
    },
    {
        path: "/vendor/makeupartist/details",
        exact: true,
        name: "MakeupArtistDetail",
        component: MakeupArtistDetail,
    },
    {
        path: "/vendor/decorator/details",
        exact: true,
        name: "DecoratorDetail",
        component: DecoratorDetail,
    },
    {
        path: "/termsandconditions",
        exact: true,
        name: "TermsandConditions",
        component: TermsandConditions,
    },
    {
        path: "/privacypolicy",
        exact: true,
        name: "PrivacyPolicy",
        component: PrivacyPolicy,
    },
];

export default routes;
