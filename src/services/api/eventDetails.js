import axios from "axios"


export function getEventDetails(id, setEventDetails, eventDetails) {
    console.log(id)
    axios
        .get(
            `https://www.skiddle.com/api/v1/events/${id}/?api_key=05e106795c5bbc46855d55547106d701`
        )
        .then((event) => setEventDetails(event.data))
}