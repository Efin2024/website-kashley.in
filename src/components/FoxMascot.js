import React, { useEffect, useMemo, useState } from 'react';
import { HiChevronRight, HiMinusSm, HiSparkles } from 'react-icons/hi';
import './FoxMascot.css';

const sectionScenes = [
  {
    selector: '.hero',
    position: 'bottom-right',
    badge: 'Fast Lane',
    title: 'Fiko Guide',
    accent: 'hero',
    tips: [
      'Start here for the clearest read on speed, trust, and visual direction.',
      'The hero is where the product promise needs to feel most cinematic.',
      'Keep the opening simple, bold, and calm. Premium pages do less, better.'
    ]
  },
  {
    selector: '.story-flow',
    position: 'mid-right',
    badge: 'Story Mode',
    title: 'Scroll Coach',
    accent: 'story',
    tips: [
      'This section is closest to an Apple-style reveal because the story changes while the visual holds.',
      'If you want more drama, this is the section to deepen with stronger scroll transitions.',
      'Pinned storytelling works best when every step has one message only.'
    ]
  },
  {
    selector: '.features',
    position: 'bottom-left',
    badge: 'Unlocks',
    title: 'Feature Coach',
    accent: 'feature',
    tips: [
      'Feature sections work better when they feel like quick unlocks, not equal-weight blocks.',
      'This area should feel punchy and readable in a few seconds.',
      'Motion here should be subtle. Let the layout do the heavy lifting.'
    ]
  },
  {
    selector: '.why-choose',
    position: 'upper-right',
    badge: 'Trust Layer',
    title: 'Confidence Guide',
    accent: 'trust',
    tips: [
      'Trust needs elegance more than hype. Restraint wins here.',
      'Strong numbers, better spacing, and calm surfaces make finance feel safer.',
      'This section should reassure, not shout.'
    ]
  },
  {
    selector: '.emergency-cta',
    position: 'lower-center',
    badge: 'Final Push',
    title: 'CTA Coach',
    accent: 'cta',
    tips: [
      'This close should feel resolved, confident, and ready for action.',
      'The final CTA works best when everything before it has already reduced doubt.',
      'A little personality at the end is good, but clarity still comes first.'
    ]
  }
];

const LowPolyFox = ({ accent }) => (
  <svg className={`fox-mark fox-mark--${accent}`} viewBox="0 0 220 240" role="img" aria-label="Low poly fox guide">
    <ellipse cx="110" cy="228" rx="72" ry="10" className="fox-mark__shadow" />

    <polygon points="76,18 100,26 112,56 90,50" className="fox-mark__orange-dark" />
    <polygon points="146,16 170,50 158,78 128,50" className="fox-mark__orange" />
    <polygon points="90,50 126,48 158,78 140,110 102,102 74,74" className="fox-mark__orange-light" />
    <polygon points="74,74 102,102 94,124 68,102 60,84" className="fox-mark__orange-mid" />
    <polygon points="140,110 164,100 182,114 150,118" className="fox-mark__orange-mid" />
    <polygon points="102,102 140,110 124,140 104,136 92,114" className="fox-mark__orange" />

    <polygon points="86,90 104,108 96,136 80,124" className="fox-mark__cream" />
    <polygon points="138,108 150,118 136,140 122,140" className="fox-mark__cream-dark" />
    <polygon points="104,136 124,140 114,154" className="fox-mark__nose" />
    <circle cx="104" cy="92" r="4.6" className="fox-mark__eye" />
    <circle cx="132" cy="92" r="4.6" className="fox-mark__eye" />

    <polygon points="114,154 134,146 148,160 126,174" className="fox-mark__orange" />
    <polygon points="96,138 114,154 94,172 78,152" className="fox-mark__teal-light" />

    <polygon points="94,172 126,174 150,158 176,178 166,212 138,218 102,212 86,188" className="fox-mark__teal" />
    <polygon points="94,172 78,152 52,162 56,198 86,188" className="fox-mark__blue-dark" />
    <polygon points="150,158 172,148 188,174 176,178" className="fox-mark__blue" />
    <polygon points="86,188 102,212 72,224 58,198" className="fox-mark__teal-dark" />
    <polygon points="138,218 166,212 164,228 134,226" className="fox-mark__teal-dark" />

    <polygon points="74,146 52,156 46,186 72,176" className="fox-mark__cyan" />
    <polygon points="46,186 56,198 40,210 30,188" className="fox-mark__cream" />
    <polygon points="30,188 40,210 24,202 18,182" className="fox-mark__cream-dark" />
    <polygon points="60,156 92,146 86,188 56,198" className="fox-mark__blue-dark" />

    <polygon points="176,170 190,180 204,214 198,220 182,190" className="fox-mark__sword" />
    <polygon points="170,174 180,180 170,190 160,184" className="fox-mark__purple" />
    <polygon points="158,178 170,174 160,184 150,182" className="fox-mark__orange-mid" />

    <polygon points="150,158 176,152 194,186 172,190 158,178" className="fox-mark__orange-light" />
    <polygon points="176,152 202,144 218,178 194,186" className="fox-mark__cream" />
    <polygon points="194,186 218,178 216,200 198,210" className="fox-mark__cream-dark" />

    <polygon points="88,188 82,212 98,224 106,206" className="fox-mark__boot-dark" />
    <polygon points="82,212 70,228 102,228 114,216 98,224" className="fox-mark__boot" />
    <polygon points="138,218 136,234 150,234 156,222" className="fox-mark__boot-dark" />
    <polygon points="156,222 172,230 170,240 146,240 140,228" className="fox-mark__boot" />

    <polygon points="104,176 112,162 124,172 118,186" className="fox-mark__badge" />
    <polygon points="112,172 118,176 124,172 122,182 114,182" className="fox-mark__cream" />
  </svg>
);

const FoxMascot = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const sections = sectionScenes
      .map((scene) => ({ scene, element: document.querySelector(scene.selector) }))
      .filter((item) => item.element);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const nextIndex = sections.findIndex((item) => item.element === visible.target);
        if (nextIndex >= 0) {
          setActiveSceneIndex(nextIndex);
          setTipIndex(0);
        }
      },
      {
        rootMargin: '-18% 0px -32% 0px',
        threshold: [0.2, 0.4, 0.65]
      }
    );

    sections.forEach((item) => observer.observe(item.element));

    return () => {
      sections.forEach((item) => observer.unobserve(item.element));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTipIndex((current) => (current + 1) % sectionScenes[activeSceneIndex].tips.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [activeSceneIndex]);

  const scene = useMemo(() => sectionScenes[activeSceneIndex], [activeSceneIndex]);

  const handleNextTip = () => {
    setTipIndex((current) => (current + 1) % scene.tips.length);
  };

  return (
    <div className={`fox-mascot fox-mascot--${scene.position} ${isCollapsed ? 'fox-mascot--collapsed' : ''}`}>
      <button
        type="button"
        className="fox-mascot__collapse"
        onClick={() => setIsCollapsed((current) => !current)}
        aria-label={isCollapsed ? 'Expand fox guide' : 'Collapse fox guide'}
      >
        {isCollapsed ? <HiSparkles /> : <HiMinusSm />}
      </button>

      <div className="fox-mascot__dock">
        <div className={`fox-mascot__speech ${isCollapsed ? 'fox-mascot__speech--hidden' : ''}`}>
          <span className="fox-mascot__speech-dot fox-mascot__speech-dot--one"></span>
          <span className="fox-mascot__speech-dot fox-mascot__speech-dot--two"></span>

          <div className="fox-mascot__panel">
            <div className="fox-mascot__panel-top">
              <span className="fox-mascot__badge">{scene.badge}</span>
              <span className="fox-mascot__name">{scene.title}</span>
            </div>

            <p className="fox-mascot__message">{scene.tips[tipIndex]}</p>

            <div className="fox-mascot__panel-bottom">
              <div className="fox-mascot__progress" aria-hidden="true">
                {scene.tips.map((tip, index) => (
                  <span key={tip} className={index === tipIndex ? 'active' : ''}></span>
                ))}
              </div>

              <button type="button" className="fox-mascot__next" onClick={handleNextTip}>
                Next <HiChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div className="fox-mascot__avatar">
          <LowPolyFox accent={scene.accent} />
        </div>
      </div>
    </div>
  );
};

export default FoxMascot;
