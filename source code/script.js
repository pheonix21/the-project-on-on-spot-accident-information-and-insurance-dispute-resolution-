const accidentForm = document.getElementById("accident-form");
const verifyBtn = document.getElementById("verify-btn");

verifyBtn.addEventListener("click", async (event) => {
  event.preventDefault(); 

  // checkbox validation
  if (!document.getElementById("verify-checkbox").checked) {
    alert("Please verify that all details are correct.");
    return;
  }

  try {
  
    const formData = new FormData(accidentForm);
    const data = {
      policyNumber: formData.get("policy-number"),
      policyHolderName: formData.get("policy-holder-name"),
      phoneNumber: formData.get("phoneNumber"),
      dateOfAccident: formData.get("date-of-accident"),
      chassieNumber: formData.get("chassieNumber"),
      ageofVehicle: formData.get("ageofVehocle"),
      registrationNumber: formData("registeredNumber")
      }
      formData.append("firCopy", document.getElementById("fir-copy").files[0]),
      formData.append("witnessImage", document.getElementById("witness-image").files[0]),
      formData.append("witnessVideo", document.getElementById("witness-video").files[0]),

    };

    // the api key is added here 
    const response = await fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-nputo/endpoint/data/v1/api/save-accident-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Data saved successfully!");
      
    } else {
      console.error("Error saving data:", response.statusText);
      // this is for handling error broo
    }
  } catch (error) {
    console.error("Error:", error);
    // 
  }
});
