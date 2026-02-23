import React from 'react';

function Footer() {
    return ( <
        footer style = {
            {
                backgroundColor: '#1a3c34',
                color: 'white',
                padding: '15px',
                textAlign: 'center',
                marginTop: 'auto'
            }
        } >
        <
        p > ©{ new Date().getFullYear() }
        Абушахман— FitTrack.Сделано с мотивацией💪 < /p> <
        /footer>
    );
}

export default Footer;