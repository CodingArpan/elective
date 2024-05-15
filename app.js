const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Import axios
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://codingarpan:UG5zx6avn2U073lT@testingzone.pmogmlh.mongodb.net/electivesubjects?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    uniqueId: String,
    name: String,
});
const Data = mongoose.model('Data', dataSchema);
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
const enrdata = [
    22012011001, 22012011002, 22012011003, 22012011004, 22012011005, 22012011006, 22012011007, 22012011008, 22012011009, 22012011010, 22012011011, 22012011012, 22012011013, 22012011014, 22012011015, 22012011016, 22012011017, 22012011018, 22012011019, 22012011020, 22012011022, 22012011023, 22012011024, 22012011025, 22012011026, 22012011027, 22012011028, 22012011029, 22012011030, 22012011032, 22012011033, 22012011034, 22012011035, 22012011036, 22012011037, 22012011038, 22012011040, 22012011041, 22012011042, 22012011043, 22012011044, 22012011045, 22012011046, 22012011047, 22012011048, 22012011049, 22012011050, 22012011051, 22012011052, 22012011054, 22012011055, 22012011056, 22012011057, 22012011058, 22012011059, 22012011060, 22012011061, 22012011062, 22012011063, 22012011064, 22012011065, 22012011066, 22012011067, 22012011068, 22012011069, 22012011070, 22012011071, 22012011072, 22012011073, 22012011074, 22012011075, 22012011076, 22012011077, 22012011078, 22012011079, 22012011080, 22012011081, 22012011082, 22012011083, 22012011084, 22012011085, 22012011086, 22012011087, 22012011088, 22012011089, 22012011090, 22012011091, 22012011092, 22012011093, 22012011094, 22012011095, 22012011096, 22012011097, 22012011098, 22012011099, 22012011100, 22012011101, 22012011102, 22012011103, 22012011104, 22012011105, 22012011106, 22012011107, 22012011108, 22012011109, 22012011110, 22012011111, 22012011112, 22012011113, 22012011114, 22012011116, 22012011117, 22012011118, 22012011119, 22012011120, 22012011121, 22012011122, 22012011123, 22012011124, 22012011125, 22012011126, 22012011127, 22012011128, 22012011129, 22012011130, 22012011131, 22012011133, 22012011136, 22012011137, 22012011138, 22012011139, 22012011140, 22012011141, 22012011142, 22012011143, 22012011144, 22012011145, 22012011146, 22012011147, 22012011148, 22012011149, 22012011150, 22012011151, 22012011152, 22012011153, 22012011154, 22012011155, 22012011156, 22012011157, 22012011158, 22012011160, 22012011161, 22012011162, 22012011163, 22012011164, 22012011165, 22012011166, 22012011167, 22012011168, 22012011169, 22012011170, 22012011171, 22012011172, 22012011173, 22012021001, 22012021002, 22012021003, 22012021004, 22012021005, 22012021006, 22012021008, 22012021009, 22012021010, 22012021012, 22012021013, 22012021015, 22012021017, 22012021018, 22012021019, 22012021020, 22012021021, 22012021022, 22012021024, 22012021025, 22012021026, 22012021027, 22012021028, 22012021029, 22012021030, 22012021031, 22012021032, 22012021033, 22012021035, 22012021036, 22012021037, 22012021038, 22012021039, 22012021040, 22012021041, 22012021042, 22012021043, 22012021044, 22012021045, 22012021046, 22012021047, 22012021048, 22012021049, 22012021050, 22012021051, 22012021052, 22012021053, 22012021054, 22012021055, 22012021056, 22012021057, 22012021058, 22012021059, 22012021060, 22012021062, 22012021063, 22012021064, 22012021065, 22012021066, 22012021067, 22012021068, 22012021069, 22012021070, 22012021071, 22012021072, 22012021073, 22012021075, 22012021076, 22012021077, 22012021078, 22012021079, 22012021081, 22012021082, 22012021083, 22012021084, 22012021085, 22012021086, 22012021087, 22012021088, 22012021089, 22012021090, 22012021091, 22012021092, 22012021093, 22012021094, 22012021095, 22012021096, 22012021097, 22012021098, 22012021099, 22012021100, 22012021101, 22012021102, 22012021103,
];
let flag = 0;
app.get('/', (req, res) => {
    res.send('App is healthy');
})
app.get('/getdata', async(req, res) => {
   
    const data = await Data.findOne({ uniqueId: "5thSemElectiveChoice" }).exec();
    const electiveData = JSON.parse(data.name);
    if (data) {
        res.status(200).json(electiveData);
    } else {
        res.status(404).json({ message: 'Data not found' });
    }

})

app.get('/fetchdata', async (req, res) => {
    const data = {
        "records": []
    };
    res.status(200).json({ message: 'Fetching data...' });
    if (flag == 1) {
        return res.end();
    }
    flag = 1;
    console.log("started")
    res.end();
    try {
        // for (let i = 0; i < enrdata.length; i++) {
        for (let i = 0; i < 10; i++) {
            let val;
            try {
                val = enrdata[i];
                let queryURL = `https://script.google.com/macros/s/AKfycbwP3XOlI33GcQzZ1m7DWzt-CuwRy3YB8BBwGU_0lFf7KD56kUY/exec?spreadsheet=a&action=get&id=1E76LwTSDNnVUChHY-NNUqIxH_k_gJHWocwNvark90vI&sheet=5thSemElectiveChoice&sheetuser=${val}&sheetuserIndex=1`
                const response = await axios.get(queryURL);
                const value = response.data;
                data.records.push(value.records[0]);
            } catch (error) {
                console.log(val, "error")
            } finally {
                console.log(val, "done")
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Failed to fetch data' });
    }
    finally {
        console.log("finally")
        // console.log(data)
    }

    let electivedata = JSON.stringify(data);
    await Data.findOneAndUpdate({ uniqueId: "5thSemElectiveChoice" }, { name: electivedata }, { upsert: true, new: true });

    flag = 0;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});