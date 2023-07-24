import React from 'react';
import useCollage from '../../hooks/useCollage';
import CollageList from '../CollageList/CollageList';

const Admission = () => {

  const [collage] = useCollage()
  const { _id, college_name, admission_date } = collage;
  return (
    <div className="overflow-x-auto container md:my-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>

            <th>Name</th>
            <th>Admission Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}



          {
            collage.map(signleCollage => <CollageList key={signleCollage._id}
              signleCollage={signleCollage}></CollageList>)
          }




        </tbody>
      </table>
    </div>
  );
};

export default Admission;