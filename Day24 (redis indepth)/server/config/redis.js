import { createClient } from 'redis';

const redisClient = createClient({
    username: 'default',
    password: 'OipVgiryYPIXkYA3QLwJFTALcH7nYhC2',
    socket: {
        host: 'redis-16975.c264.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16975
    }
});

export async function redisConnect() {
    try{
        await redisClient.connect();
        console.log(`Redis connected`);
    }
    catch(err){
        console.log(`Error ${err.message}`);
        throw err;
    }
    
}


export default redisClient;


