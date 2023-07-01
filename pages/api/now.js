export default function handler(request, response) {
    let today = new Date()
    return response.status(200).json(today)
}