const UniformComp = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-center font-serif">
        Uniform
      </h1>
      <div className="flex flex-col items-center">
        <img 
          src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884456/decorationone_ksjdfm.png'
          className="mb-6 md:mb-8 mt-4 md:mt-7" 
          alt="Decoration" 
        />
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="w-full md:w-1/2 p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 font-serif">
            Uniform Guidelines
          </h2>
          <ul className="list-disc pl-4 md:pl-5 text-base md:text-lg leading-7 md:leading-8 font-serif">
            <li>White shirt with the school logo on the pocket.</li>
            <li>Blue trousers</li>
            <li>Black shoes with white socks.</li>
            <li>School tie with a matching belt.</li>
            <li>Blazer during winter with the school crest.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-6 flex justify-center">
          <img 
            src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737886704/schoolstudent_tefkpg.jpg'
            alt="Student in uniform" 
            className="rounded-lg shadow-lg w-64 md:w-3/4 h-auto" 
          />
        </div>
      </div>
    </div>
  );
}

export default UniformComp;
