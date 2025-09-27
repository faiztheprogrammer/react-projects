function Card({ title, subtitle, compact, children, actions }) {
  return (
    <div
      className={`bg-white shadow-md border border-gray-200 rounded-xl ${
        compact ? 'p-4 space-y-2' : 'p-8 space-y-4'
      } max-w-md mx-auto mt-10 transition-all duration-300`}
    >
      {/* Header Section */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>

      {/* Body Section */}
      <div className="text-gray-700">
        {children}
      </div>

      {/* Footer Section */}
      {actions && (
        <footer
            className="flex justify-center pt-4 border-t border-gray-100">
            {actions}
        </footer>
      )}
    </div>
  );
}

export default Card;
