import { menuItemType, investmentType, transactionType, cardType, reportType, paymentType } from "@/types/types";

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

// investments data
export const investmentData: investmentType[] = [
    {
        title: "Uniliver",
        img: "uniliver.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 1307,
        money: 11863,
        variant: "-3.23",
        variant_color: "text-colorDanger",
    },
    {
        title: "Tesla",
        img: "tesla.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 1307,
        money: 51863,
        variant: "+13.21",
        variant_color: "text-colorSuccess",
    },
    {
        title: "Monster",
        img: "monster.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 5307,
        money: 31863,
        variant: "+17.01",
        variant_color: "text-colorSuccess",
    },
    {
        title: "McDonalds",
        img: "mcdonalds.png",
        date: "7 Nov, 2022",
        time: "8:12pm",
        bonds: 622,
        money: 21863,
        variant: "-3.23",
        variant_color: "text-colorDanger",
    },

]

// transactions data
export const transactionstData: transactionType[] = [
    {
        icon: "bi-headphones",
        icon_color: "text-colorPurple",
        icon_bg: "bg-colorPurpleLight",
        title: "Music",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDanger",
        last_card_digit: 2383,
        card_type: "Credit Card",
        money: 24,
    },
    {
        icon: "bi-bag-fill",
        icon_color: "text-colorPurple",
        icon_bg: "bg-colorPurpleLight",
        title: "Shopping",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type: "Credit Card",
        money: 24,
    },
    {
        icon: "bi-cup-fill",
        icon_color: "text-colorSuccess",
        icon_bg: "bg-colorSuccessLight",
        title: "Restaurant",
        date: "01.01.1998",
        card_icon: "master-card.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type: "Master Card",
        money: 24,
    },
    {
        icon: "bi-joystick",
        icon_color: "text-colorDanger",
        icon_bg: "bg-colorDangerLight",
        title: "Games",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDanger",
        last_card_digit: 2383,
        card_type: "Credit Card",
        money: 24,
    },
    {
        icon: "bi-capsule",
        icon_color: "text-colorDanger",
        icon_bg: "bg-colorDangerLight",
        title: "Pharmacy",
        date: "01.01.1998",
        card_icon: "visa.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type: "Credit Card",
        money: 24,
    },
    {
        icon: "bi-headphones",
        icon_color: "text-colorSuccess",
        icon_bg: "bg-colorSuccessLight",
        title: "Fitness",
        date: "01.01.1998",
        card_icon: "master-card.png",
        card_bg: "bg-colorDark",
        last_card_digit: 2383,
        card_type: "Master Card",
        money: 24,
    },

]

// cards data
export const cardsData: cardType[] = [
    {
        title_icon: "BTC.png",
        title: "BTC",
        payment_img: "visa.png",
        money: "97233",
        holder: "Noumodong",
        expiry: "07/100",
        cvv: "093",
    },
    {
        title_icon: "ETH.png",
        title: "EHT",
        payment_img: "visa.png",
        money: "45213",
        holder: "Nkemtakeh",
        expiry: "07/100",
        cvv: "003",
    },
    {
        title_icon: "EURO.png",
        title: "EUR",
        payment_img: "master-card.png",
        money: "20317",
        holder: "Abena Jean",
        expiry: "07/45",
        cvv: "030",
    },
]

// reports data
export const reportsData: reportType[] = [
    {
    title: "Incomes",
    money: 24033,
    variant: "+11.7",
    variant_color: "text-colorSuccess",
    prev_money: 1231,
    },
    {
    title: "Expenses",
    money: 239,
    variant: "-7.3",
    variant_color: "text-colorDanger",
    prev_money: 89211,
    },
    {
    title: "Cashback",
    money: 9034,
    variant: "+4.2",
    variant_color: "text-colorSuccess",
    prev_money: 8732,
    },
    {
    title: "Turnover",
    money: 1292,
    variant: "-15.8",
    variant_color:"text-colorDanger",
    prev_money: 22332,
    },
]

// patments data
export const paymentsData: paymentType[] = [
    {
    dot_color: "bg-colorPrimary",
    title: "Training",
    money: 50,
    },
    {
    dot_color: "bg-colorSuccess",
    title: "Internet",
    money: 30,
    },
    {
    dot_color: "bg-colorPurple",
    title: "Gas",
    money: 176,
    },
    {
    dot_color: "bg-colorWarning",
    title: "Movies",
    money: 35,
    },
    {
    dot_color: "bg-colorPrimary",
    title: "Education",
    money: 1025,
    },
    {
    dot_color: "bg-colorDanger",
    title: "Electricity",
    money: 101,
    },
    {
    dot_color: "bg-colorSuccess",
    title: "Food",
    money: 426,
    },
]