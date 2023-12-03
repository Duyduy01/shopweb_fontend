export default {
    state: [

    ],
    getters: {
        GET_CART: state => {
            return state.listProduct;
        },
    },
    mutations: {
        SET_CART: (state, payload) => {
            if (localStorage.getItem('CART') == null) {
                state.listProduct = Object.assign({}, state.push(payload));
                localStorage.setItem('CART', JSON.stringify(state));
            } else {
                let itemCart = JSON.parse(localStorage.getItem('CART'))
                let checkExist = true;

                itemCart.forEach(e => {
                    if (e.productId == payload.productId) {
                        e.totalQuantity = payload.totalQuantity
                        checkExist = false;
                        e.quantity += payload.quantity;
                        if (e.quantity > payload.totalQuantity) {
                            e.quantity = payload.totalQuantity
                        }
                    }
                });

                if (checkExist) {
                    itemCart.push(payload)
                }

                localStorage.setItem('CART', JSON.stringify(itemCart));
            }

        },
        CHANGE_QUANTITY: (state, product) => {
            console.log(state, product)
            let itemCart = JSON.parse(localStorage.getItem('CART'))
            itemCart.forEach(e => {
                if (e.productId == product.id) {
                    e.totalQuantity = product.totalQuantity
                    e.quantity = product.quantity
                }
            })

            localStorage.setItem('CART', JSON.stringify(itemCart));
        },
        DELETE_PRODUCT_CART: (state, productId) => {
            console.log(state, productId)
            let itemCart = JSON.parse(localStorage.getItem('CART'))
            itemCart = itemCart.filter(e => e.productId != productId)
            localStorage.setItem('CART', JSON.stringify(itemCart));
        },
        REMOVE_CART: (state) => {
            console.log(state)
            localStorage.removeItem('CART');
        },
    }
}