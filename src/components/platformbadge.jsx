import React from 'react';
import './components.module.css';

const PlatformBadge = ({ platform }) => {
  if (!platform) return null;

  const platformConfig = {
    youtube: {
      icon: 'bi-youtube',
      className: 'badge-youtube',
      name: 'YouTube'
    },
    tiktok: {
      icon: 'bi-tiktok',
      className: 'badge-tiktok',
      name: 'TikTok'
    },
    instagram: {
      icon: 'bi-instagram',
      className: 'badge-instagram',
      name: 'Instagram'
    },
    twitter: {
      icon: 'bi-twitter',
      className: 'badge-twitter',
      name: 'Twitter'
    },
    facebook: {
      icon: 'bi-facebook',
      className: 'badge-custom',
      name: 'Facebook'
    }
  };

  const config = platformConfig[platform.toLowerCase()] || {
    icon: 'bi-play-circle',
    className: 'badge-custom',
    name: platform
  };

  return (
    <div className="platform-badge">
      <span className={`badge-custom ${config.className}`}>
        <i className={config.icon}></i>
        {config.name}
      </span>
    </div>
  );
};

export default PlatformBadge;
