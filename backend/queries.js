const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'astitva',
  password: 'avantnet',
  port: 5433,
});

// login validation 
// const getlogin = (request, response) => {

//   const userEmail = parseInt(request.params.email_id);
//   pool.query('SELECT * FROM sign_up WHERE email_id = ?',[email_id] ,(error, results) => {
//     if (error) {
//       response.send({err:err})
//     }
//     if(results){
//       response.send(results);
//     }
//     else{
//       response.send({message:"Invalid email"});
//     }
    
//   });
// };

// const updateUser = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, email } = request.body;

//   pool.query(
//     'UPDATE users SET name = $1, email = $2 WHERE id = $3',
//     [name, email, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`User modified with ID: ${id}`);
//     }
//   );
// };

// const deleteUser = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query('DELETE FROM users WHERE chemist_id = $1', [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`User deleted with ID: ${id}`);
//   });
// };


const createSignUp = (request, response) => {
  const {pharmacy_name, contact_name, email_id,mobile_no, door_no, street,  area, city, state_name, pincode, chemist_drug_licence_no, chemist_photo} = request.body;

  pool.query(
 'INSERT INTO sign_up (pharmacy_name,contact_name,email_id,mobile_no,door_no,street,area,city,state_name,pincode,chemist_drug_licence_no,chemist_photo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *',
    [ pharmacy_name,
      contact_name,
      email_id,
      mobile_no,
      door_no,
      street,
      area,
      city,
      state_name,      
      pincode,
      chemist_drug_licence_no,
      chemist_photo
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

const createLoginVerify = (request, response) => {
  const {user_email,pwd,user_type} = request.body;

  pool.query(
 'INSERT INTO login_verify (user_email,pwd,user_type) VALUES ($1,$2,$3) RETURNING *',
    [ user_email,
      pwd,
      user_type,
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const createOperDetails = (request, response) => {
  const {operator_name,operator_email,operator_mobile,operator_status,dates} = request.body;

  pool.query(
 'INSERT INTO operator_records (operator_name,operator_email,operator_mobile,operator_status,dates) VALUES ($1,$2,$3,$4,$5) RETURNING *',
    [ operator_name,
      operator_email,
      operator_mobile,
      operator_status,
      dates,
     
     ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const getSignup = (request, response) => {
  pool.query('SELECT * FROM sign_up order by chemist_id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



const getloginverify = (request, response) => {
  pool.query('SELECT * FROM login_verify order by id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getSignupById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM sign_up WHERE chemist_id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getOperatorDetails = (request, response) => {
  pool.query('SELECT * FROM operator_records order by id', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getOperatorDetailsByID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM operator_records WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
 
  createSignUp,
  createLoginVerify,
  createOperDetails,
  getloginverify,
  getSignupById,
  getSignup,
  getOperatorDetails,
  getOperatorDetailsByID,
  // updateUser,
  //deleteUser,
  // getlogin
};
