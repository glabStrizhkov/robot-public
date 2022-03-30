/*
* Import the class that is contains methods for working with dbMaster.
* */
const { CRUD } = require('./index');


/*
* In current example we'll use the "switch case" construction to realize optional choosing of methods.
* */

// set method that we are going to use.
const method = 'create';

// in this var we'll get te response.
let response;
// create the object crud of class CRUD.
// as an argument we put url where are located routes we are sending requests to.
const crud = new CRUD('http://localhost:3000');

// asking methods mast being in async function.
(async () => {
    switch (method) {
        case 'create':
            /*
            * we use method create to create a new object in the database table.
            * arguments:
            *   - Model - model we are working with.
            *   - inData - data of creating object.
            *
            * crud.create([Model], [inData])
            * */
            response = await crud.create('Config', {
                varName: "myIP",
                varType: "STRING",
                stringVal: "127.0.0.1",
                intVal: 0
            })
            break;

        case 'getOne':
            /*
            * we use method getOne to get one object from the database table.
            * arguments:
            *   - Model - model we are working with.
            *   - by - name of field we are finding by.
            *   - value - name of field we are finding by.
            *
            * crud.create([Model], [by], [value])
            * */
            response = await crud.getOne('Config', 'myIP', '127.0.0.1');
            break;

        case 'getAll':
            /*
            * we use method getAll to get all objects from the database table.
            * arguments:
            *   - Model - model we are working with.
            *
            * crud.create([Model])
            * */
            response = await crud.getAll('Config');
            break;

        case 'update':
            /*
            * we use method update to update an object in the database table.
            * arguments:
            *   - Model - model we are working with.
            *   - by - object that database will find object to update by.
            *   - inData - object that will be put on the place of the old object.
            *
            * crud.create([Model], [by], [inData])
            * */
            response = await crud.update(
                'Config',
                {
                    myIP: "127.0.0.1"
                },
                {
                    varName: "myIP",
                    varType: "STRING",
                    stringVal: "127.0.0.2",
                    intVal: 0
                }
            )
            break;
        case 'remove':
            /*
            * we use method remove to remove an object from the database table.
            * arguments:
            *   - Model - model we are working with.
            *   - by - object that database will find object to remove by.
            *
            * crud.create([Model], [by])
            * */
            response = await crud.remove('Config', {
                myIP: "127.0.0.1"
            })
            break;
        default:
            // this text will be printed if we try to choose incorrect method.
            console.log("UNKNOWN METHOD!");
            /*
            * BE CAREFUL! CURRENT VERSION OF MODEL HASN'T THE VALIDATION OF METHODS AND PARAMS.
            * */
    }
    // here we print the response of dbMaster.
    console.log('response:', response);
})();
