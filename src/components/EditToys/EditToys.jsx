import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const EditToys = () => {
  const { id } = useParams();
  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const dataObj = {
      price,
      quantity,
      description,
    };
    fetch(`http://localhost:5000/editToy/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(dataObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated  Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        // form.reset();
      });
  };
  return (
    <div>
      <h1>Edit Toy</h1>
      <form onSubmit={handleEdit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              // defaultValue={}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <input
              type="text"
              //   defaultValue={}
              name="quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <input
              type="text"
              name="description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Update Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default EditToys;
