import React from 'react';
import './NavigationMenu.css';
import { Home, FilePlus, ClipboardList, Calendar } from 'lucide-react';

export interface NavigationMenuProps {
  /** Figma Property 1 variant / Active navigation destination tab */
  activeTab?: 'Home' | 'Add Docs' | 'Report' | 'Schedule';
  /** Tab switch callback */
  onTabChange?: (tab: 'Home' | 'Add Docs' | 'Report' | 'Schedule') => void;
}

/**
 * **Navigation Menu**
 * 
 * Preserved layer name component from Figma (`Navigation Menu`, ID: `12:3546`).
 * Primary mobile bottom navigation bar providing seamless destination switching across Home, Add Docs, Report, and Schedule with active capsule pill highlighting.
 */
export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeTab = 'Home',
  onTabChange,
}) => {
  const [currentTab, setCurrentTab] = React.useState(activeTab);

  React.useEffect(() => {
    setCurrentTab(activeTab);
  }, [activeTab]);

  const handleTabClick = (tabId: 'Home' | 'Add Docs' | 'Report' | 'Schedule') => {
    setCurrentTab(tabId);
    onTabChange?.(tabId);
  };

  const tabs = [
    { id: 'Home', label: 'Home', Icon: Home },
    { id: 'Add Docs', label: 'Add Docs', Icon: FilePlus },
    { id: 'Report', label: 'Report', Icon: ClipboardList },
    { id: 'Schedule', label: 'Schedule', Icon: Calendar },
  ] as const;

  return (
    <nav className="uedp-nav-menu" role="navigation" aria-label="Bottom Navigation">
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        const IconComponent = tab.Icon;
        return (
          <button
            key={tab.id}
            type="button"
            className={`uedp-nav-menu__item ${
              isActive ? 'uedp-nav-menu__item--active' : 'uedp-nav-menu__item--inactive'
            } uedp-nav-menu__item--${tab.id.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => handleTabClick(tab.id)}
            aria-selected={isActive}
            aria-label={`${tab.label} destination tab`}
          >
            <IconComponent className="uedp-nav-menu__icon" size={19} />
            <span className="uedp-nav-menu__label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
