import { CircularProgress } from '@mui/material';
import React from 'react';
import Fade from '@mui/material/Fade';

const Loader = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                left: 0,
                top: 0,
                width: '100vw',
                height: '100vh',
                color: 'white',
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 10000,
                textAlign: "center",
                backdropFilter: "blur(15px)",
            }}>
                        <Fade unmountOnExit in={true}>
                            <div style={{ maxWidth: "300px", margin: "auto" }}>

            <React.Fragment>
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--primary-900)" />
                            <stop offset="100%" stopColor="rgba(35, 93, 255, 0.5)" />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgress
                    sx={{
                        'svg circle': {
                            stroke: 'url(#my_gradient)',
                            strokeWidth: 5, 
                            transition: 'all 0.5s ease-in-out',
                            rx: '100px',
                            ry: '100px', 
                            borderRadius: "100px"
                        },
                    }}
                    size={80} 
                    thickness={8} 
                    
                />
            </React.Fragment>
                <p style={{ fontSize: "21px", fontWeight: "700" }}>Loading clip</p>
                <p style={{ lineHeight: 1.7, fontSize: "18px" }}>We are loading your analytics and 3D environment</p>
            </div>
            </Fade>
        </div>
    );
};

export default Loader;
