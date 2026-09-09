import React from 'react';
import './Menu.css';
import { Bell, Search, User } from 'lucide-react';

export interface MenuProps {
  /** User name display */
  userName?: string;
  /** Subtitle / localized location */
  locationText?: string;
  /** Notification badge count */
  notificationsCount?: number;
  /** Optional custom avatar image URL */
  avatarUrl?: string;
  /** On click notifications */
  onNotificationClick?: () => void;
  /** On click search */
  onSearchClick?: () => void;
  /** On click profile */
  onProfileClick?: () => void;
}

/**
 * **Menu**
 * 
 * Preserved layer name component from Figma (`Menu`, ID: `9:4628`).
 * Top application header navigation bar with user greeting context, location, search action, and unread notification alert counter.
 */
export const Menu: React.FC<MenuProps> = ({
  userName = 'Alex Morgan',
  locationText = 'San Francisco, CA',
  notificationsCount = 3,
  avatarUrl,
  onNotificationClick,
  onSearchClick,
  onProfileClick,
}) => {
  return (
    <header className="uedp-header-menu" role="banner">
      <div
        className="uedp-header-menu__profile"
        onClick={onProfileClick}
        role="button"
        tabIndex={0}
        aria-label={`User profile for ${userName}`}
      >
        <div className="uedp-header-menu__avatar">
          {avatarUrl ? (
            <img src={avatarUrl} alt={userName} className="uedp-header-menu__avatar-img" />
          ) : (
            <User size={20} className="uedp-header-menu__avatar-icon" />
          )}
        </div>
        <div className="uedp-header-menu__user-info">
          <span className="uedp-header-menu__greeting">Hello 👋</span>
          <h4 className="uedp-header-menu__name">{userName}</h4>
          {locationText && (
            <span className="uedp-header-menu__location">{locationText}</span>
          )}
        </div>
      </div>

      <div className="uedp-header-menu__actions">
        <button
          type="button"
          className="uedp-header-menu__action-btn"
          onClick={onSearchClick}
          aria-label="Search records and doctors"
        >
          <Search size={18} />
        </button>
        <button
          type="button"
          className="uedp-header-menu__action-btn uedp-header-menu__action-btn--bell"
          onClick={onNotificationClick}
          aria-label={
            notificationsCount > 0
              ? `${notificationsCount} unread notifications`
              : 'Notifications'
          }
        >
          <Bell size={18} />
          {notificationsCount > 0 && (
            <span className="uedp-header-menu__badge">
              {notificationsCount > 99 ? '99+' : notificationsCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Menu;
