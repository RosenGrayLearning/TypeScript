import {location} from './types';
//Instructions to every other cllass on how they can be an argument to 'addmarker'
interface Mappable {
    location:location;
    markerContent:()=>string;
}

class CustomMap {
  private googleMap: google.maps.Map;


  constructor(googleMapIdContainer:string) {
    this.googleMap = new google.maps.Map(document.getElementById(googleMapIdContainer), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable:Mappable):void{
     const marker = new google.maps.Marker({
          map:this.googleMap,
          position: {
              lat:mappable.location.lat,
              lng:mappable.location.lng
          }
      });

      marker.addListener('click',() => {
          const infoWindow = new google.maps.InfoWindow({
              content:mappable.markerContent()
          });

          infoWindow.open(this.googleMap,marker);
      })
  }
}

export default CustomMap;

