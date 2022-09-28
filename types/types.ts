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
    money:number,
    variant: number,
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
    last_card_digit:number,
    card_type:string,
    money: number,
}
