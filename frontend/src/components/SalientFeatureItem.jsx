const SalientFeatureItem = ({ Icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer">
      <Icon className="w-16 h-16 mb-4 text-purple-600 transition-colors duration-300" />
      <h3 className="text-xl font-semibold mb-2 font-serif">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SalientFeatureItem;
