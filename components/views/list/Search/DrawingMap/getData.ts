export const getData = () => [
    {
        position: { lat: -34.397, lng: 150.644 },
        label: "",
    },
    {
        position: { lat: -35.397, lng: 149.644 },
        label: ""
    },
    {
        position: { lat: -33.397, lng: 151.644 },
        label: "11"
    },
    {
        position: { lat: -36.397, lng: 152.644 },
        label: ""
    },
    {
        position: { lat: -34.397, lng: 148.644 },
        label: "5"
    },    
];

export const defaultCenter = {
    lat: 25.0657000,
    lng: 55.1712800,
}

export const polygonOptions = {
    fillOpacity: 0.3,
    fillColor: '#E5E5E5',
    strokeColor: '#3B4248',
    label: {
        color: "#FFF",
        fontSize: "14px",
        fontWeight: "bold"
    },
    strokeWeight: 4,
}

export const drawingManagerOptions = (google: any) => ({
    polygonOptions: polygonOptions,
    drawingControl: false,
})

export const containerStyle = {
    width: "100vw",
    height: "416px",
    marginTop: "20px",
};