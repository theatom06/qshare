// Import Gun.js
import Gun from 'gun'

// Initialize Gun with peers
let gun = Gun(['https://peer.wallie.io/gun', 'https://gun-manhattan.herokuapp.com/gun', 'https://gundb-relay-mlccl.ondigitalocean.app/gun']);

// Get a reference to the Gun database
let db = gun.get('qshare-gandalf-5106').get('db');

// Get references to the file upload button and input field for uploading
const fileUploadButton = document.querySelector("button#file-upload");
const fileUploadInput = document.querySelector("input#file-upload-file");

// Get references to the file download button and input field for downloading
const fileDownloadButton = document.querySelector("button#file-download");
const fileDownloadInput = document.querySelector("input#file-download");

// Add an event listener to the file upload button
fileUploadButton.addEventListener("click", async () => {
  const fileId = fileUploadInput.value;

  // You should implement the logic to handle file upload here.
  // For example, you can use the Gun database to store the file reference.
  // You might also want to handle the actual file upload to a server or storage service.

  // For this example, let's assume you're storing a reference to the file with its ID.
  db.put({ fileId: fileId, uploaded: true });

  // Show an alert to indicate that the file has been uploaded
  alert(`File with ID ${fileId} has been uploaded.`);

  // Clear the input field after the file is uploaded
  fileUploadInput.value = "";
});

// Add an event listener to the file download button
fileDownloadButton.addEventListener("click", async () => {
  const fileId = fileDownloadInput.value;

  // You should implement the logic to handle file download here.
  // Retrieve the file reference from the Gun database based on the fileId.
  // You might need to fetch the actual file data from your storage.

  // For this example, let's assume you retrieve the file reference from the database.
  db.get(fileId).once((data) => {console.log(data)});
  
  if (fileReference) {
    // You can perform actions like displaying the file or redirecting to a download link.
    alert(`File with ID ${fileId} found.`);
    console.log("File Found:", fileReference);
  } else {
    alert(`File with ID ${fileId} not found.`);
    console.log("File not found.");
  }

  // Clear the input field after the download attempt
  fileDownloadInput.value = "";
});
