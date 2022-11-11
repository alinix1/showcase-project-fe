
const getSongsData = async (songData) => {
    try {
        const response = await getSongsData(songData)
        if (!response.ok) {
            throw new Error()
        } else {
            const data = await response.data 
            return data
        }
    } catch (error) {
        return error
    }
}

export { getSongsData }