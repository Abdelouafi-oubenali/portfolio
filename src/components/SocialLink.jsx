export default function SocialLink({ icon, href }) {
    return (
      <a 
        href={href} 
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-800 hover:bg-green-700 transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  }