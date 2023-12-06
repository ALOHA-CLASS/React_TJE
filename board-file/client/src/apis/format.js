
export const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    // 1️⃣ 포맷 option 으로 지정하기
    // const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, timeZone: 'Asia/Seoul'   };
    // return date.toLocaleString('ko-KR', options);

    // 2️⃣ 포맷 형식으로 지정하기
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

};

export const byteToUnit = (byte) => {
    // 단위별 곱셈 계수를 정의합니다.
    const unitMultipliers = {
        "B": 1,
        "KB": 1024,
        "MB": 1048576,
        "GB": 1073741824,
        "TB": 1099511627776
    };

    // 가장 큰 단위를 찾습니다.
    let unit = "";
    for (const key in unitMultipliers) {
        if (byte >= unitMultipliers[key]) {
        unit = key;
        }
    }

    // 입력된 바이트 수를 단위별로 변환합니다.
    return parseFloat(byte / unitMultipliers[unit]).toFixed(2) + " " + unit;
}
  