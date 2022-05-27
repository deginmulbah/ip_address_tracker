import '../asset/style.css'
import initMap from "./util/map"
import { getUserPosition, getUserCoordinates } from './util/location';
import getElementByid from './util/getElById';
import validateInput from './util/validateinput';
import getIpInfo from './util/api';
import { setIpInfo, disabledBtn } from './DomEl'

const initApp = async () => {
    const userPositioin = await getUserPosition();
    const userCoord = getUserCoordinates(userPositioin.coords);
    initMap(userCoord);

    const ipAddressForm = getElementByid('form');
    ipAddressForm.addEventListener('submit', getIpAddress)

}

const getIpAddress = async (evt) => {
    evt.preventDefault();
    const submitBtn = evt.target.querySelector('button');
    disabledBtn(submitBtn, true)

    const userInput = getElementByid('ip-input').value;

    if (!validateInput(userInput)) {
        alert('invalid input');
        disabledBtn(submitBtn, false)
        return
    }

    const ipInfo = await getIpInfo(userInput);
    setIpInfo(ipInfo);
    disabledBtn(submitBtn , false)
    initMap(ipInfo.location);
}

initApp();