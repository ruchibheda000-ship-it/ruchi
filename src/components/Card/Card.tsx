import React from 'react';
import './Card.css';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Subtitle or provider */
  subtitle?: string;
  /** Scheduled date string */
  date?: string;
  /** Scheduled time string */
  time?: string;
  /** Location string */
  location?: string;
  /** Active status tag */
  status?: 'Confirmed' | 'Pending' | 'Completed';
  /** Action click callback */
  onClick?: () => void;
}

/**
 * **Card**
 * 
 * Preserved layer name component from Figma (\`Card\`, ID: \`9:7795\`).
 * Health appointment & report card container displaying schedule metrics.
 */
export const Card: React.FC<CardProps> = ({
  title = 'General Health Consultation',
  subtitle = 'Apollo Healthcare Hub',
  date = 'Thu, 24 Aug',
  time = '10:30 AM',
  location = 'Building B, Room 402',
  status = 'Confirmed',
  onClick,
}) => {
  return (
    <div className="uedp-card" onClick={onClick} role="article">
      <div className="uedp-card__header">
        <div>
          <h3 className="uedp-card__title">{title}</h3>
          <p className="uedp-card__subtitle">{subtitle}</p>
        </div>
        <span className={`uedp-card__status uedp-card__status--${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <div className="uedp-card__details">
        <div className="uedp-card__detail-item">
          <Calendar size={14} className="uedp-card__icon" />
          <span>{date}</span>
        </div>
        <div className="uedp-card__detail-item">
          <Clock size={14} className="uedp-card__icon" />
          <span>{time}</span>
        </div>
        <div className="uedp-card__detail-item">
          <MapPin size={14} className="uedp-card__icon" />
          <span>{location}</span>
        </div>
      </div>

      <div className="uedp-card__footer">
        <span className="uedp-card__action-text">View details</span>
        <ChevronRight size={16} />
      </div>
    </div>
  );
};

export default Card;
