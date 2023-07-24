import React from 'react';

const CollageList = ({ signleCollage }) => {

  const { college_name, admission_date } = signleCollage;
  console.log(signleCollage);
  return (

    <tr className="bg-base-200 ">

      <td>{college_name}</td>
      <td>{admission_date}</td>
      <td>
        <button className="btn btn-sm">Apply</button>
      </td>
    </tr>

  );
};

export default CollageList;