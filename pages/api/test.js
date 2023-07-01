// url: /api/test

export default function handler(request, response) {
    return response.status(200).json('Done')
    // server success: status(200)
    // server failure: status(500)
    // user failure: status(400)
}