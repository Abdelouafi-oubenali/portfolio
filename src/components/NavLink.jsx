export default function NavLink({ active, onClick, children }) {
    return (
      <button 
        onClick={onClick}
        className={`font-medium transition-colors ${
          active 
            ? 'text-green-300' 
            : 'text-white hover:text-green-200'
        }`}
      >
        {children}
      </button>
    );
  }