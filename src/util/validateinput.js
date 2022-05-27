const validateInput = (input) => {
    if (!ipRegex(input) && !domainRegExp(input) || input === '') {
        return false
    }
    return true
}

const ipRegex = (input) => {
    const ipRegex = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
    return ipRegex.test(input)
}

const domainRegExp = (input) => {
    const domainRegexp = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/);
    return domainRegexp.test(input)
}

export default validateInput