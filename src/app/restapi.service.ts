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

param:any;

backendip="13.95.3.171";


  constructor(public http: HttpClient) { }




contextbrokerhealth(): Observable<any> {


//   //var  response = this.http.get("http://"+this.backendip+":3002/fiware/contextbroker/health", httpOptionsfirebase)
// //console.log(response)
//   if (this.http.get("http://"+this.backendip+":3002", httpOptionsfirebase)){
//     return this.http.get("http://"+this.backendip+":3002/fiware/contextbroker/health", httpOptionsfirebase)
// }else{
//   return null
// }
  return this.http.get("http://"+this.backendip+":3002/fiware/contextbroker/health", httpOptionsfirebase)
}



Cygnushealth(): Observable<any> {

  return this.http.get("http://"+this.backendip+":3002/fiware/cygnus/health", httpOptionsfirebase)
}

keyrockhealth(): Observable<any> {

  return this.http.get("http://"+this.backendip+":3002/fiware/keyrock/health", httpOptionsfirebase)
}


pepproxykhealth(): Observable<any> {

  return this.http.get("http://"+this.backendip+":3002/fiware/pep_proxy/health", httpOptionsfirebase)
}

mongodbkhealth(): Observable<any> {

  return this.http.get("http://"+this.backendip+":3002/fiware/mongodb/health", httpOptionsfirebase)
}



//---------------------------------------------------------------------------------------------

  geteuphrydata(location_id,profile_id){
    var payload = {"locationid":location_id, "profileid": profile_id} 
    
    var link ="http://localhost:3000/euphrydata/"+location_id+"/"+profile_id
    console.log(link)
   // window.open('http://13.232.236.50/demo-ops-panel ');
    return  this.http.get(link,httpOptionsfirebase)

  }

  getdataeuphry(): Observable<any>{
  
      let url ="http://localhost:3000/euphrydata"
      console.log(url)
       return this.http.get(url, httpOptionsfirebase)  
  }

  dataloggerstatus(): Observable<any>{
  
    let url ="http://localhost:3000/datalogger/status"
    console.log(url)
     return this.http.get(url, httpOptionsfirebase)  
}



  loginUser(value){
    // console.log(value.email)
    // console.log(value.password)
    var payload = {"email":"oscar.ledesma@atos.net", "password": "vaccine00","remenber":true} 
    console.log(payload)
   
   // window.open('http://13.232.236.50/demo-ops-panel ');
    return  this.http.post("https://vaccine.eupry.com/api/login", payload,httpOptionsfirebase)

  }


  opspanel(){
    // console.log(value.email)
    // console.log(value.password)
    var payload = JSON.stringify({
      "username": "arun",
      "password": "test"
    }) 
    console.log(payload)
    return this.http.post("http://13.232.236.50/demo-ops-panel", payload,httpOptionsfirebase)
  }


//------------------------------------------------------------------------------


  cygusparamset(val){
this.param =val
  }
  getEntitydata(): Observable<any> {
   let url ="http://"+this.backendip+":3001/fiware/cynus/getdata/"+this.param
   console.log(url)
    return this.http.get(url, httpOptionsfirebase)
  }



  getEntityinfo(ename): Observable<any> {
    let url ="http://"+this.backendip+":3001/fiware/orion/getentity/"+ename
    console.log(url)
     return this.http.get(url, httpOptionsfirebase)
   }


  
      getorionrealtime(val): Observable<any> {
       let url ="http://"+this.backendip+":3001/fiware/orion/getdata/"+val
       console.log(url)
        return this.http.get(url, httpOptionsfirebase)
      }


  gettimeseriescygnus(){

  /*
    //let data1 ='{"id":'+'"'+payload.id+'"'+',"type":'+'"'+payload.type+'"'+','
    
     let data='{"entity":'+'"'+'"'+'}'
     data = JSON.stringify(data)
     data=JSON.parse(data)
    console.log(data)
    */
        return this.http.get("http://"+this.backendip+":3001/fiware/cynus/getdata/"+this.param,httpOptionsfirebase)
      }




  getDataValue(): Observable<any> {
    return this.http.get("http://40.77.65.229:4041/iot/devices", httpOptions)
  }


  getEntity(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/getentity", httpOptions)
  }

  createEntity(payload): Observable<any> {


    console.log(payload)
  console.log("heating....")

 

    return this.http.post("http://"+this.backendip+":3000/fiware/createentity", payload,httpOptionsfirebase)
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
  
  

createOrionEntity(payload,variable): Observable<any> {
    
let attname= payload.attribute_name

console.log(variable)


let obj=[]
for(let i=0;i<variable.length;++i){
  obj.push(JSON.stringify({[variable[i].attName]:{type:variable[i].atttype}}))

  }

console.log(typeof(payload.id))
let n =variable.length
let data1 ='{"id":'+'"'+payload.id+'"'+',"type":'+'"'+payload.type+'"'+','
for(let i=0;i<variable.length;++i){
data1+=obj[i].slice(1,obj[i].length-1)+','
}




/*  let  data=
    {
        "id": payload.id,
            "type": payload.type,
            [payload.attribute_name] :{           
              "type": payload.attribute_type
            }
    
  }
  */
data1=data1.slice(0,-1)
data1=data1+'}'
console.log(data1)
data1 = JSON.stringify(data1)
let data = JSON.parse(data1)
  console.log(data)

     return this.http.post("http://"+this.backendip+":3001/fiware/orion/createentity",(data) ,httpOptionsfirebase)
    }





  getNorthWeatherStation(): Observable<any> {
  //  return this.http.get("http://137.135.116.1:3000/fiware/northweatherstation",httpOptionsStateWeatherDepartment)
   return this.http.get("http://"+this.backendip+":3001/v2/entities/urn:ngsi-ld:NorthWeatherStation", httpOptionsStateWeatherDepartment)
  }

  getNorthWeatherStationfromnodeserver(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/northweatherstation", httpOptions)
  }

  getNorthWeatherStationfromnodeserverofcunus(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/cynus", httpOptions)
  }

  getTemperatureNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/cynus/temperature", httpOptions)
  }
  getHumidityNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/cynus/humidity", httpOptions)
  }

  getAirQualityNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/cynus/airquality", httpOptions)
  }

  getWindSpeedNorthWeatherStationCgynusHistoricdatafromnodeserver(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/cynus/windspeed", httpOptions)
  }



  getSouthWeatherStationfromnodeserver(): Observable<any> {
    return this.http.get("http://"+this.backendip+":3001/fiware/southweatherstation", httpOptions)
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



//----------------------------------------------------------------------


getLightIntensityData(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/lightintensity.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}

getPowerBackupData(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/powerbackup.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}

getWaterTankData(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/watertank.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}


getAirQualityData(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/airquality.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}

setTelevisionValue(payload): Observable<any> {
  return this.http.put("https://iotapp-aad4a.firebaseio.com/ldr.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", payload,httpOptions)
}
getldrDataValue(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/ldr.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}

getTemperatureTimeSeries(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/temperature.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}
getHumidityTimeSeries(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/humidity.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}
getAirQualityTimeSeries(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/airquality.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}
getDistanceTimeSeries(): Observable<any> {
  return this.http.get("https://iotapp-aad4a.firebaseio.com/distance.json?auth=o94DBUv8yCSRRI2NNYv4bHIQmvmheQBTnoOkhhjt", httpOptions)
}



}





