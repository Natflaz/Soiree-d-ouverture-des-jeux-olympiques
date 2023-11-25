const pool = require("../database/db");
const { v4: uuidv4 } = require('uuid');
const getLoginToken = (email,password,callback) =>
{
    getSessionTokenAsync(email,password)
        .then(res=>{
            callback(null,res);
        })
        .catch(error=>{
            callback(error,null);
        })
}
async function createSessionAsync(userId)
{
    const conn = await pool.connect();
    const uuid = uuidv4();


    await conn.query('INSERT INTO session(session_id, id_user, timeLimit) ' +
        'VALUES($1,$2,CURRENT_TIMESTAMP+INTERVAL \'1 hour\');', [uuid,userId]);
    conn.release();
    return uuid;
}
async function deleteSessionAsync(userId)
{
    const conn = await pool.connect();
    await conn.query('DELETE FROM session WHERE id_user = $1;',[userId]);
    conn.release();
}
async function getUserIdAsync(email,password)
{
    const conn = await pool.connect();
    //console.log("email:"+email+", password:"+password);
    const res = await conn.query('SELECT id_user FROM utilisateur WHERE email=$1 AND password=$2', [email,password]);
    conn.release();
    //console.log("res.rows.length:"+res.rows.length);
    if(res.rows.length!==1)
        return null;
    //console.log("id_user = "+id_user)
    return res.rows[0].id_user;
}
/*const getUserId =(email,password,callback)=>
{
    getUserIdAsync(email,password).then(res=>
    {
        callback(null,res)
    }).catch(error=>{
        console.log(error);
        callback(error,null);
    })
}*/
async function getSessionTokenAsync(email, password) {
    try {
        userId = await getUserIdAsync(email,password)
        console.log("id_user:"+userId);
        if(userId==null)
        {
            console.log("id_user is null");
            return null;
        }

        /*session = await getSessionAsync(userId);
        if(session!=null)
        {
            console.log("deleting session")
            //await deleteSessionAsync(userId);
        }*/
        await deleteSessionAsync(userId);
        uuid = await createSessionAsync(userId);
        console.log("uuid = "+uuid)
        return uuid;
    } catch (error) {
        console.error('Error in getLoginToken:', error);
        throw error;
    }
}


module.exports = {
    getLoginToken:getLoginToken,
}