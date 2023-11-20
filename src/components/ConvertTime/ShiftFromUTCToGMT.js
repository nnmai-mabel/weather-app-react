function ShiftFromUTCToGMT(timestamp) {

    // Since timezone is Shift in seconds from UTC
    // Divide the timezone by 3600 seconds (the seconds in 1h) will result in the GMT

    const gmtTime = timestamp / 3600
    return `GMT +${gmtTime}`;
}

export default ShiftFromUTCToGMT