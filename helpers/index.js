export const shortenText = (text, length) => {
    return text.length <= length 
        ? text
        : `${text.substring(0, length)}...`
}