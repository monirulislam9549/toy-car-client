const ToyTable = ({ toy }) => {
  const { name, photo, seller, email, category, price, rating, quantity } = toy;
  return (
    <tr>
      <td></td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>{/* <div className="font-bold">{name}</div> */}</div>
        </div>
      </td>
      <td>{seller}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <th>{/* <button className="btn btn-ghost btn-xs">details</button> */}</th>
    </tr>
  );
};

export default ToyTable;
