
const getIpInfo = async (address) => {
    const apiKey = 'at_ttsTfBO3Aujt9MtfaQb5WjDzKq3DH';
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${address}`);
    return response.json()

}

export default getIpInfo