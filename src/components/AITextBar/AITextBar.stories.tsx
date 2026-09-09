import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AITextBar } from './AITextBar';
import { AIAnimation } from '../AIAnimation/AIAnimation';
import { ArrowLeft, MoreVertical } from 'lucide-react';

const meta: Meta<typeof AITextBar> = {
  title: 'Feedback & Motion/AI Text Bar',
  component: AITextBar,
  tags: ['autodocs'],
  parameters: {
    figma: {
      layerName: 'AI Text Bar / Prompt Input',
      category: 'Feedback & Motion',
      status: 'Stable',
    },
    designTokens: [
      { property: 'border', token: '--uedp-border-black', value: '1.5px solid #000000', context: 'Capsule perimeter outline stroke' },
      { property: 'border-radius', token: '--uedp-rounded-full', value: '9999px', context: 'Full capsule pill curvature' },
      { property: 'background', token: '--uedp-base-white', value: '#FFFFFF', context: 'Capsule container surface' },
      { property: 'font-family', token: '--uedp-font-family', value: "'Lufga', 'Inter', sans-serif", context: 'Placeholder and query text typeface' },
      { property: 'box-shadow', token: '--uedp-shadow-sm', value: '0 4px 20px rgba(0, 0, 0, 0.06)', context: 'Subtle elevation shadow' },
    ],
    preview: {
      size: 'standard',
      align: 'center',
    },
    docs: {
      description: {
        component: 'Bottom conversational AI prompt input capsule from the healthcare AI assistant. Features paperclip attachment trigger on the left, centered "Ask anything..." placeholder, and audio waveform on the right.',
      },
    },
  },
  argTypes: {
    placeholder: { control: { type: 'text' }, description: 'Centered prompt placeholder text' },
    value: { control: { type: 'text' }, description: 'Controlled text query value' },
    onSubmit: { action: 'submitted', description: 'Callback fired on Enter submission' },
    onAttachmentClick: { action: 'attachmentClicked', description: 'Callback fired when paperclip is clicked' },
    onVoiceClick: { action: 'voiceClicked', description: 'Callback fired when waveform is clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof AITextBar>;

export const Default: Story = {
  name: 'Default (Ask anything...)',
  args: {
    placeholder: 'Ask anything...',
  },
};

export const WithInput: Story = {
  name: 'With Query Input',
  args: {
    value: 'Compare my blood test with previous reports',
    placeholder: 'Ask anything...',
  },
};

export const ScreenComposition: Story = {
  name: 'AI Assistant Screen Composition',
  render: () => {
    const [query, setQuery] = useState('');

    const prompts = [
      'Compare this with my previous reports.',
      'Which doctor should I consult?',
      'What is this medicine for?',
      'Explain this hospital bill.',
    ];

    return (
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          minHeight: '740px',
          margin: '0 auto',
          padding: '24px 20px',
          backgroundColor: '#FFFFFF',
          borderRadius: '32px',
          border: '1.5px solid #000000',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          fontFamily: "'Lufga', 'Inter', -apple-system, sans-serif",
          boxSizing: 'border-box',
        }}
      >
        {/* Top Header Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button
            type="button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            aria-label="Go back"
          >
            <ArrowLeft size={22} color="#000000" />
          </button>
          <button
            type="button"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            aria-label="More options"
          >
            <MoreVertical size={22} color="#000000" />
          </button>
        </div>

        {/* Introduction Context */}
        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, margin: '0 0 8px 0', color: '#000000' }}>
            Hi, I’m Eva
          </h2>
          <p
            style={{
              fontSize: '13.5px',
              lineHeight: 1.5,
              color: '#333333',
              margin: '0 auto',
              maxWidth: '320px',
            }}
          >
            I’ll help you understand your medical reports, manage appointments and reminders, and guide you on what to do next.
          </p>
        </div>

        {/* Center: AI Animation Orb */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
          <AIAnimation size="medium" active={true} />
        </div>

        {/* Lower Area: 2x2 Suggested Prompt Chips */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          {prompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setQuery(p)}
              style={{
                backgroundColor: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '16px',
                padding: '12px 14px',
                textAlign: 'left',
                fontSize: '12.5px',
                fontWeight: 500,
                color: '#18181B',
                lineHeight: 1.35,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Bottom: AI Text Bar */}
        <AITextBar
          value={query}
          onChange={setQuery}
          placeholder="Ask anything..."
        />
      </div>
    );
  },
};
