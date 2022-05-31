import { useEffect, useState, useRef } from 'react';


export function useInfiniteScroll(images) {
    const page = useRef({number: 0}); 
    const [imagesSlice, setImagesSlice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const listInnerRef = useRef();
    const prevImagesRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

            if (scrollTop + clientHeight > (scrollHeight - 10)) {
                setIsLoading(true);
            }
        }
    }   

    useEffect(() => {
        const fetch_images = () => {
            return new Promise(resolve =>
                setTimeout(() => {
                    const startSliceImages = page.current.number * 10;
                    page.current.number++;
                    
                    resolve(images.slice(startSliceImages, startSliceImages + 10));
                }, 1000)
            )
        }

        if (isLoading) {
            fetch_images().then(images => {          
                setImagesSlice(prev => [...prev, ...images]);
                setIsLoading(false);
            });            
        }
        else if (prevImagesRef.current !== images){
            page.current.number = 0;

            fetch_images().then(images => {          
                setImagesSlice(images);
                setIsLoading(false);
            });
        }

        prevImagesRef.current = images;
    }, [isLoading, images])

    return [imagesSlice, isLoading, listInnerRef, onScroll];
}