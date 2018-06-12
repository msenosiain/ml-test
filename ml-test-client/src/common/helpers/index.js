export const buildPrice = (price) => {
    return price ? (price.amount + price.decimals).toLocaleString('es-AR', {style: 'currency', currency: price.currency}) : '';
};

export const buildMeta = (condition, sold) => {
    let ret = ' - ' + sold + ' vendidos';
    if (condition === 'new') {
        ret = 'Nuevo' + ret;
    } else {
        ret = 'Usado' + ret;
    }

    return ret;
};