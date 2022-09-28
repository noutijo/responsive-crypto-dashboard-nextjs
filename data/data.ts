import { menuItemType } from "@/types/types";

//menu items
export const menuItemsData: menuItemType[] = [
    {
        title: `Dashboard`,
        url: "/",
        iconName: `bi-grid-1x2-fill`,
    },
    {
        title: `Exchange`,
        url: "/exchange",
        iconName: `bi-currency-exchange`,
    },
    {
        title: `Wallet`,
        url: "/wallet",
        iconName: `bi-wallet-fill`,
    },
    {
        title: `Transactions`,
        url: "/transactions",
        iconName: `bi-cash`,
    },
    {
        title: `Analytics`,
        url: "/analytics",
        iconName: `bi-activity`,
    },
    {
        title: `Messages`,
        url: "/messages",
        iconName: `bi-chat-left-text-fill`,
    },
    {
        title: `Help Center`,
        url: "/help",
        iconName: `bi-info-circle-fill`,
    },
    {
        title: `Settings`,
        url: "/settings",
        iconName: `bi-gear-wide`,
    },
];