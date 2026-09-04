import React from 'react';
import './Menu.css';
import { Bell, Search, User } from 'lucide-react';

export interface MenuProps {
  /** User name display */
  userName?: string;
  /** Subtitle / location */
  locationText?: string;
  /** Notification badge count */
  notificationsCount?: number;
  /** On click notifications */
  onNotificationClick?: () => void;
}

/**
 * **Menu**
 * 
 * Preserved layer name component from Figma (\`Menu\`, ID: \`9:4628\`).
 * Header navigation bar preserving Figma node \`9:4628\`.
 */
export const Menu: React.FC<MenuProps> = ({
  userName = 'Alex Morgan',
  locationText = 'San Francisco, CA',
  notificationsCount = 3,
  onNotificationClick,
}) => {
  return (
    <header className="uedp-header-menu">
      <div className="uedp-header-menu__profile">
        <div className="uedp-header-menu__avatar">
          <User size={20} />
        </div>
        <div className="uedp-header-menu__user-info">
          <span className="uedp-header-menu__greeting">Hello 👋</span>
          <h4 className="uedp-header-menu__name">{userName}</h4>
        </div>
      </div>

      <div className="uedp-header-menu__actions">
        <button type="button" className="uedp-header-menu__action-btn" aria-label="Search">
          <Search size={18} />
        </button>
        <button
          type="button"
          className="uedp-header-menu__action-btn uedp-header-menu__action-btn--bell"
          onClick={onNotificationClick}
          aria-label="Notifications"
        >
          <Bell size={18} />
          {notificationsCount > 0 && (
            <span className="uedp-header-menu__badge">{notificationsCount}</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Menu;
