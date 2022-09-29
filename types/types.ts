export type menuItemType = {
    title: string,
    iconName: string,
    url: string,
}

export type investmentType = {
    title: string,
    img: string,
    date: string,
    time: string,
    bonds: number,
    money: number,
    variant: string,
    variant_color: string,
}

export type transactionType = {
    icon: string,
    icon_color: string,
    icon_bg: string,
    title: string,
    date: string,
    card_icon: string,
    card_bg: string,
    last_card_digit: number,
    card_type: string,
    money: number,
}

export type cardType = {
    title_icon: string,
    title: string,
    payment_img: string,
    money: string,
    holder: string,
    expiry: string,
    cvv: string,
}

export type reportType = {
    title: string,
    money: number,
    variant: string,
    variant_color: "text-colorSuccess" | "text-colorDanger",
    prev_money: number,
}

export type paymentType = {
    dot_color: string,
    title: string,
    money: number,
}

export type chartType = {
    type: string,
    data: {
        labels: string[],
        datasets: {
            label: string,
            data: number[],
            borderColor: string,
            borderWidth: number,
        }[],
    },
    options: {
        responsive: boolean,
    },
}