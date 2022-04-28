
export const dateParse = (dateString) => {
    const newDate = new Date(Date.parse(dateString));
    return newDate.toLocaleString();

}

