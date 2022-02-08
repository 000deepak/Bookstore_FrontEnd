import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import service from "../../services/bookstore";
import TextField from "@mui/material/TextField";
import "./customerDetails.scss";

export default function CustomerDetails(props) {
  const [field, setField] = React.useState({
    fullName: "",
    phoneNo: "",
    pinCode: "",
    locality: "",
    address: "",
    city: "",
    landmark: "",
    type: "",

    fullNameError: false,
    phoneNoError: false,
    pinCodeError: false,
    localityError: false,
    addressError: false,
    cityError: false,
    landmarkError: false,
    typeError: false,
  });

  const changeField = (e) => {
    setField((previousvalues) => {
      return { ...previousvalues, [e.target.name]: e.target.value };
    });
  };

  const validation = () => {
    let isError = false;
    let fullNameError = field.fullName === "" ? true : false;
    let phoneNoError = field.phoneNo === "" ? true : false;
    let pinCodeError = field.pinCode === "" ? true : false;
    let localityError = field.locality === "" ? true : false;

    let addressError = field.address === "" ? true : false;
    let cityError = field.city === "" ? true : false;
    let landmarkError = field.landmark === "" ? true : false;
    let typeError = field.type === "" ? true : false;

    setField((previousvalues) => {
      return {
        ...previousvalues,
        fullNameError: fullNameError,
        phoneNoError: phoneNoError,
        pinCodeError: pinCodeError,
        localityError: localityError,

        addressError: addressError,
        cityError: cityError,
        landmarkError: landmarkError,
        typeErrorr: typeError,
      };
    });
    return (isError =
      field.pinCodeError ||
      field.localityError ||
      field.fullNameError ||
      field.phoneNoError ||
      field.addressError ||
      field.cityError ||
      field.typeError ||
      field.landmarkError);
  };

  const next = () => {
    let validated = validation();
    if (!validated) {
      let data = {
        fullName: field.fullName,
        phoneNo: field.phoneNo,
        pinCode: field.pinCode,
        locality: field.locality,
        address: field.address,
        city: field.city,
        type: field.type,
        landmark: field.landmark,
      };

      //   service
      //     .signup(data)
      //     .then((res) => {
      //       console.log(res);

      //       navigate("/");
      //     })
      //     .catch((res) => {});

      console.log(data);
    }
  };

  return (
    <div className="customer-details">
      <form className="customer-form">
        <div>Customer Details</div>
        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="fullName"
            label="fullName"
            variant="outlined"
            size="small"
            className="form-detail"
            autoFocus
            helperText={field.fullNameError ? "fullName is required" : " "}
            error={field.fullNameError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="phoneNo"
            label="phoneNo"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.phoneNoError ? "phoneNo is required" : " "}
            error={field.phoneNoError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="pinCode"
            label="pinCode"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.pinCodeError ? "pinCode is required" : " "}
            error={field.pinCodeError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="locality"
            label="locality"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.localityError ? " locality is required" : " "}
            error={field.localityError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
        <br></br>
        <div>
          <TextField
            id="outlined-basic"
            name="address"
            label="address"
            variant="outlined"
            size="small"
            className=" "
            fullWidth
            helperText={field.addressError ? " address is required" : " "}
            error={field.addressError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>

        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="city"
            label="city"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.cityError ? " city is required" : " "}
            error={field.cityError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
          <TextField
            style={{ width: "45%" }}
            id="outlined-basic"
            name="landmark"
            label="landmark"
            variant="outlined"
            size="small"
            className="form-detail"
            helperText={field.landmarkError ? " landmark is required" : " "}
            error={field.landmarkError}
            onChange={(e) => {
              changeField(e);
            }}
          ></TextField>
        </div>
        <br></br>
        <div className="name" style={{ display: "flex", justifyContent: "space-between" }}></div>
        <br></br>
        <div className="type">
          <div>Type -</div>
          <div className="checkBox">
            <div type="checkbox">
              <input type="checkbox" />
              Home
            </div>
            <div type="checkbox">
              <input type="checkbox" />
              Work
            </div>
            <div type="checkbox">
              <input type="checkbox" />
              Other
            </div>
            <Button onClick={next} style={{ backgroundColor: "blue", color: "white" }}>
              Continue
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
