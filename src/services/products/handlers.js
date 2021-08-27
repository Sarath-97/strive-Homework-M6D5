const list = (req, res, next) => {
    try {
        res.send("ok")
    } catch (error) {
        next(error)
    }
}

const productsHandlers = {
    list
}

export default productsHandlers