// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(43.626381076802886,  2.7834470069194355 ),
//     zoom: 9,
//   });

//   const markers = [
//     {
//       position: new google.maps.LatLng(43.575923826579675, 3.9468778704453573),
//       type: "default",
//     },
//     {
//       position: new google.maps.LatLng(43.63371546945498, 3.8654486607743377),
//       type: "default",
//     },
//     {
//       position: new google.maps.LatLng(43.601350349764715, 3.8654486607743377),
//       type: "default",
//     },
//     {
//       position: new google.maps.LatLng(43.59118303043351, 1.4425101709259818),
//       type: "default",
//     },
//     {
//       position: new google.maps.LatLng(43.635107873876635, 1.4440383255594988),
//       type: "default",
//     },
//     {
//       position: new google.maps.LatLng(43.5992631817444, 3.843290260182038),
//       type: "default",
//     },
//     {
//       position: new google.maps.LatLng(43.65538370127563, 2.39751154474675),
//       type: "default",
//     },
//   ];

//   // Create markers.
//   for (let i = 0; i < markers.length; i++) {
//     const marker = new google.maps.Marker({
//       position: markers[i].position,
//       icon: "/includes/assets/icons/favicon.ico",
//       map: map,
//     });
//   }
// }

// window.initMap = initMap;

const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);