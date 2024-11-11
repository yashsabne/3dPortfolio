const Alert = ({ type, text, onDismiss }) => {
  return (
    <div
      className={`mt-4 p-4 rounded-md flex items-center justify-between shadow-lg transition-transform duration-500 ${
        type === 'danger'
          ? 'bg-red-100 text-red-800 border-l-4 border-red-600'
          : 'bg-green-100 text-green-800 border-l-4 border-green-600'
      }`}
      role="alert"
    >
      <span className="text-sm font-medium">{text}</span>
      <button
        className="ml-4 text-xl font-bold leading-none focus:outline-none"
        onClick={onDismiss}
        aria-label="Close alert"
      >
        &times;
      </button>
    </div>
  );
};

export default Alert;
