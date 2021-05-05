const {assert}=require('chai');
const app=require('../app');

//Testing the given requirements 
describe('BMI',function(){
     //Checking for addon new 3 column
     it('Checking for 3 new column',function(){
        const s=app.getUpdatedData()
        let objLength=Object.keys(s[0]).length;
        assert.equal(objLength,6);
     });

     //checking the observation result
     it('Observation in the documentation',function(){
        const temp=app.observe('Under weight');
        assert.typeOf(temp,"Number")
     });
})
