import BubbleMenu from '../BubbleMenu/BubbleMenu';

export default function Navbar() {
  const menuItems = [
    {
      label: 'Home',
      href: '#home',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
      label: 'About',
      href: '#about',
      ariaLabel: 'About Us',
      rotation: 8,
      hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    },
    {
      label: 'Features',
      href: '#features',
      ariaLabel: 'Features',
      rotation: -8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'Testimonials',
      href: '#testimonials',
      ariaLabel: 'Testimonials',
      rotation: 8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
      label: 'FAQ',
      href: '#faq',
      ariaLabel: 'FAQ',
      rotation: -8,
      hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
  ];

  return (
    <BubbleMenu
      logo={
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI
        </span>
      }
      items={menuItems}
      useFixedPosition={true}
      menuBg="#ffffff"
      menuContentColor="#111111"
      animationEase="back.out(1.7)"
      animationDuration={0.6}
      staggerDelay={0.1}
    />
  );
}