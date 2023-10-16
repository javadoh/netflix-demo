

export function isMobile(){
    const isMobile = typeof window.orientation !== "undefined";
return isMobile;
}

export function getInnerWidth(){
    return window.innerWidth;
}

export const px2vw = (size, width = 1440) => `${(size / width) * 100}vw`;
