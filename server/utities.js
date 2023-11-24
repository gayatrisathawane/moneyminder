const responder = ({ res, message, data, success }) => {

    res.json({
        success: success || null,
        message: message,
        data: data || null,
    })
}
export { responder }