import axios from "axios"
///https://www.skiddle.com/api/v1/events/search?api_key=05e106795c5bbc46855d55547106d701&keyword=gay




export function getEventByKeyWord(input, setData) {
    console.log(input)
    axios
        .get(
            `https://www.skiddle.com/api/v1/events/search?api_key=05e106795c5bbc46855d55547106d701&keyword=${input}
            `
        )
        .then((userInput) => setData(userInput.data.results))

}