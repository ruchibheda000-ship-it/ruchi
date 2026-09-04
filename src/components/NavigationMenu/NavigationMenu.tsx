import React from 'react';
import './NavigationMenu.css';
import { Home, FilePlus, ClipboardList, Stethoscope } from 'lucide-react';

export interface NavigationMenuProps {
  /** Figma Property 1 variant */
  activeTab?: 'Home' | 'Add Docs' | 'Report' | 'Schedule';
  /** Tab switch callback */
  onTabChange?: (tab: 'Home' | 'Add Docs' | 'Report' | 'Schedule') => void;
}

/**
 * **Navigation Menu**
 * 
 * Preserved layer name component from Figma (\`Navigation Menu\`, ID: \`12:3546\`).
 * Controls bottom mobile navigation bar active states across Home, Add Docs, Report, and Schedule.
 */
export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  activeTab = 'Home',
  onTabChange,
}) => {
  const tabs = [
    { id: 'Home', label: 'Home', Icon: Home },
    { id: 'Add Docs', label: 'Add Docs', Icon: FilePlus },
    { id: 'Report', label: 'Reports', Icon: ClipboardList },
    { id: 'Schedule', label: 'Schedule', Icon: Stethoscope },
  ] as const;

  return (
    <nav className="uedp-nav-menu" role="navigation">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const IconComponent = tab.Icon;
        return (
          <button
            key={tab.id}
            type="button"
            className={`uedp-nav-menu__item ${isActive ? 'uedp-nav-menu__item--active' : ''}`}
            onClick={() => onTabChange?.(tab.id)}
            aria-selected={isActive}
          >
            <IconComponent className="uedp-nav-menu__icon" size={20} />
            <span className="uedp-nav-menu__label">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default NavigationMenu;
