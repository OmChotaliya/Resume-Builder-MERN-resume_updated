import { connect } from 'mongoose';

const mongoDB = async () => {
    try {
        await connect("mongodb+srv://omchotaliya:fYAiXcBsadQ8vuem@clusterom.ryaqxma.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOm");
        console.log("Connected to database");
    } catch (error) {
        console.log(error.message);
    }
};

export default mongoDB;