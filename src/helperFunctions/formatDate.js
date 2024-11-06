const daysOfWeek = ["Sunday", "Monday", 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday"];
export function formatDate(arg) {
    const months = ['December', 'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November',
    ];
    const arrayDate = arg.split('-');
    const dateObject = {
        year: arrayDate[0],
        month: months[arrayDate[1]],
        day: arrayDate[2]
    }
    //handle if day 21 then it should say 21st and so on
    return dateObject.day + " " + dateObject.month + " " + dateObject.year;
}

