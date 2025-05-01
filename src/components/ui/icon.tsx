
import React from "react";
import * as LucideIcons from "lucide-react";

export type IconName = keyof typeof LucideIcons;

interface IconProps {
  name: IconName | string;
  color?: string;
  size?: number;
  className?: string;
  fallback?: IconName;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  color, 
  size = 24, 
  className = "",
  fallback = "Circle"
}) => {
  const IconComponent = LucideIcons[name as IconName] || LucideIcons[fallback as IconName];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return null;
  }

  return <IconComponent color={color} size={size} className={className} />;
};

export default Icon;
