const list = (req, res, next) => {
    try {
        res.send("Get all reviews")
    } catch (error) {
        next(error)
    }
}

const reviewHandlers = {
    list
}

export default reviewHandlers