import { forwardRef, useState } from 'react';

const Image = forwardRef(({ src, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(src);
    };

    return <img ref={ref} src={fallBack || src} {...props} onError={handleError} />;
});

export default Image;
