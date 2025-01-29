import React, { useState } from 'react';

const MapComponent = () => {
    const [iframeVisible, setIframeVisible] = useState(true); // نمایش نقشه بلد به طور پیش‌فرض

    return (
        <div>
            {/* نمایش نقشه بلد در iframe */}
            {iframeVisible && (
                <iframe
                    src="https://balad.ir/p/PFtMdNatYKTgWx?preview=true#18/35.814829/50.958133"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    style={{ border: '0' }}
                    allowFullScreen
                    title="نقشه بلد"
                ></iframe>
            )}
        </div>
    );
};

export default MapComponent;
