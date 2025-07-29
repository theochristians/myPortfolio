import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for handling image loading with error handling and fallbacks
 * @param {string} src - Image source URL
 * @param {Object} options - Configuration options
 * @returns {Object} - Loading state and handlers
 */
export const useImageLoader = (src, options = {}) => {
  const {
    fallbackSrc = null,
    onLoad = () => {},
    onError = () => {},
    preload = false
  } = options;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = useCallback(() => {
    setLoading(false);
    setError(false);
    onLoad();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setError(true);
    setLoading(false);
    
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setLoading(true);
      setError(false);
    } else {
      onError();
    }
  }, [fallbackSrc, currentSrc, onError]);

  // Preload image if requested
  useEffect(() => {
    if (preload && src) {
      const img = new Image();
      img.onload = handleLoad;
      img.onerror = handleError;
      img.src = src;
    }
  }, [src, preload, handleLoad, handleError]);

  return {
    loading,
    error,
    currentSrc,
    handleLoad,
    handleError
  };
};

/**
 * Hook for responsive image loading with WebP support
 * @param {Object} sources - Image sources object
 * @returns {Object} - Responsive image data
 */
export const useResponsiveImage = (sources) => {
  const [supportedFormat, setSupportedFormat] = useState('jpg');

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    if (checkWebPSupport()) {
      setSupportedFormat('webp');
    }
  }, []);

  const getOptimalSource = useCallback(() => {
    if (supportedFormat === 'webp' && sources.webp) {
      return sources.webp;
    }
    return sources.jpg || sources.default;
  }, [sources, supportedFormat]);

  return {
    src: getOptimalSource(),
    supportedFormat
  };
};