const PeopleContainer = () => {
  return (
    <div className="people-container">
      <h1 className="text-3xl font-semibold text-center mb-6">Our Team</h1>
      <div className="flex flex-col space-y-6">
        <div className="people flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884459/pic-3_ckyq5v.png' alt="John Doe" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">John Doe</span><br /> Senior Marketing Manager <br /> Phone:+1 234 567 890 <br /> E-mail: JohnDoe@gmail.com
          </p>
        </div>
        <div className="people flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884457/pic-2_oxrxpw.png' alt="Anaa" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Anaa</span><br /> Junior Marketing Manager <br /> Phone:+1 243 509 867 <br /> E-mail: AnaaMasih@gmail.com
          </p>
        </div>
        <div className="people flex items-center space-x-4">
          <img src='https://res.cloudinary.com/dzr3drmyk/image/upload/v1737884457/pic-1_vvat3n.png' alt="Ellie" className="w-20 h-20 rounded-full" />
          <p className="text-lg">
            <span className="font-semibold">Ellie</span><br /> Advisor<br /> Phone:+1 324 765 909 <br /> E-mail: EllieJohn@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleContainer;
