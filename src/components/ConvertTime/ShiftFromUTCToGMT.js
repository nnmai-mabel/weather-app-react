function ShiftFromUTCToGMT(timestamp) {

    // Since timezone is Shift in seconds from UTC
    // Divide the timezone by 3600 seconds (the seconds in 1h) will result in the GMT

    const gmtTime = timestamp / 3600
    if (gmtTime >= 0){
        return `GMT +${gmtTime}`;
    }
    else{
        return `GMT ${gmtTime}`;
    }  
}

export default ShiftFromUTCToGMT