import {useState, useCallback} from 'react';

const useHTTP = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: JSON.stringify(requestConfig.body) ? JSON.stringify(requestConfig.body) : null
                }
            )

        if (!response.ok) {
            throw new Error('Request failed!');
        }

        const data = await response.json();
        applyData(data);
        console.log(`data: ${JSON.stringify(data)}`)

      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
};

export default useHTTP;