export default function MobileNavLink({ active, onClick, children }) {
    return (
      <button 
        onClick={onClick}
        className={`py-3 px-4 border-b border-green-800 transition-colors text-left ${
          active 
            ? 'text-green-300 font-medium' 
            : 'text-white hover:text-green-200'
        }`}
      >
        {children}
      </button>
    );
  }