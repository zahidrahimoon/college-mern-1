const WorkingCommitteeTable = () => {
  const members = [
    { id: 1, name: 'Mr. Muhammad Ali', designation: 'President' },
    { id: 2, name: 'Mr. Ahmed Khan', designation: 'Vice-President' },
    { id: 3, name: 'Mr. Ali Hassan', designation: 'Vice-President' },
    { id: 4, name: 'Mr. Imran Shah', designation: 'Vice-President' },
    { id: 5, name: 'Mr. Bilal Ahmed', designation: 'Vice-President' },
    { id: 6, name: 'Mr. Usman Khan', designation: 'Hon. General Secretary' },
    { id: 7, name: 'Mr. Muhammad Iqbal', designation: 'Hon. Joint Secretary' },
    { id: 8, name: 'Mr. Asad Ali', designation: 'Member' },
    { id: 9, name: 'Mr. Fahad Khan', designation: 'Member' },
    { id: 10, name: 'Ms. Ayesha Khan', designation: 'Member' },
    { id: 11, name: 'Dr. Muhammad Asif', designation: 'Member' },
    { id: 12, name: 'Mr. Ali Raza', designation: 'Member' },
    { id: 13, name: 'Mr. Muhammad Amir', designation: 'Member' },
  ];

  return (
    <section className="bg-white py-16 border-black border-b font-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Working Committee of PMEWS</h2>
        <div className="flex justify-center mb-4">
          <div className="border-t-2 border-gray-400 w-16"></div>
          <div className="border-t-2 border-red-500 w-8 mx-2"></div>
          <div className="border-t-2 border-gray-400 w-16"></div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 border-b">S#</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Name</th>
                <th className="py-2 px-4 bg-gray-200 border-b">Designation</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                  <td className="py-2 px-4 border-b">{member.id}</td>
                  <td className="py-2 px-4 border-b">{member.name}</td>
                  <td className="py-2 px-4 border-b">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WorkingCommitteeTable;
