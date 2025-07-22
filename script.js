    if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log("User location:", lat, lon);
      // Use lat, lon to show on map or send to server
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
} else {
  alert("Geolocation is not supported by your browser.");
}
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log('User IP:', data.ip);
  });
