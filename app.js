const fs=require('fs')

//Take the input from Data.json file
let rawData=fs.readFileSync('data.json')
let patientData=JSON.parse(rawData)

let uWeight=0,nWeight=0,oWeight=0,mObese=0,sObese=0,vsObese=0;

// 1)  iterate through the elements and finding "BMI , CATEGORY , RISK"

patientData.map((eachPatient)=>{
    let heightM=eachPatient.HeightCm/100;
    let bmi= (eachPatient.WeightKg)/(heightM * heightM);
    eachPatient.BMI=bmi
    if(bmi<=18.4){
        eachPatient.Category="Under weight";
        eachPatient.Risk="Malnutrition risk";
        uWeight+=1;
    }else if(bmi>=18.5 && bmi<=24.9){
        eachPatient.Category="Normal weight";
        eachPatient.Risk="Low risk";
        nWeight+=1;
    }else if(bmi>=25  && bmi<=29.9){
        eachPatient.Category="Over weight";
        eachPatient.Risk="Enhanced risk";
        oWeight+=1;
    }else if(bmi>=30 && bmi<=34.9){
        eachPatient.Category="Moderately obese";
        eachPatient.Risk="Medium risk";
        mObese+=1;
    }else if(bmi>=35 && bmi<=39.9){
        eachPatient.Category="Severely obese";
        eachPatient.Risk="High risk";
        sObese+=1;
    }else{
        eachPatient.Category="Very severely obese";
        eachPatient.Risk="Very high risk";
        vsObese+=1;
    }
})

// exporting updated patient Data
const getUpdatedData=()=>{
    return patientData;
}

 //  2)  OBSERVATION of the Pateient Category and Risk ---Type must be Case Sensitive---
const observe=(type)=>{
    if(type==="Under weight" || type==="Malnutrition risk") return uWeight;
    if(type==="Normal weight" || type==="Low risk") return nWeight;
    if(type==="Over weight" || type==="Enhanced risk") return oWeight;
    if(type==="Moderately obeset" || type==="Medium risk") return mObese;
    if(type==="Severely obese" || type==="High risk") return sObese;
    if(type==="Very severely obese" || type==="Very high risk") return vsObese;
}

//  ADD ON-(Other then given requirements): Creating NEW JSON("updatedData.json") file to produce UPDATED FILE that is with 3 new Column added
const createUpdatedJsonFile=()=>{
    fs.writeFile('./updatedData.json',JSON.stringify(patientData),(err)=>{
        if(err){
            console.log("problem in creating new updated JSON File")
        }else{
            console.log("Check the updateData.json file for updated patient data")
        }
    })
}

module.exports={getUpdatedData,observe,createUpdatedJsonFile}