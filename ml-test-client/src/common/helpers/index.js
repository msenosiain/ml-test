export const buildPrice = (price) => {

    console.log((price.amount + price.decimals))

    return (price.amount + price.decimals).toFixed(2).toLocaleString('es-ES', { style: 'currency', currency: item.price.currency })
};