import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const MapComponent = () => {
    const position = [35.74185096411445, 51.30418540244854

    ]; // مختصات مکان شرکت
    const customIcon = new L.Icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg', // آدرس تصویر آنلاین
        iconSize: [32, 32], // اندازه آیکون
        iconAnchor: [16, 32], // نقطه مرکزی آیکون
        popupAnchor: [0, -32], // محل نمایش پاپ‌آپ
    });


    return (
        <MapContainer center={position} zoom={17} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customIcon}>

                <Popup >شرکت آیتولز</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;



