import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': 'openiot','fiware-servicepath': '/'})
};

const httpOptionsStateWeatherDepartment = {
  headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': 'WeatherDepartment','fiware-servicepath': '/'})
};

const httpOptionsfirebase = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

check:any;

  constructor(public http: HttpClient) { }


  getDataValue(): Observable<any> {
    return this.http.get("http://40.77.65.229:4041/iot/devices", httpOptions)
  }


  getEntity(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/getentity", httpOptions)
  }

  createEntity(payload): Observable<any> {


    console.log(payload)
  console.log("heating....")

 

    return this.http.post("http://137.135.116.1:3000/fiware/createentity", payload,httpOptionsfirebase)
    /*

   let fiware_service_ls ;
   let fiware_servicepath_ls ;

    if(payload.fiware_service == ''){
        fiware_service_ls = ''
    }else{
      fiware_service_ls = payload.fiware_service
    }

    if(payload.fiware_servicepath == ''){
      fiware_servicepath_ls = '/'
  }else{
    fiware_servicepath_ls = payload.fiware_servicepath
  }

    const entityheader = {
      headers: new HttpHeaders({'Content-Type': 'application/json','fiware-service': fiware_service_ls,'fiware-servicepath': fiware_servicepath_ls})
     
    };
   let body = {
    "devices": [	
      {
        "device_id":   payload.device_id,
        "entity_name": payload.entity_name,
        "entity_type": payload.entity_type,
        "timezone":   payload.time_zone,
        "attributes": [
          { "object_id": payload.atrribute_object, "name":payload.attribute_name, "type":payload.attribute_type}			
         ],	
         "static_attributes": [
            {"name":"refStore", "type": "Relationship","value": "urn:ngsi-ld:Store:001"}	
         ]
      }
    ]
   }
     */

  }
  


  getNorthWeatherStation(): Observable<any> {
  //  return this.http.get("http://137.135.116.1:3000/fiware/northweatherstation",httpOptionsStateWeatherDepartment)
   return this.http.get("http://20.197.62.1:3000/v2/entities/urn:ngsi-ld:NorthWeatherStation", httpOptionsStateWeatherDepartment)
  }

  getNorthWeatherStationfromnodeserver(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/northweatherstation", httpOptions)
  }

  getNorthWeatherStationfromnodeserverofcunus(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/cynus", httpOptions)
  }

  getTemperatureNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/cynus/temperature", httpOptions)
  }
  getHumidityNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/cynus/humidity", httpOptions)
  }

  getAirQualityNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/cynus/airquality", httpOptions)
  }

  getWindSpeedNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://137.135.116.1:3000/fiware/cynus/windspeed", httpOptions)
  }



  getSouthWeatherStationfromnodeserver(): Observable<any> {
    return this.http.get("http://localhost:3000/fiware/southweatherstation", httpOptions)
  }




  
getGkitchenFanStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Fan.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenFanStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Fan.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}


getGkitchenJuicerStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Juicer.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenJuicerStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Juicer.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenLightsStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Lights.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenLightsStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Lights.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenMicrowaveOvenStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/MicrowaveOven.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenMicrowaveOvenStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/MicrowaveOven.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenRefrigratorStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Refrigrator.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenRefrigratorStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Refrigrator.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenSpeakerStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Speaker.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenSpeakerStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Speaker.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}

getGkitchenToasterStatus(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/gkitchen/Toaster.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptionsfirebase)
}
setGkitchenToasterStatus(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/gkitchen/Toaster.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptionsfirebase)
}


}





