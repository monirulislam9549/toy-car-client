const AllToy = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>
              <button className="btn btn-success">View Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllToy;
