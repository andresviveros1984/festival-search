import axios from "axios";


export function getEvent(location, setData) {
    axios
        .get(
            `https://www.skiddle.com/api/v1/events/search?
            api_key=05e106795c5bbc46855d55547106d701&eventcode=${location.pathname !== '/' ? location.pathname
                .replace('/', '')
                .toUpperCase() : 'FEST'}`
        )
        .then((res) => setData(res.data.results))
}


