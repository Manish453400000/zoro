export const asyncHandler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (err) {
        res.status(500).json({
            success: false,
            response: err.message,
        });
    }
};

// Promise method
const asyncHandler2 = (func) => {
    return (req, res, next) => {
        Promise.resolve(func(req, res, next)).catch((err) => {
            next(err);
        });
    };
};
