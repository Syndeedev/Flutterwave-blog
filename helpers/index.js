export const shortenText = (text, length) => {
    text = text || ""
    return text.length <= length 
        ? text
        : `${text.substring(0, length)}...`
}