import React, { useContext, useState, useEffect, useCallback } from 'react';
import { DocsContext } from '@storybook/blocks';
import './ComponentPlayground.css';

interface PlaygroundButton {
  id: string;
  label: string;
  tooltip?: string;
  isActive?: (args: Record<string, any>) => boolean;
  onClick: (currentArgs: Record<string, any>, update: (patch: Record<string, any>) => void) => void;
  variant?: 'default' | 'action' | 'accent';
}

interface ComponentConfig {
  hint: string;
  buttons: PlaygroundButton[];
}

export interface ComponentPlaygroundProps {
  primaryStory: any;
}

export const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({ primaryStory }) => {
  const context = useContext(DocsContext);

  const getInitialArgs = useCallback(() => {
    if (!primaryStory || !context) return {};
    try {
      const storyContext = context.getStoryContext(primaryStory);
      return storyContext?.args || primaryStory.initialArgs || {};
    } catch {
      return primaryStory?.initialArgs || {};
    }
  }, [primaryStory, context]);

  const [currentArgs, setCurrentArgs] = useState<Record<string, any>>(getInitialArgs);

  // Synchronize when primary story changes or when storyArgsUpdated fires from channel
  useEffect(() => {
    setCurrentArgs(getInitialArgs());

    if (!context?.channel || !primaryStory?.id) return;

    const onArgsUpdated = (changed: { storyId: string; args: Record<string, any> }) => {
      if (changed.storyId === primaryStory.id) {
        setCurrentArgs(changed.args);
      }
    };

    context.channel.on('storyArgsUpdated', onArgsUpdated);
    return () => {
      context.channel.off('storyArgsUpdated', onArgsUpdated);
    };
  }, [primaryStory, context, getInitialArgs]);

  const updateArgs = useCallback(
    (patch: Record<string, any>) => {
      if (!primaryStory || !context?.channel) return;
      context.channel.emit('updateStoryArgs', {
        storyId: primaryStory.id,
        updatedArgs: patch,
      });
      setCurrentArgs((prev) => ({ ...prev, ...patch }));
    },
    [primaryStory, context]
  );

  if (!primaryStory) return null;

  const title: string = primaryStory.title || '';
  const layerName: string = primaryStory.parameters?.figma?.layerName || '';

  // Non-interactive foundation stories do not render the playground bar
  if (title.startsWith('Foundations') || title.startsWith('Overview')) {
    return null;
  }

  // Component-aware configuration registry
  let config: ComponentConfig | null = null;

  if (title.includes('Input Field') || layerName === 'Input Field') {
    config = {
      hint: 'Type in canvas, switch interaction state, or clear text:',
      buttons: [
        {
          id: 'default',
          label: 'Default',
          tooltip: 'Default empty state with placeholder',
          isActive: (args) => args.state === 'Input Field - Status' && !args.value,
          onClick: (_, update) =>
            update({
              state: 'Input Field - Status',
              value: '',
              defaultValue: '',
              placeholder: 'Enter full name...',
              errorMessage: '',
            }),
        },
        {
          id: 'entered',
          label: 'Entered',
          tooltip: 'Entered text state with success status badge',
          isActive: (args) => args.state === 'Entered' || args.value === 'Jane Doe',
          onClick: (_, update) =>
            update({
              state: 'Entered',
              value: 'Jane Doe',
              defaultValue: 'Jane Doe',
              errorMessage: '',
            }),
        },
        {
          id: 'error',
          label: 'Error',
          tooltip: 'Validation error outline and feedback message',
          isActive: (args) => args.state === 'Error',
          onClick: (_, update) =>
            update({
              state: 'Error',
              value: 'Invalid Name!',
              defaultValue: 'Invalid Name!',
              errorMessage: 'Please enter a valid full name',
            }),
        },
        {
          id: 'clear',
          label: 'Clear Text',
          variant: 'action',
          tooltip: 'Clear field to test typing & placeholder',
          onClick: (_, update) =>
            update({
              state: 'Input Field - Status',
              value: '',
              defaultValue: '',
              placeholder: 'Enter full name...',
            }),
        },
      ],
    };
  } else if (title.includes('Password') || layerName === 'Password') {
    config = {
      hint: 'Type password, toggle visibility in canvas, or select state:',
      buttons: [
        {
          id: 'default',
          label: 'Default',
          tooltip: 'Empty password entry with placeholder',
          isActive: (args) => args.state === 'Default' && !args.value,
          onClick: (_, update) =>
            update({
              state: 'Default',
              value: '',
              defaultValue: '',
              errorMessage: '',
            }),
        },
        {
          id: 'filled',
          label: 'Filled',
          tooltip: 'Populated credentials with masked characters',
          isActive: (args) => args.state === 'Filled' || args.value === 'SuperSecret123!',
          onClick: (_, update) =>
            update({
              state: 'Filled',
              value: 'SuperSecret123!',
              defaultValue: 'SuperSecret123!',
              errorMessage: '',
            }),
        },
        {
          id: 'error',
          label: 'Error',
          tooltip: 'Validation error feedback for short password',
          isActive: (args) => args.state === 'Error',
          onClick: (_, update) =>
            update({
              state: 'Error',
              value: '123',
              defaultValue: '123',
              errorMessage: 'Password must be at least 8 characters',
            }),
        },
        {
          id: 'clear',
          label: 'Clear',
          variant: 'action',
          tooltip: 'Reset password field',
          onClick: (_, update) =>
            update({
              state: 'Default',
              value: '',
              defaultValue: '',
            }),
        },
      ],
    };
  } else if (title === 'Primitives & Inputs/Date' || layerName === 'Date') {
    config = {
      hint: 'Switch calendar date selection status:',
      buttons: [
        {
          id: 'as-is',
          label: 'As is (Default)',
          tooltip: 'Unselected calendar date pill',
          isActive: (args) => args.state === 'As is' || !args.state,
          onClick: (_, update) => update({ state: 'As is' }),
        },
        {
          id: 'selected',
          label: 'Selected',
          tooltip: 'Active dark highlighted date pill',
          isActive: (args) => args.state === 'Selected',
          onClick: (_, update) => update({ state: 'Selected' }),
        },
      ],
    };
  } else if (title.includes('Dates') || layerName === 'Dates') {
    config = {
      hint: 'Click any day in the carousel or select below:',
      buttons: [
        {
          id: 'mon-14',
          label: 'Mon 14',
          isActive: (args) => (args.selectedIndex ?? 0) === 0,
          onClick: (_, update) => update({ selectedIndex: 0 }),
        },
        {
          id: 'wed-16',
          label: 'Wed 16',
          isActive: (args) => args.selectedIndex === 2,
          onClick: (_, update) => update({ selectedIndex: 2 }),
        },
        {
          id: 'fri-18',
          label: 'Fri 18',
          isActive: (args) => args.selectedIndex === 4,
          onClick: (_, update) => update({ selectedIndex: 4 }),
        },
        {
          id: 'sun-20',
          label: 'Sun 20',
          isActive: (args) => args.selectedIndex === 6,
          onClick: (_, update) => update({ selectedIndex: 6 }),
        },
      ],
    };
  } else if (title.includes('Home Button') || layerName === 'Navigation - Home Button') {
    config = {
      hint: 'Toggle primary return button active state:',
      buttons: [
        {
          id: 'as-is',
          label: 'As is (Default)',
          tooltip: 'Warm neutral resting state',
          isActive: (args) => args.state === 'As is' || !args.state,
          onClick: (_, update) => update({ state: 'As is' }),
        },
        {
          id: 'selected',
          label: 'Selected',
          tooltip: 'High contrast active selection state',
          isActive: (args) => args.state === 'Selected',
          onClick: (_, update) => update({ state: 'Selected' }),
        },
      ],
    };
  } else if (title === 'Cards & Data Display/Card' || layerName === 'Card') {
    config = {
      hint: 'Switch appointment booking confirmation state:',
      buttons: [
        {
          id: 'confirmed',
          label: 'Confirmed',
          isActive: (args) => args.status === 'Confirmed' || !args.status,
          onClick: (_, update) => update({ status: 'Confirmed' }),
        },
        {
          id: 'pending',
          label: 'Pending',
          isActive: (args) => args.status === 'Pending',
          onClick: (_, update) => update({ status: 'Pending' }),
        },
        {
          id: 'completed',
          label: 'Completed',
          isActive: (args) => args.status === 'Completed',
          onClick: (_, update) => update({ status: 'Completed' }),
        },
      ],
    };
  } else if (title.includes('Easecard') || layerName === 'Easecard') {
    config = {
      hint: 'Switch healthcare provider membership pass theme:',
      buttons: [
        {
          id: 'kims',
          label: 'KIMS Kingsway',
          tooltip: 'Lavender / Periwinkle healthcare pass',
          isActive: (args) => args.provider === 'KIMS' || !args.provider,
          onClick: (_, update) =>
            update({
              provider: 'KIMS',
              name: 'KIMS KINGSWAY',
              patientName: 'RUCHI BHEDA',
              cardNumber: '1 2 3   4 5 6   7 8 9 0',
            }),
        },
        {
          id: 'tata',
          label: 'Tata AIG',
          tooltip: 'Sage / Olive insurance card',
          isActive: (args) => args.provider === 'Tata',
          onClick: (_, update) =>
            update({
              provider: 'Tata',
              name: 'TATA AIG',
              patientName: 'RUCHI BHEDA',
              cardNumber: '1 2 3   4 5 6   7 8 9 0',
            }),
        },
        {
          id: 'metro',
          label: 'Metropolis',
          tooltip: 'Pastel gold diagnostics card',
          isActive: (args) => args.provider === 'Metro',
          onClick: (_, update) =>
            update({
              provider: 'Metro',
              name: 'METROPOLIS',
              patientName: 'RUCHI BHEDA',
              cardNumber: '1 2 3   4 5 6   7 8 9 0',
            }),
        },
        {
          id: 'add',
          label: 'Add Card',
          tooltip: 'Link new card pass',
          isActive: (args) => args.provider === 'Add',
          onClick: (_, update) =>
            update({
              provider: 'Add',
              name: 'Add Health Card',
              patientName: 'Link another insurance pass',
              cardNumber: '•••• •••• •••• ••••',
            }),
        },
      ],
    };
  } else if (title.includes('Doctors Swipe') || layerName === 'Doctors Swipe') {
    config = {
      hint: 'Switch doctor consultation card profile or click CTA arrow:',
      buttons: [
        {
          id: 'dr-acharya',
          label: 'Dr. Acharya',
          tooltip: 'Nephrologist at KIMS Kingsway',
          isActive: (args) => args.doctorName === 'Dr. Acharya' || !args.doctorName,
          onClick: (_, update) =>
            update({
              doctorName: 'Dr. Acharya',
              specialty: 'Nephrologist',
              hospital: 'KIMS Kingsway Hospital',
              availability: 'Available on week days',
              hours: '10:00 AM - 01:00 PM',
              avatarUrl: undefined,
            }),
        },
        {
          id: 'dr-sarah',
          label: 'Dr. Sarah Jenkins',
          tooltip: 'Cardiologist at Apollo Hospitals',
          isActive: (args) => args.doctorName === 'Dr. Sarah Jenkins',
          onClick: (_, update) =>
            update({
              doctorName: 'Dr. Sarah Jenkins',
              specialty: 'Cardiologist',
              hospital: 'Apollo Hospitals City Centre',
              availability: 'Available Mon - Sat',
              hours: '09:00 AM - 12:00 PM',
              avatarUrl: undefined,
            }),
        },
        {
          id: 'dr-emily',
          label: 'With Photo Avatar',
          tooltip: 'Card with external photo avatar asset',
          isActive: (args) => !!args.avatarUrl,
          onClick: (_, update) =>
            update({
              doctorName: 'Dr. Emily Watson',
              specialty: 'Pediatric Specialist',
              hospital: 'Memorial Childrens Hospital',
              availability: 'Available on weekends',
              hours: '11:00 AM - 03:00 PM',
              avatarUrl:
                'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300',
            }),
        },
      ],
    };
  } else if (title.includes('Frame 37') || layerName === 'Frame 37') {
    config = {
      hint: 'Swipe doctor cards carousel horizontally, or switch heading:',
      buttons: [
        {
          id: 'rec-specialists',
          label: 'Recommended Specialists',
          isActive: (args) => args.heading === 'Recommended Specialists' || !args.heading,
          onClick: (_, update) =>
            update({
              heading: 'Recommended Specialists',
              actionText: 'See all',
            }),
        },
        {
          id: 'top-cardio',
          label: 'Top Cardiologists',
          isActive: (args) => args.heading === 'Top Cardiologists',
          onClick: (_, update) =>
            update({
              heading: 'Top Cardiologists',
              actionText: 'View 12 more',
            }),
        },
      ],
    };
  } else if (title.includes('Navigation Menu') || layerName === 'Navigation Menu') {
    config = {
      hint: 'Click any tab in the bottom bar or select destination:',
      buttons: [
        {
          id: 'home',
          label: 'Home',
          isActive: (args) => args.activeTab === 'Home' || !args.activeTab,
          onClick: (_, update) => update({ activeTab: 'Home' }),
        },
        {
          id: 'add-docs',
          label: 'Add Docs',
          isActive: (args) => args.activeTab === 'Add Docs',
          onClick: (_, update) => update({ activeTab: 'Add Docs' }),
        },
        {
          id: 'report',
          label: 'Report',
          isActive: (args) => args.activeTab === 'Report',
          onClick: (_, update) => update({ activeTab: 'Report' }),
        },
        {
          id: 'schedule',
          label: 'Schedule',
          isActive: (args) => args.activeTab === 'Schedule',
          onClick: (_, update) => update({ activeTab: 'Schedule' }),
        },
      ],
    };
  } else if (title === 'Navigation & Layout/Menu' || layerName === 'Menu') {
    config = {
      hint: 'Switch notification alert count or profile persona:',
      buttons: [
        {
          id: 'notif-0',
          label: '0 Alerts',
          isActive: (args) => args.notificationsCount === 0,
          onClick: (_, update) => update({ notificationsCount: 0 }),
        },
        {
          id: 'notif-3',
          label: '3 Alerts',
          isActive: (args) => (args.notificationsCount ?? 3) === 3,
          onClick: (_, update) => update({ notificationsCount: 3 }),
        },
        {
          id: 'notif-5',
          label: '5 Alerts',
          isActive: (args) => args.notificationsCount === 5,
          onClick: (_, update) => update({ notificationsCount: 5 }),
        },
        {
          id: 'user-alex',
          label: 'Alex Morgan',
          isActive: (args) => (args.userName ?? 'Alex Morgan') === 'Alex Morgan',
          onClick: (_, update) =>
            update({
              userName: 'Alex Morgan',
              locationText: 'San Francisco, CA',
              avatarUrl: undefined,
            }),
        },
        {
          id: 'user-sarah',
          label: 'Dr. Sarah (Photo)',
          isActive: (args) => args.userName === 'Dr. Sarah Jenkins',
          onClick: (_, update) =>
            update({
              userName: 'Dr. Sarah Jenkins',
              locationText: 'Nagpur Hospital • Ward 4',
              avatarUrl:
                'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=200',
            }),
        },
      ],
    };
  } else if (title.includes('All') || layerName === 'All') {
    config = {
      hint: 'Toggle filter pill selection state:',
      buttons: [
        {
          id: 'default-selected',
          label: 'Default (Selected)',
          isActive: (args) => args.state === 'Default' || !args.state,
          onClick: (_, update) => update({ state: 'Default' }),
        },
        {
          id: 'not-selected',
          label: 'Not Selected',
          isActive: (args) => args.state === 'Not Selected',
          onClick: (_, update) => update({ state: 'Not Selected' }),
        },
      ],
    };
  } else if (title.includes('AI Animation') || layerName === 'AI Animation') {
    config = {
      hint: 'Switch AI presence state (Active continuously animates):',
      buttons: [
        {
          id: 'active',
          label: 'Active',
          tooltip: 'Living presence with continuous organic breathing & color morphing',
          isActive: (args) => args.active === true || args.active === undefined,
          onClick: (_, update) =>
            update({
              active: true,
              statusText: 'Listening to your query...',
            }),
        },
        {
          id: 'idle',
          label: 'Idle',
          tooltip: 'Calm static standby orb',
          isActive: (args) => args.active === false,
          onClick: (_, update) =>
            update({
              active: false,
              statusText: 'Eva is ready to assist',
            }),
        },
      ],
    };
  } else if (title.includes('AI Text Bar') || layerName === 'AI Text Bar / Prompt Input') {
    config = {
      hint: 'Type directly in canvas prompt input, or try sample queries:',
      buttons: [
        {
          id: 'sample-reports',
          label: 'Sample: "Compare blood test..."',
          tooltip: 'Insert medical report query',
          isActive: (args) => typeof args.value === 'string' && args.value.includes('blood test'),
          onClick: (_, update) =>
            update({
              value: 'Compare my blood test with previous reports',
            }),
        },
        {
          id: 'sample-doctor',
          label: 'Sample: "Which doctor to consult?"',
          tooltip: 'Insert doctor query',
          isActive: (args) => typeof args.value === 'string' && args.value.includes('Which doctor'),
          onClick: (_, update) =>
            update({
              value: 'Which doctor should I consult?',
            }),
        },
        {
          id: 'clear-query',
          label: 'Clear Query',
          variant: 'action',
          tooltip: 'Clear prompt input to restore placeholder',
          onClick: (_, update) =>
            update({
              value: '',
            }),
        },
      ],
    };
  } else {
    // Intelligent fallback for any component exposing state or status
    const argTypes = primaryStory.argTypes || {};
    const stateOptions = argTypes.state?.options || argTypes.status?.options;
    const stateProp = argTypes.state ? 'state' : argTypes.status ? 'status' : null;

    if (stateProp && Array.isArray(stateOptions) && stateOptions.length > 0) {
      config = {
        hint: `Select ${stateProp} state:`,
        buttons: stateOptions.map((opt: string) => ({
          id: String(opt).toLowerCase().replace(/\s+/g, '-'),
          label: String(opt),
          isActive: (args) => args[stateProp] === opt,
          onClick: (_, update) => update({ [stateProp]: opt }),
        })),
      };
    }
  }

  if (!config || config.buttons.length === 0) {
    return null;
  }

  return (
    <div
      className="doc-playground-bar"
      role="toolbar"
      aria-label="Component interactive playground controls"
    >
      <div className="doc-playground-meta">
        <span className="doc-playground-tag">TRY IT</span>
        <span className="doc-playground-hint">{config.hint}</span>
      </div>

      <div className="doc-playground-controls">
        {config.buttons.map((btn) => {
          const active = btn.isActive ? btn.isActive(currentArgs) : false;
          const isAction = btn.variant === 'action';
          return (
            <button
              key={btn.id}
              type="button"
              className={`doc-playground-btn ${active ? 'is-active' : ''} ${
                isAction ? 'doc-playground-btn--action' : ''
              }`}
              title={btn.tooltip || btn.label}
              aria-pressed={active}
              onClick={() => btn.onClick(currentArgs, updateArgs)}
            >
              <span className="doc-playground-btn__dot" />
              <span>{btn.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentPlayground;
