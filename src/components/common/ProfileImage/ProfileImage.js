import React from 'react';
import { useImageLoader } from '../../../hooks/useImageLoader';
import { PERSONAL_INFO } from '../../../utils/constants';
import './ProfileImage.css';

const ProfileImage = ({
  src,
  alt = `${PERSONAL_INFO.name} - Software Engineer profile photo`,
  className = '',
  style = {},
  lazy = true,
  fallbackSrc = null,
  onLoad,
  onError,
  ...props
}) => {
  const {
    loading,
    error,
    currentSrc,
    handleLoad,
    handleError
  } = useImageLoader(src, {
    fallbackSrc,
    onLoad,
    onError
  });

  const imageProps = {
    src: currentSrc,
    alt,
    className: `profile-image ${className}`,
    style: {
      opacity: loading ? 0 : 1,
      transition: 'opacity 0.3s ease-in-out',
      ...style
    },
    onLoad: handleLoad,
    onError: handleError,
    ...(lazy && { loading: 'lazy' }),
    decoding: 'async',
    ...props
  };

  return (
    <div className="profile-image-container">
      {!error ? (
        <img {...imageProps} />
      ) : (
        <div 
          className="profile-image-fallback" 
          role="img" 
          aria-label={alt}
        >
          <div className="profile-image-fallback-icon">👤</div>
          <span className="profile-image-fallback-text">Image unavailable</span>
        </div>
      )}
      
      {loading && !error && (
        <div className="profile-image-placeholder" aria-hidden="true">
          <div className="profile-image-skeleton"></div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;