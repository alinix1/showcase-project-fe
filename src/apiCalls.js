
const getSongsData = async (path) => {
    try {
        const response = await fetch(`https://beats4devs-api.herokuapp.com/api/v1${path}`)
        if (!response.ok) {
            throw new Error()
        } else {
            const data = await response.json()
            return data
        }
    } catch (error) {
        return error
    }
}

export { getSongsData }