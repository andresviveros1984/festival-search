const daysOfWeek = ["Sunday", "Monday", 'Tuesday', "Wednesday", "Thursday", "Friday", "Saturday"];
export function formatDate(arg) {

    const months = ['December', 'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November',
    ];
    const arrayDate = arg.split('-');

    const dateObject = {
        year: arrayDate[0],
        month: months[arrayDate[1].replace("0", "")],
        day: /^0/.test(arrayDate[2]) ? arrayDate[2].replace('0', '') : arrayDate[2]
    }
    let suffix = '';
    switch (dateObject.day) {
        case '1':
            suffix = 'st';
            break;
        case '2':
            suffix = 'nd';
            break;
        case '3':
            suffix = 'rd';
            break;
        case '4':
            suffix = 'th';
            break;
        default:
            break;
    }

    //handle if day 21 then it should say 21st and so on
    return dateObject.day + suffix + " " + dateObject.month + " " + dateObject.year;
}

