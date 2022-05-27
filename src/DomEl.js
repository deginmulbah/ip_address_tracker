import getElementByid from "./util/getElById";

export const setIpInfo = (ipinfo) => {
    const ipAddress = getElementByid('ip');
    const location = getElementByid('location');
    const time = getElementByid('time');
    const isp = getElementByid('isp');

    const { country, region, city, timezone } = ipinfo.location;

    ipAddress.textContent = ipinfo.ip;
    location.textContent = `${city} - ${region}, ${country}`;
    time.textContent = timezone
    isp.textContent = ipinfo.isp;
}

export const disabledBtn = (btn, disabled) => {
    let btnBg;
    btn.disabled = disabled;

    if (btn.disabled) {
        btnBg = "hsl(0, 0%, 59%)"
    } else {
        btnBg = 'hsl(0, 0%, 17%)'
    }
    btn.style.backgroundColor = btnBg
}
