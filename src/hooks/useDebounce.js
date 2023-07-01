import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [useDebounceValue, setUseDebounceValue] = useState(value);

    useEffect(() => {
        const handle = setTimeout(() => setUseDebounceValue(value), delay);
        return () => clearTimeout(handle);
    }, [value]);

    return useDebounceValue;
}

export default useDebounce;
